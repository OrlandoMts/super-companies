const API = "http://localhost:8000/api/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    request(endpoint, props) {
        return fetch(`${API}${endpoint}`, props)
    }
}