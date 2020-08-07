<template lang="pug">
    .root-colorview
      color-divider(v-for="palette in palettes", :key="palette.name", :name="palette.name", :colors="palette.colors")
</template>

<script>
import ColorDivider from '../components/ColorDivider'

export default {
  name: 'ColorPickerView',

  data () {
    return {
      palettes: [
        {
          name: 'Polar Night',
          colors: [
            '#2E3440',
            '#3B4252',
            '#434C5E',
            '#4C566A'
          ]
        },
        {
          name: 'Snow Storm',
          colors: [
            '#D8DEE9',
            '#E5E9F0',
            '#ECEFF4'
          ]
        },
        {
          name: 'Frost',
          colors: [
            '#8FBCBB',
            '#88C0D0',
            '#81A1C1',
            '#5E81AC'
          ]
        },
        {
          name: 'Aurora',
          colors: [
            '#BF616A',
            '#D08770',
            '#EBCB8B',
            '#A3BE8C',
            '#B48EAD'
          ]
        }
      ]
    }
  },

  components: {
    ColorDivider
  }
}
</script>
