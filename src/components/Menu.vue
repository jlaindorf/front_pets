<template>
      <v-navigation-drawer :rail="rail" permanent>
        <v-list>
          <v-list-item
            prepend-avatar="https://avatars.githubusercontent.com/u/125938958?s=400&u=cdf3c1ffe0514fdd4cb26c770c7021bc1b36bf35&v=4"
            title="Julio Laindorf"
            subtitle="julio@gmail.com"
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

          <router-link to="/veterinarios" v-if="permissions.includes('get-professionals')">
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