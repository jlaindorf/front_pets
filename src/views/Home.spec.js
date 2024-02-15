import { describe, expect, it, vi } from 'vitest'
import Home from './HomeView.vue'
import { flushPromises, mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import SpecieService from '../services/SpecieService'

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe("Tela Home", () => {
    vi.spyOn(SpecieService, 'getAllSpecies').mockResolvedValue([
        {
            id: 1,
            name: 'cachorro'
        },
        {
            id: 2,
            name: 'gato'
        },
        {
            id: 3,
            name: 'pássaro'
        },
        {
            id: 3,
            name: 'peixe'
        }
    ])
    it("Espera-se que a tela seja renderizada", () => {
        const component = mount(Home, {
            global: {
                plugins: [vuetify]
            }
        })
        expect(component).toBeTruthy()
    })
    it("Espera-se que exiba na tela os nomes das espécies",async () => {
        const component = mount(Home, {
            global: {
                plugins: [vuetify]
            }
        })
        await flushPromises()
        expect(component.text()).toContain("cachorro")
        expect(component.text()).toContain("pássaro")
        expect(component.text()).toContain("gato")
        expect(component.text()).toContain("peixe")
    })
    it("Espera-se que exiba na tela os cards para cada espécie",async () => {
        const component = mount(Home, {
            global: {
                plugins: [vuetify]
            }
        })
        await flushPromises()
        const cards =  component.findAll("[data-test ='card-item']")
        expect(cards).toHaveLength(4)
    })
})