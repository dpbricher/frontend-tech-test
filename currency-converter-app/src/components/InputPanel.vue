<template>
  <div class="input-panel-root">
    <div class="currency-options">
      <div>
        <span>Base </span>
        <select v-model="currencyBaseName">
          <option v-for="currency in currencyList" :key="currency" :value="currency">
            {{ currency }}
          </option>
        </select>
      </div>
      <button @click="switchCurrencies">Switch</button>
      <div>
        <span>Target </span>
        <select v-model="currencyTargetName">
          <option v-for="currency in currencyList" :key="currency" :value="currency">
            {{ currency }}
          </option>
        </select>
      </div>
    </div>
    <div class="currency-amount">
      <span>Amount</span>
      <input type="number" :value="currencyAmount" @input="updateAmount">
    </div>
    <div class="results">
      <div class="amount-in">{{ amountIn }} =</div>
      <div class="amount-out">{{ amountOut }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type InputPanelData = {
  currencyBaseName: string,
  currencyTargetName: string,
}

export default defineComponent({
  computed: {
    amountIn(): string {
      if (this.currencyAmount) {
        return `${this.currencyAmount} ${this.currencyBaseName}`
      }

      return ''
    },
    amountOut(): string {
      if (this.currencyAmount && this.currencyRatesMap) {
        const rate = this.currencyRatesMap[this.currencyTargetName]

        if (rate) {
          const amount = (this.currencyAmount ?? 0) * rate
          return `${amount.toFixed(2)} ${this.currencyTargetName}`
        }
      }

      return ''
    }
  },
  data(): InputPanelData {
    return {
      currencyBaseName: '',
      currencyTargetName: '',
    }
  },
  methods: {
    switchCurrencies() {
      [this.currencyBaseName, this.currencyTargetName] = [this.currencyTargetName, this.currencyBaseName]
    },
    updateAmount(e:InputEvent) {
      const value = (e.target as HTMLInputElement)?.value
      this.$emit('update:currency-amount', parseInt(value))
    }
  },
  name: 'DisplayPanel',
  props: {
    currencyAmount: Number,
    currencyBase: String,
    currencyList: Array,
    currencyRatesMap: Object,
  },
  watch: {
    currencyBaseName() {
      this.$emit('update:currency-base', this.currencyBaseName)
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../vars.scss';

.input-panel-root {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .currency-options {
    text-align: right;

    button {
      background-color: $button-bg-colour;
      border: none {
        radius: 2px;
      }
      color: $button-text-colour;
      margin: 20px 0;
      padding: 8px 20px;
    }
  }

  .currency-amount {
    display: flex;
    justify-content: center;

    > input {
      width: 100%;
    }

    > span {
      margin-right: 0.5em;
    }
  }

  .results {
    text-align: right;

    .amount-in, .amount-out {
      overflow-wrap: break-word;
    }

    .amount-out {
      font-size: 3em;
    }
  }
}
</style>
