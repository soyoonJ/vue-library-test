<script setup>
import { GChart } from 'vue-google-charts';

const chartData = [
  // 0번쨰 요소는 x축으로 들어감
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2014', 1000, 400, 200],
  ['2015', 1170, 460, 250],
  ['2016', 660, 1120, 300],
  ['2017', 1030, 540, 350],
];
const chartOptions = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
  },
};
// const chartEvents = {};
</script>

<template>
  <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
</template>

<style scoped></style>
