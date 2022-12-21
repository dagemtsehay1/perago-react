import Axios from "axios";

const baseUrl = "https://debo-15e6d-default-rtdb.firebaseio.com/hierarchy.json";

export async function getAllHierarchy (){
  let res = await Axios.get(baseUrl);
  let rawD = Object.keys(res.data).map((key) => [key, res.data[key]]);

  return rawD;
};


export async function addHierarchy(data:any){
  let res = await Axios.post(baseUrl,data,{
    headers:{
      "Content-Type": "application/json",
    }
  })

  return res.status == 200 ? true : false;
}