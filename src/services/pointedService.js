import axios from 'axios';

class PointedService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/pointed`
        });

        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
            config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    }

    getPointed() {
        return this.api
        .get("/")
        .then(({ data }) => data)
        .catch(err => console.error(err));
    }

    createPointed(id, body) {
        return this.api
            .post(`/${id}`, body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
        }

    deleteBulletin(id) {
        return this.api
        .delete(`/delete/${id}`)
        .then(({ data }) => data)
        .catch((err) => console.error(err));
        }
}

const pointedService = new PointedService();

export default pointedService;