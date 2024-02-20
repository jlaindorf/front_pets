
<template>
  <v-snackbar v-model="success" color="success" location="top right" timeout="3000">
    Pet cadastrado com sucesso!
  </v-snackbar>
  <form @submit.prevent="handleSubmit">
     
    <v-card width="80%" class="mx-auto px-6 mt-4" title="Cadastro Pet">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field v-model="name" variant="outlined" label="Nome"  :error-messages="errors.name" data-test="input-name"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="age" type="number" variant="outlined" label="Idade" :error-messages="errors.age" data-test="input-age"></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-text-field v-model="weight" type="number" variant="outlined" label="Peso(KG)" :error-messages="errors.weight" data-test="input-weight" step="0.1"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-select label="Tamanho" :items="itemsSize" variant="outlined" placeholder="Selecione um item"
            v-model="size" :error-messages="errors.size" data-test="select-size" />
        </v-col>
        <v-col cols="4">
          <v-select label="Espécie" :items="itemsSpecies" item-title="name" item-value="id" variant="outlined"
            v-model="specie_id"  :error-messages="errors.specie_id" data-test="select-specie"/>
        </v-col>
        <v-col cols="4">
          <v-select label="Raça" :items="itemsRaces" item-title="name" item-value="id" variant="outlined"
            v-model="race_id" :error-messages="errors.race_id" data-test="select-race" />
        </v-col>
      </v-row>
      <v-row>
        <v-row>
      <v-col cols="12" md="12">
          <v-textarea v-model="description" variant="outlined" label="Descrição"  data-test="input-description"></v-textarea>
        </v-col>
      </v-row>
        <v-card-actions class="d-flex justify-end">
        <v-btn type="submit" color="orange" variant="flat" data-test="submit-button">Cadastrar</v-btn>
      </v-card-actions>
      </v-row>
     
      <v-alert class="mb-8" color="error" closable title="Houve um erro ao cadastrar o Pet"  v-if="showError" ></v-alert>
    </v-card>
  </form>
</template>
<script>
import { optionsSize } from '../constants/pet.constants'

import SpecieService from '../services/specieService'
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
      showError:false,
      description:'',
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
        "weight": this.weight,
        "description": this.description
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
         this.showError = true
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