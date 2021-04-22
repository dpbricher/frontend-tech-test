<template>
  <div class="display-panel-root" v-if="currencyRatesMap">
    <div class="display-item" v-for="(rate,symbol) in currencyRatesMap" :key="symbol">
      <div :class="{ current:symbol === currencyBase }" class="symbol">{{ symbol }}</div>
      <div class="rate">{{ rate }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'InputPanel',
  props: {
    currencyBase: String,
    currencyRatesMap: Object,
  }
})
</script>

<style lang="scss" scoped>
@import '../vars.scss';

.display-panel-root {
  padding: 20px;

  .display-item {
    display: inline-block;
    height: 50px;
    padding: 10px;
    text-align: center;
    width: 100px;

    .symbol {
      font-size: 1.1em;

      &.current {
        color: $base-currency-colour;
      }
    }

    .rate {
      font-size: 0.9em;
      color: $text-light-grey;
    }
  }
}
</style>
