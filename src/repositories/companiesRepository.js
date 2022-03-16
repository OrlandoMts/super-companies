import Repository from "./Repository";

let endpoint = "companies/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCompanies(){
        return Repository.request(endpoint,{})
    }
}