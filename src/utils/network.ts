import Axios from "axios";

const baseUrl = "https://debo-15e6d-default-rtdb.firebaseio.com/hierarchy";

export async function getAllHierarchy() {
  let res = await Axios.get(baseUrl + ".json");
  let rawD = Object.keys(res.data).map((key) => [key, res.data[key]]);

  return rawD;
}

export async function addHierarchy(data: any) {
  let res = await Axios.post(baseUrl + ".json", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.status == 200 ? true : false;
}

export async function updateHierarcy(id: any, data: any) {
  let url = baseUrl + "/" + id + ".json";
  let res = await Axios.put(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.status == 200 ? true : false;
}
export async function deleteHierarcy(id: any) {
  let url = baseUrl + "/" + id + ".json";

  let res = await Axios.delete(url);

  return res.status == 200 ? true : false;
}
