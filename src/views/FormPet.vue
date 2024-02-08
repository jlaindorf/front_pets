
<template>
  <form @submit.prevent="handleSubmit">
    <v-card width="80%" class="mx-auto px-6 mt-4" title="Cadastro Pet">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field v-model="name" variant="outlined" label="Nome"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="age" type="number" variant="outlined" label="Idade"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="weight" type="number" variant="outlined" label="Peso(KG)"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-select label="Tamanho" :items="itemsSize" variant="outlined" placeholder="Selecione um item"
            v-model="size" />
        </v-col>
        <v-col cols="4">
          <v-select label="Espécie" :items="itemsSpecies" item-title="name" item-value="id" variant="outlined"
            v-model="specie" />
        </v-col>
        <v-col cols="4">
          <v-select label="Raça" :items="itemsRaces" item-title="name" item-value="id" variant="outlined"
            v-model="race" />
        </v-col>
      </v-row>
      <v-card-actions class="d-flex justify-end">
        <v-btn type="submit" color="orange" variant="flat">Cadastrar</v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>
<script>
import { optionsSize } from '../constants/pet.constants'

import SpecieService from '../services/SpecieService'
import RaceService from '../services/RaceService'
import PetService from '../services/PetService'
export default {

  data() {
    return {

      name: '',
      age: 1,
      weight: 1,
      itemsSize: optionsSize,
      size: '',
      itemsSpecies: [],
      specie: '',
      itemsRaces: [],
      race: ''
    }
  },
  methods: {
    handleSubmit() {
      PetService.createPet({
        "name": this.name,
        "size": this.size,
        "specie_id": this.specie,
        "race_id": this.race,
        "age": this.age,
        "weight": this.weight
      }).then(()=>{
        alert("cadastrado ocom sucesso ")
      }) 
      .catch(() => {
          alert('Houve um erro')
        }) 
    }
  },
  mounted() {
    SpecieService.getAllSpecies()
      .then(data => {
        this.itemsSpecies = data
      })
      .catch(() => {
        alert('Houve um erro')
      }),
      RaceService.getAllRaces()
        .then(data => {
          this.itemsRaces = data
        })
        .catch(() => {
          alert('Houve um erro')
        })
  }
}
</script>
<style></style>