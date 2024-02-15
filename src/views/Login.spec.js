import { describe, expect, it, vi } from 'vitest'
import Login from './Login.vue'
import { flushPromises, mount } from '@vue/test-utils'

import AuthenticationService from '../services/AuthenticationService'

/*
FAZER ISSO SOMENTE SE FOR USAR VUETIFY 
*/
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Tela de login',()=>{
    it('Espera-se que a tela seja renderizada',()=>{
      const component =  mount(Login,{
        global:{
            plugins:[vuetify]
        }
      })
      expect(component).toBeTruthy()
    })

})