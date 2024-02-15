import { describe, expect, it, vi } from 'vitest'
import Home from './HomeView.vue'
import { flushPromises, mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe("Tela Home",()=>{
    it("Espera-se que a tela seja renderizada",()=>{
        const component = mount(Home, {
            global: {
                plugins: [vuetify]
            }
        })
        expect(component).toBeTruthy()
    })
})