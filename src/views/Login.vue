<template>
   <v-form @submit.prevent="handleSubmit">
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://yt3.googleusercontent.com/N2jcFNzjfqRVZ07qkh3xn1VM7ka9Xa3O8o968DAOqoX4i1nRC_yv2hhcLfSf3tY5BJ6XcBuegg=s900-c-k-c0x00ffffff-no-rj"
      ></v-img>
    
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
      <v-alert color="error" closable title="Houve um erro ao realizar o login" v-model="showError">Por favor, verifique suas credenciais e tente novamente.</v-alert>
        <div class="text-subtitle-1 text-medium-emphasis mt-4">Entre em sua Conta</div>
      
        <v-text-field
          density="compact"
          placeholder="Email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="email"
          data-test="input-email"
        ></v-text-field>

  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model="password"
          data-test="input-password"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
        
        </v-card>
  
        <v-btn
          type="submit"
          block
          class="mb-8"
          color="orange"
          size="large"
          variant="flat"
          data-test="submit-button"
        >
          ENTRAR
        </v-btn>

      </v-card>
    </v-form>
  </template>
  <script>
  import AuthenticationService from '../services/AuthenticationService'
  import api from "../services/api";
    export default {
      data(){
     return {
        email :'',
        password :'',
        visible: false,
        showError: false,
      }
    },
    methods: {
        handleSubmit(){
          AuthenticationService.login({
            email : this.email,
            password : this.password
          }).then((data =>{
            api.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}` 
                localStorage.setItem("@token_petshop", data.data.token)
                localStorage.setItem("@permissions_petshop", JSON.stringify(data.data.permissions))
                localStorage.setItem("@name", data.data.name)
                localStorage.setItem("@profile", data.data.profile)
                this.$router.push("/home")
          })) .catch((error) => { 
            console.log(error)
             this.showError=true
        })
  }
}}
  </script>