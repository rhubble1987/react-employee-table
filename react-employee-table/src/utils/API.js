import axios from "axios";

export default {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?nat=us,au,gb,ca,nz&results=25");
    }
};