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

    getPointedList(bulletinId) {
        return this.api
        .get(`/list/${bulletinId}`)
        .then(({ data }) => data)
        .catch(err => console.error(err));
    }

    getPointed(id) {
        return this.api
            .get(`/user/${id}`)
            .then(({ data }) => data)
            .catch(err => console.error(err));
    }

    createPointed(id, body) {
        return this.api
            .post(`/${id}`, body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
        }

    deletePointed(id) {
        return this.api
            .delete(`/${id}`)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
        }
}

const pointedService = new PointedService();

export default pointedService;