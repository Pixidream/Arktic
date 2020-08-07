<template lang="pug">
  main#app
    win-frame
    color-picker-view
</template>

<script>
import ColorPickerView from './views/ColorPickerView'
import WinFrame from './components/WinFrame'

export default {
  name: 'app',
  components: {
    ColorPickerView,
    WinFrame
  }
}
</script>
