import axios from "axios";

axios.defaults.baseURL = "http://worldtimeapi.org/api/timezone/";
axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios;
