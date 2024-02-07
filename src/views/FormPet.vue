
<template>
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
      <v-col cols="12">
        <v-select
            label="Tamanho"
            :items="itemsSize"
            variant="outlined"
            placeholder="Selecione um item"
          />
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import optionsSize from '../constants/pet.constants'

export default {
  data() {
    return {

      name: '',
      age: 1,
      weight: 1,
      itemsSize:  optionsSize ,
    }
  }
}
</script>
<style></style>