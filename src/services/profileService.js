import axios from "axios";

class ProfileService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/profile`,
        });
        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
        });
    } 

    getProfiles() {
        return this.api
            .get('/')
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }

    getProfile(id) {
        return this.api
            .get(`/${id}`)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }
    
    editProfile(id, body) {
        return this.api
            .put(`/edit/${id}`, body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }

    getOtherUser(id) {
        return this.api
            .get(`/other/${id}`)
            .then(({ data }) => data)
            .catch(({ error }) => error);
        }
}

const profileService = new ProfileService();

export default profileService;