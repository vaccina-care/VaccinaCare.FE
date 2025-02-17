import { useState, useEffect } from "react";
import { PackageSidebar } from "@/components/vaccineServices/Services";
import { PackageDetails } from "@/components/vaccineServices/ServiceDetails";
import { getVaccinePackages, getVaccineById } from "@/api/service";

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState<string>("860cdd9e-b6e0-4e1b-e56f-08dd4eeb7d57");  
  const [vaccinePackages, setVaccinePackages] = useState<any[]>([]);
  const [selectedPackageData, setSelectedPackageData] = useState<any | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const packages = await getVaccinePackages();
        console.log("API Response for Packages:", packages);
        setVaccinePackages(packages);
      } catch (error) {
        console.error("Failed to fetch vaccine packages:", error);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      if (!vaccinePackages.length || !selectedPackage) return;

      // Kiểm tra selectedPackage có phải là GUID hợp lệ không
      console.log("Selected Package ID:", selectedPackage);

      // Tìm package dựa trên ID (phải là GUID)
      const currentPackage = vaccinePackages.find(pkg => pkg.id === selectedPackage);
      console.log("Current Package Found:", currentPackage);

      if (!currentPackage) {
        console.error("Package not found:", selectedPackage);
        return;
      }

      if (!Array.isArray(currentPackage.vaccineDetails) || currentPackage.vaccineDetails.length === 0) {
        console.error("No vaccine details found for this package");
        return;
      }

      try {
        const vaccineDetails = await Promise.all(
          currentPackage.vaccineDetails.map((detail: { vaccineId: string }) =>
            getVaccineById(detail.vaccineId)
          )
        );
        setSelectedPackageData({ ...currentPackage, vaccineDetails });
      } catch (error) {
        console.error("Failed to fetch vaccine details:", error);
      }
    };

    fetchPackageDetails();
  }, [selectedPackage, vaccinePackages]);

  if (!selectedPackageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#FCFEFE] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#1E1E1E] mb-8">GIỚI THIỆU CÁC GÓI TIÊM CHỦNG</h1>
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6">
          <PackageSidebar 
            selectedPackage={selectedPackage} 
            onSelectPackage={setSelectedPackage}
          />
          <div className="space-y-6">
            <PackageDetails
              packageId={selectedPackage || "Gói không xác định"} // Sử dụng title map
              price={selectedPackageData.price}
              vaccineInfo={selectedPackageData.vaccineDetails || []}
            />
            <div className="flex justify-end">
              <button className="bg-[#526AE9] text-white px-8 py-3 rounded-lg hover:bg-[#526AE9]/90 transition-colors">
                ĐĂNG KÝ MUA GÓI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
