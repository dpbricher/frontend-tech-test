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
    <DisplayPanel
      class="display-panel"
      :currency-base="currencyBase"
      :currency-rates-map="currencyRatesMap"
    />
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
    try {
      const optionsRes = await api.getSymbols()

      if (optionsRes.success) {
        this.currencyList = Object.keys(optionsRes.symbols)
      }
    } catch (e) {
      console.error('Failed to get symbols from API', e)
    }
  },
  name: 'App',
  watch: {
    async currencyBase(newBase) {
      try {
        const ratesRes = await api.getRates(newBase)

        if (ratesRes.success) {
          this.currencyRatesMap = ratesRes.rates
        }
      } catch (e) {
        console.error('Failed to get rates from API', e)
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

  .display-panel, .input-panel {
    background-color: $panel-bg-colour;
  }

  .display-panel {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px;
  }

  .input-panel {
    box-sizing: border-box;
    flex: 0 0 280px;
    margin-right: 40px;
    padding: 40px;
  }

  header {
    font-size: 32px;
    padding: 1em;
    text-align: center;
  }

  main {
    align-items: stretch;
    display: flex;
    flex: 1 1 1px;
    overflow-y: auto;
  }
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
</style>
