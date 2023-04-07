import axios from "axios";

class ProfileService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/users`,
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
            .put(`/editprofile/${id}`, body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }

    deleteProfile(id) {
        return this.api
            .delete(`/profile/${id}`)
        .then(({ data }) => data)
        .catch((err) => console.error(err));
    }

    getOtherProfile(userId) {
        return this.api.get(`/${userId}`).then(({ data }) => data).catch((err) => console.error(err));
    }
}

const profileService = new ProfileService();

export default profileService;