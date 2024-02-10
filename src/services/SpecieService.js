import api from "./api"

class SpecieService {
    async getAllSpecies() {
        const response = await api
        .get('races')
        return response.data;
    }
}
export default new SpecieService();
