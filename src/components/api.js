import axios from "axios";

export const getDogs = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getSortedWithFilter = async (filterParam, searchParam) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/", {
      params: {
        filter_name: filterParam.value,
        search: searchParam,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
