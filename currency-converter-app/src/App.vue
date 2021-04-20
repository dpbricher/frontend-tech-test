<template>
  <header>Currency Converter</header>
  <main>
    <InputPanel class="input-panel" />
    <DisplayPanel class="display-panel" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DisplayPanel from './components/DisplayPanel.vue'
import InputPanel from './components/InputPanel.vue'

export default defineComponent({
  name: 'App',
  components: {
    DisplayPanel,
    InputPanel,
  }
})
</script>

<style lang="scss">
@import './vars.scss';

#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: Helvetica, Arial, sans-serif;
  height: 100%;
  max-height: $app-max-height;
  max-width: $app-max-width;
  overflow-x: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.display-panel, .input-panel {
  background-color: $panel-bg-colour;
}

.display-panel {
  flex-grow: 3;
}

.input-panel {
  flex-grow: 1;
  margin-right: 40px;
  max-width: 320px;
}

html, body {
  height: 100%;
}

body {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: $app-min-height;
  min-width: $app-min-width;
  padding: 30px;
  padding-top: 10px;
}

header {
  font-size: 32px;
  padding: 1em;
  text-align: center;
}

main {
  align-items: stretch;
  display: flex;
  flex-grow: 1;
}
</style>
