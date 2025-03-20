import { r as reactExports } from './index-BxW4NEkE.js';

// packages/react/direction/src/Direction.tsx
var DirectionContext = reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = reactExports.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

export { useDirection as u };
