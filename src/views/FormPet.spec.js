import { describe, expect, it, vi } from 'vitest'
import FormPet from './FormPet.vue'
import { flushPromises, mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Tela de cadastro de pet', () => {
    it('Espera-se que a tela seja renderizada', () => {

        const component = mount(FormPet, {
            global: {
                plugins: [vuetify]
            }
        })
        expect(component).toBeTruthy()
    })

})