<script setup>
// import print from 'vue3-print-nb'
import printJS from 'print-js';

import { Bar, Line, Radar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale
);

const props = defineProps({
  barChartId: {
    type: String,
    default: 'bar-chart',
  },
  datasetIdKey: {
    type: String,
    default: 'label',
  },
  width: {
    type: Number,
    default: 400,
  },
  height: {
    type: Number,
    default: 300,
  },
  cssClasses: {
    type: String,
    default: '',
  },
  styles: {
    type: Object,
    default: () => {},
  },
  plugins: {
    type: Object,
    default: () => {},
  },

  lineChartId: {
    type: String,
    default: 'line-chart',
  },
});

const barChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      // label: 'My First dataset',
      barThickness: 8,
      borderRadius: 100,
      backgroundColor: '#91B2FF',
      // align: '-135',
      // borderSkipped: 'start',
      // barPercentage: 0.5,
      // categoryPercentage: 1,
      // borderWidth: ,
      // barWidth: 100,
      data: [10, 99, 80, 3, 55, 88, 29, 66, 44, 24, 77, 84],
      // data: [10],
      // data: [10, , 80, 3, 55, 88, 29, 66, 44, 24, 77, 84],
    },
  ],
};
const barChartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
      // ticks: {
      //   // alignment: 'start',
      //   callback: (value) => {
      //     return value + 1 === 12 ? `${value + 1} (개월)` : value + 1;
      //   },
      // },
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        callback: (value) => {
          return value === 0 || value === 100 ? `${value}%` : '';
        },
      },
    },
  },
  layout: {
    // padding: 4,
  },
  plugins: {
    // 범례
    legend: {
      display: false,
    },
  },
};

const lineChartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      label: '김유나',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      // tension: 0.1,
      // pointBackgroundColor: '#DCE3F1',
      borderColor: '#DCE3F1',
      backgroundColor: '#2654BC', // 파란계열
      pointBorderColor: '#2654BC',
      pointBorderWidth: 4,
    },
    {
      label: '아동평균',
      // data: Utils.numbers(NUMBER_CFG),
      data: [32, 32, 32, 43, 24, 35, 26, 72, 38, 78, 123, 12],
      // fill: false,
      borderColor: '#E9E9E9',
      backgroundColor: '#CDCDCD',
      pointBorderColor: '#CDCDCD',
      pointBorderWidth: 4,
      // borderColor: Utils.CHART_COLORS.blue,
      // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
  ],
};
const lineChartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        // 축 라인
        drawBorder: false,
        display: false,
      },
      // ticks: {
      //   callback: (value) => {
      //     return value + 1 === 12 ? `${value + 1} (개월)` : value + 1;
      //   },
      // },
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        callback: (value) => {
          return value === 0 || value === 100 ? `${value}%` : '';
        },
      },
      grid: {
        // 축 라인
        drawBorder: false,
        color: '#E4E4E4',
      },
    },
  },
  plugins: {
    // 범례
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#fff',
      // x축 label
      titleColor: '#37373E',
      titleFont: { weight: '700' },
      // y축 label명 : 값
      bodyColor: '#37373E',
      bodyFont: { weight: '700' },
      boxPadding: 8,
      shadowOffsetX: 3,
      shadowOffsetY: 3,
      // shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0)',

      usePointStyle: true,
      callbacks: {
        title: function (context) {
          return context[0].parsed.x + '번째 달 수리력 정답률';
        },
        label: function (context) {
          return `${context.dataset.label} ${context.parsed.y}%`;
        },
        labelPointStyle: function (context) {
          return {
            pointStyle: 'circle',
          };
        },
      },
    },
  },
  animations: false,
};

const radarChartData = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    // {
    //   label: 'My Second Dataset',
    //   data: [28, 48, 40, 19, 96, 27, 100],
    //   fill: true,
    //   backgroundColor: 'rgba(54, 162, 235, 0.2)',
    //   borderColor: 'rgb(54, 162, 235)',
    //   pointBackgroundColor: 'rgb(54, 162, 235)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgb(54, 162, 235)',
    // },
  ],
};

// const printObj = () => {
//   return { id: 'printMe' };
// };
// const printObj = { id: 'printMe' };
// const printPage = () => {
// console.log(document.getElementById('printTest').innerHTML);
// const initBody = document.body.innerHTML;
// document.body.innerHTML = document.getElementById('printTest').innerHTML;
// window.onafterprint = function () {
//   document.body.innerHTML = initBody;
// };
// window.print();
// return false;
// };
</script>

<template>
  <button @click="printJS('printTest', 'html')">전체프린트</button>
  <div id="printTest">
    <Bar
      :chart-options="barChartOptions"
      :chart-data="barChartData"
      :chart-id="barChartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />

    <div style="position: relative">
      <Line
        :chart-data="lineChartData"
        :chart-options="lineChartOptions"
      ></Line>
      <span class="unitText">(개월)</span>
    </div>

    <Radar :chart-data="radarChartData" />
  </div>
</template>

<style scoped>
.unitText {
  position: absolute;
  right: -27px;
  bottom: 0;
  font-size: 10px;
}
</style>
