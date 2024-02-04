<template>
    <v-conteiner>
        <h1>Lista de Pets</h1>
    <v-table>
      <thead class="header-table">
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            raça
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="pet in pets"
          :key="pet.id"
        >
          <td>{{ pet.pet_name }}</td>
          <td>{{ pet.race.name }}</td>
         
        </tr>
      </tbody>
    </v-table>
</v-conteiner>
  </template>
<script>
import PetService from '../services/PetService'
export default{

    data(){
        return{
            pets: []
        }
    },
    mounted(){
        PetService.getAllPets(this.$route.params.id)
        .then((data)=>{
            this.pets = data
        })
        .catch(()=>{
            alert("Houve um erro ")
        })

    }}
    
</script>
<style scoped>
.header-table{
    background-color: tomato;
    color: #fff;
    font-weight:bold ;
}
tbody tr:nth-child(2n){
 background: #e9e7e7;
}

</style>