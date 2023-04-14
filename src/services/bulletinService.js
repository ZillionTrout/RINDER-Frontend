import axios from "axios";

class BulletinService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/bulletins`,
        });
        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    } 

    getBulletins() {
        return this.api
        .get("/")
        .then(({ data }) => data)
        .catch(err => console.error(err));
    }

    getUserBulletins(id) {
        return this.api
        .get(`/user/${id}`)
        .then(({ data }) => data)
        .catch(err => console.error(err));
    }

    getBulletin(id) {
        return this.api
            .get(`user/${id}`)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }

    createBulletin(body) {
        return this.api
            .post("/", body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
        }
    
    editBulletin(id, body) {
        return this.api
            .put(`/edit/${id}`, body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }

    deleteBulletin(id) {
        return this.api
        .delete(`/${id}`)
        .then(({ data }) => data)
        .catch((err) => console.error(err));
    }
}

const bulletinService = new BulletinService();

export default bulletinService;