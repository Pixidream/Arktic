<template lang="pug">
  .winframe-root
    .winframe-actionbutton
      .close#close-window(v-tooltip="'Close the window'")
        font-awesome-icon.action-icon(icon="times")
      .minimize#minimize-window(v-tooltip="'Minimize the window'")
        font-awesome-icon.action-icon(icon="window-minimize")
      .alwysontop#alwysontop-window(v-tooltip.bottom-right="'Toogle always on top'")
        font-awesome-icon.action-icon(icon="map-pin")

    .winframe-title
      h1.wintitle ARKTIC
</template>

<script>
const { remote } = window.require('electron')

export default {
  name: 'WinFrame',

  mounted () {
    const win = remote.BrowserWindow.getFocusedWindow()

    const minimize = document.querySelector('#minimize-window')
    const quit = document.querySelector('#close-window')
    const alwaysOnTop = document.querySelector('#alwysontop-window')

    minimize.addEventListener('click', () => {
      win.minimize()
    })

    quit.addEventListener('click', () => {
      win.close()
    })

    alwaysOnTop.addEventListener('click', () => {
      win.setAlwaysOnTop(!win.isAlwaysOnTop())
    })
  }
}
</script>
