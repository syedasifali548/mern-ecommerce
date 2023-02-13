import axios from "axios"

const BASE_URL = "http://localhost:5000/api";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWViMjdmYTVhNTYxOTU2ODYwMGE1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzgyMzMxMiwiZXhwIjoxNjY4MDgyNTEyfQ.-zkudGfo5I72UrFAsHPTkuFaJ9k0_73gkoc30rnn8fs"
const TOKEN =  localStorage?.getItem("persist:root")?.currentUser?.accessToken? JSON.parse(localStorage?.getItem("persist:root")) : null


export const pubicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})