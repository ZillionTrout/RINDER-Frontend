import axios from "axios";

class SearchService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/search`,
        });
        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    } 

    getSearchUsers(body) {
        return this.api
        .post('/', body)
        .then(({ data }) => data)
        .catch((err) => console.error(err));
    }
}

const searchService = new SearchService();

export default searchService;