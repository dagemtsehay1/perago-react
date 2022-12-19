import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeHierarchy from "../components/EmployeeHierarcy";
import { getAllHierarchy } from "../utils/network";
import { setRawData } from "../utils/rawDataReducer";

function LandingPage() {
  const { data } = useSelector((state: any) => state.rawData);
  const dispatch = useDispatch();

  async function getAllData (){

    let rawD = await getAllHierarchy();
    console.log(rawD);
    dispatch(setRawData(rawD));
  }

  useEffect(() => {   
    getAllData() 
  }, []);
  return (
    <div className="w-full">
      <h1 className="font-mono text-2xl font-bold text-gray-500 ml-5 mt-10">
        Employee Hierarchys
      </h1>

      <div className="m-5">
        {data.length== 0 ? <img className="m-auto w-14" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"/> :<EmployeeHierarchy />}
      </div>
    </div>
  );
}

export default LandingPage;
