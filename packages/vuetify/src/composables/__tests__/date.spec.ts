// Composables
import { createDate, makeDateProps, useDate } from '../date'
import { createVuetify } from '@/framework'

// Utilities
import { mount } from '@vue/test-utils'
import { describe, expect, it } from '@jest/globals'

// Types
import DateFnsAdapter from '@/adapters/date-fns'
import { defineComponent, h } from 'vue'

describe('date.ts', () => {
  const Component = defineComponent({
    props: makeDateProps(),

    setup (props) {
      const date = useDate(props)

      return { date }
    },

    render () {
      return h('div', this.$slots.default?.(this.date))
    },
  })

  const vuetify = createVuetify({
    date: {
      adapter: DateFnsAdapter,
    },
  })

  it('should have the correct days in a month', () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [vuetify],
      },
    })

    console.log(wrapper.vm.date)

    expect(wrapper).toBeTruthy()
  })
})
