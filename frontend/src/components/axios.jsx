import axios from "axios";

const instance = axios.create({
    baseURL: "https://spark-foundation-banksystem.herokuapp.com/api"
})

export default instance