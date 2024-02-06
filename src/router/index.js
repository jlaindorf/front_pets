import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListPets from '../views/ListPets.vue'
import FormPet from '../views/FormPet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pets/:id',
      name: 'ListPets',
      component: ListPets
    },
    {
      path: '/pets/novo',
      name: 'FormPet',
      component: FormPet
    },
  ]
})

export default router
