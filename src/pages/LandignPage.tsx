import { useEffect } from "react";
import { useSelector } from "react-redux";
import EmployeeHierarchy from "../components/EmployeeHierarcy";

function LandingPage() {
  const { data } = useSelector((state: any) => state.rawData);

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="w-full">
      <h1 className="font-mono text-2xl font-bold text-gray-500 ml-5 mt-10">
        Employee Hierarchys
      </h1>

      <div className="m-5">
        <EmployeeHierarchy />
      </div>
    </div>
  );
}

export default LandingPage;
