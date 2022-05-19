import axios from "axios";

const instance = axios.create({
    baseURL: "https://team-el-gazoly-bank-system-main-k3vbm4kpjq-wm.a.run.app/api"
})

export default instance