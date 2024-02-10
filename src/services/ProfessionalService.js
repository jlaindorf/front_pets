import api from "./api"

class ProfessionalService {
    
    async createProfessional(body){
        const response = await api.post('professionals', body)
        return response.data
    }

    /*async getAllProfissionals(professional_id) {
        const response = await api.get(`pets?specie_id=${specie_id}`)
        return response.data
    }
}*/}

export default new ProfessionalService();