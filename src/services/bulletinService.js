import axios from "axios";

class BulletinService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/bulletins`,
        });
    } 

    getBulletins() {
        return this.api.get('/bulletins').then(({ data }) => data).catch(err => console.error(err));
    }

    getBulletin(id) {
        return this.api
            .get(`/bulletin/${id}`)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }

    createBulletin(body) {
        return this.api
            .post("/newbulletin", body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
        }
    
    editBulletin(id, body) {
        return this.api
            .put(`/editbulletin/${id}`, body)
            .then(({ data }) => data)
            .catch((err) => console.error(err));
    }

    deleteBulletin(id) {
        return this.api
            .delete(`/bulletin/${id}`)
        .then(({ data }) => data)
        .catch((err) => console.error(err));
    }
}

const bulletinService = new BulletinService();

export default bulletinService;