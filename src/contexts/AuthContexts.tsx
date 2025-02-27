"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Auth } from "@/api/auth";
import axiosInstance from "@/api/axiosInstance";
import { Loading } from "@/components/ui/loading";
import { fetchUserData, type UserData } from "@/api/user";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserData | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (updatedUser: Partial<UserData>) => void; // ✅ Added updateUser
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);

  const loadUserData = useCallback(async () => {
    try {
      const userData = await fetchUserData();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // If we can't fetch user data, we should probably log out
      Auth.logout();
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = Auth.getToken();
      if (token) {
        try {
          // Validate bằng cách gọi request tới API có cần token
          await axiosInstance.get("/users/me");
          setIsAuthenticated(true);
          // Load user data
          await loadUserData();
        } catch (error) {
          console.error("Token validation failed:", error);
          Auth.logout();
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, [loadUserData]);

  const login = async (email: string, password: string) => {
    try {
      const response = await Auth.login({ email, password });
      if (response.isSuccess) {
        setIsAuthenticated(true);
        // Load user data after successful login
        await loadUserData();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    Auth.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  // Function to update user state (used after avatar upload)
  const updateUser = (updatedUser: Partial<UserData>) => {
    setUser((prev) => (prev ? { ...prev, ...updatedUser } : null)); // Merge updates
  };

  if (isLoading) {
    return <Loading text="Please wait, we are cooking..." />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, updateUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
