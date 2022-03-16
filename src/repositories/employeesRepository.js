import Repository from "./Repository";

let endpoint = "employees/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getEmployees(){
        return Repository.request(endpoint, {})
    }
}