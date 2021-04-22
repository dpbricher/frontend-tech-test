<template>
  <header>Currency Converter</header>
  <main>
    <InputPanel
      class="input-panel"
      :currency-list="currencyList"
      :currency-rates-map="currencyRatesMap"
      v-model:currency-amount="currencyAmount"
      v-model:currency-base="currencyBase"
    />
    <DisplayPanel class="display-panel" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DisplayPanel from './components/DisplayPanel.vue'
import InputPanel from './components/InputPanel.vue'
import api from './api'

type AppData = {
  currencyAmount: number,
  currencyBase: string,
  currencyList: string[],
  currencyRatesMap: {
    [symbol:string]: number
  }
}

export default defineComponent({
  components: {
    DisplayPanel,
    InputPanel,
  },
  data(): AppData {
    return {
      currencyAmount: 100,
      currencyBase: '',
      currencyList: [],
      currencyRatesMap: {},
    }
  },
  async beforeMount() {
    const optionsRes = await api.getSymbols()

    if (optionsRes.success) {
      this.currencyList = Object.keys(optionsRes.symbols)

      this.currencyBase = this.currencyList[0]
    }
  },
  name: 'App',
  watch: {
    async currencyBase(newBase) {
      const ratesRes = await api.getRates(newBase)

      if (ratesRes.success) {
        this.currencyRatesMap = ratesRes.rates
      }
    }
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
