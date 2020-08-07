<template lang="pug">
  .color-wrapper
    p {{ name  }}
    .color-picker-wrapper
      color-picker(v-for="color in colors" :key="color" :color="color")
</template>

<script>
import ColorPicker from './ColorPicker'

export default {
  name: 'ColorDivider',

  components: {
    ColorPicker
  },

  props: {
    name: String,
    colors: Array
  }
}
</script>
