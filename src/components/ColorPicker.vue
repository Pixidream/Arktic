<template lang="pug">
  .color-picker(:style="{ backgroundColor: color }", @click="copyToClipboard(color)")
    p.overlay(:style="{ color: lightOrDark }", @click="copyToClipboard(color)") {{ color }}
    audio#notify(:src="require('../assets/music/to-the-point.ogg')", autostart="false")
</template>

<script>
const { clipboard } = window.require('electron')

export default {
  name: 'ColorPicker',

  props: {
    color: String
  },

  computed: {
    lightOrDark () {
      const checkIfDark = ['#2E3440', '#3B4252', '#434C5E', '#4C566A'].includes(this.color)
      if (checkIfDark) {
        return '#ECEFF4'
      }
      return '#2E3440'
    }
  },

  methods: {
    copyToClipboard (value) {
      const sound = document.getElementById('notify')
      clipboard.writeText(value)
      sound.volume = 0.1
      sound.play()
    }
  }
}
</script>

<style lang="stylus" scoped>
.color-picker
    height: 3.8em
    width: 5em
    transition: transform .2s ease-in-out
    display: flex
    justify-content: center
    align-items: center

    .overlay
      opacity: 0
      transition: opacity .2s ease-in-out

    &:hover
      transform: scale(1.5)
      cursor: pointer

    &:hover > .overlay
      opacity: 1
      font-size: 0.7em
      cursor: pointer

    &:hover:first-child > .overlay
      margin-left: 1em

    &:hover:last-child > .overlay
      margin-right: 1em

</style>
