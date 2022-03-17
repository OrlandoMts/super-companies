import Repository from "./Repository";

let endpoint = "companies/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCompanies(){
        return Repository.request(endpoint,{})
    },
    postCompanies(newCompany){
        return Repository.request(endpoint,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                "name":String(newCompany.name).trim(),
                "webSite":String(newCompany.webSite).trim(),
                "foundation":parseInt(newCompany.foundation)
            })
        })
    }
}