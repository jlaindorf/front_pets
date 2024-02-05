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
          <router-link to="/">
            <v-list-item
             prepend-icon="mdi-home" 
             title="Home" 
             value="myfiles">
            </v-list-item>
          </router-link>
          <router-link to="/">
           <v-list-item 
            prepend-icon="mdi-dog"
            title="Novo Pet" 
            value="myfiles">
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
  
     
  </template>