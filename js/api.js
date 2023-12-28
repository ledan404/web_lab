export const baseRequest = async ({
  path = "",
  method = "GET",
  body = null,
}) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    const response = await fetch(path, reqParams);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export const getAllDogs = async () => {
  const rawResp = await baseRequest({ path: "/" });
  return rawResp.json();
};

export const createDog = (body) =>
  baseRequest({ path: "/", method: "POST", body });

export const updateDog = (id, body) =>
  baseRequest({ path: `/${id}`, method: "PUT", body });

export const deleteDog = (id) =>
  baseRequest({ path: `/${id}`, method: "DELETE" });

export const getDogById = async (id) => {
  const rawResp = await baseRequest({ path: `/${id}`, method: "GET" });
  return rawResp.json();
};
