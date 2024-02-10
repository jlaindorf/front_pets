<template>
      <v-navigation-drawer :rail="rail" permanent>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Douglas Cavalcante"
            subtitle="doug@gmail.com"
          ></v-list-item>
        </v-list>
  
        <v-divider></v-divider>
  
        <v-list density="compact" nav>

          <router-link to="/home">
            <v-list-item
             prepend-icon="mdi-home" 
             title="Home" 
             value="myfiles">
            </v-list-item>
          </router-link>

          <router-link to="/pets/novo">
           <v-list-item 
            prepend-icon="mdi-dog"
            title="Novo Pet" 
            value="myfiles">
            </v-list-item>
          </router-link>

          <router-link to="/veterinarios" v-if="permissions.includes('get-profissionals')">
           <v-list-item 
            prepend-icon="mdi-doctor"
            title="Profissionais" 
            value="myfiles">
            </v-list-item>
          </router-link>

        </v-list>
      </v-navigation-drawer>
  
  </template>

  <script>
  export default {
    data() {
        return {
           permissions : JSON.parse(localStorage.getItem("@permissions_petshop"))
        }
    }
}

</script>