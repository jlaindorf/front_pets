import axios from 'axios';

class RaceService {

   
    async getAllRaces(race_id) {
        const response = await axios
        .get(`http://127.0.0.1:8000/api/races?race_id=${race_id}`)
        return response.data
    }
}

export default new RaceService();