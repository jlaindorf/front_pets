
<template>
  <v-snackbar v-model="success" color="success" location="top right" timeout="3000">
    Pet cadastrado com sucesso!
  </v-snackbar>
  <form @submit.prevent="handleSubmit">
    <v-card width="80%" class="mx-auto px-6 mt-4" title="Cadastro Pet">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field v-model="name" variant="outlined" label="Nome"  :error-messages="errors.name"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="age" type="number" variant="outlined" label="Idade" :error-messages="errors.age"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="weight" type="number" variant="outlined" label="Peso(KG)" :error-messages="errors.weight"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-select label="Tamanho" :items="itemsSize" variant="outlined" placeholder="Selecione um item"
            v-model="size" :error-messages="errors.size" />
        </v-col>
        <v-col cols="4">
          <v-select label="Espécie" :items="itemsSpecies" item-title="name" item-value="id" variant="outlined"
            v-model="specie_id"  :error-messages="errors.specie_id"/>
        </v-col>
        <v-col cols="4">
          <v-select label="Raça" :items="itemsRaces" item-title="name" item-value="id" variant="outlined"
            v-model="race_id" :error-messages="errors.race_id" />
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
import { schemaPetForm } from '../validations/pet.validations'
import {captureErrorYup} from '../utils/captureErrorYup'
import * as yup from 'yup'

export default {

  data() {
    return {

      name: '',
      age: 1,
      weight: 1,
      itemsSize: optionsSize,
      size: '',
      itemsSpecies: [],
      specie_id: '',
      itemsRaces: [],
      race_id: '',
      errors: {},
      success: false,
    }
  },
  methods: {
    handleSubmit() {
      try {
        const body = {
        "name": this.name,
        "size": this.size,
        "specie_id": this.specie_id,
        "race_id": this.race_id,
        "age": this.age,
        "weight": this.weight
      }
      schemaPetForm.validateSync(body, { abortEarly: false })

      PetService.createPet(body)
        .then(() => {
          this.success = true
         
            this.name = '',
              this.size = '',
              this.specie_id = '',
              this.race_id = '',
              this.age = '',
              this.weight = ''

        })
        .catch(() => {
          alert('Houve um erro')
        })
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          this.errors = captureErrorYup(error)
        }
        // captura os erros lançados pela validação
      }
     
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