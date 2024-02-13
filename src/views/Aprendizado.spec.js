import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from "@vue/test-utils";

import Aprendizado from './Aprendizado.vue'

describe("Testa a tela de aprendizado", () => {

    it('Espera-se que que tela seja renderizada', () => {
        const component = mount(Aprendizado)
        expect(component).toBeTruthy()
    })
})