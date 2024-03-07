import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListPets from '../views/ListPets.vue'
import FormPet from '../views/FormPet.vue'
import Login from '../views/Login.vue'
import ListProfessionals from '../views/ListProfessionals.vue'
import Aprendizado from '../views/Aprendizado.vue'
import Adoptions from '../views/Adoptions.vue'
import FormUser from '../views/FormUser.vue'
import VaccinationForm from '../views/VaccinationForm.vue'
import Documents from '../views/Documents.vue'
import Dashboard from '../views/Dashboard.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
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
  {
    path: '/pets/editar/:id',
    name: 'FormPetEdit',
    component: FormPet
  },
  
  {
    path: '/veterinarios',
    name: 'ListProfessionals',
    component: ListProfessionals
  },
  {
    path: '/aprendizado',
    name: 'Aprendizado',
    component: Aprendizado
  },
  {
    path: '/adocoes',
    name: 'Adoptions',
    component: Adoptions
  },
  {
    path: '/usuarios',
    name: 'FormUser',
    component: FormUser
  },
  {
    path: '/pets/:id/vacinacao',
    name: 'VaccinationForm',
    component: VaccinationForm
  },
  {
    path: '/adocoes/documentos/:id',
    name: 'Documents',
    component: Documents
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
