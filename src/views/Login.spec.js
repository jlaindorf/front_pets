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
        vi.spyOn(AuthenticationService,'login').mockResolvedValue({
            data: {
                token: 'token',
                permissions: []
            }
        })

      const component =  mount(Login,{
        global:{
            plugins:[vuetify]
        }
      })
      expect(component).toBeTruthy()
    })

    it('Espera-se que ao submeter o formulário, seja redirecional para a tela home',()=>{
        const component =  mount(Login,{
            global:{
                plugins:[vuetify]
            }
          })
          //getComponent quando for um componente externo
          component.getComponent("[data-test ='input-email']").setValue("j@gmail.com")
          component.getComponent("[data-test ='input-password']").setValue("12345678")

          component.getComponent("[data-test ='submit-button']").trigger("submit")
       
    })
})