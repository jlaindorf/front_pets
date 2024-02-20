import api from "./api"
import { saveAs } from "file-saver"


class PetService {
    
    async createPet(body){
        const response = await api.post('pets', body)
        return response.data
    }

    async getAllPets(specie_id) {
        const response = await api.get(`pets?specie_id=${specie_id}`)
        return response.data
    }

    async deleteOnePet(petId) {
        const response = await api.delete(`pets/${petId}`)
        return response.data
    }

    async findOnePet(petId) {
        const response = await api.get(`pets/${petId}`)
        return response.data
    }

    async editPet(body, petId) {
        const response = await api.put(`pets/${petId}`, body)
        return response.data
    }
    
    async export(){
        const response = await api.get(`pets/export`, {responseType: 'blob'})
        saveAs(response.data, 'lista_de_pets.pdf')
    }

}

export default new PetService();