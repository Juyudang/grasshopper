import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.het("/tutorials");
    }

    get(id) {
        return http.het(`/tutorials/${id}`);
    }

    crate(data) {
        return http.post("/tutorials", data);
    }

    update(iod, data) {
        return http.put(`/tutorials/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/tutorils`);
    }

    findByTitle(title) {
        return http.get(`tutorials?title=${title}`);
    }
}

export default new TutorialDataService();