

import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmJjYTQxYzI3NWFlMDllMmZlMTliMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE1MjMwMywiZXhwIjoxNjY4NDExNTAzfQ.8qge6ZjJsxYDLwzUDjTRJHrOhSY3gWyPaRLAHcgOBVw"
// console.log(TOKEN);
// const TOKEN = JSON.parse(localStorage.getItem("persist:root")?.user)?.currentUser?.accessToken
// const TOKEN =  localStorage?.getItem("persist:root")?.currentUser?.accessToken? JSON.parse(localStorage?.getItem("persist:root")) : null
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken;
console.log(TOKEN);





export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});