<script setup>
import { reduce } from 'lodash';
import { ref } from 'vue';
// import 'v-calendar/dist/style.css';

const calendar = ref(null);
const originalDate = ref(null);
const date = ref(null);
const tworow = ref(null);
const originalClick = (day) => {
  originalDate.value = day.target.getAttribute('aria-label');
  // console.log(attributes);
  console.log(day.target);
};
const dateClick = (day) => {
  date.value = day.target.getAttribute('aria-label');
};

const todos = [
  {
    description: 'Take Noah to basketball practice.',
    isComplete: false,
    dates: { weekdays: 6 }, // Every Friday
    color: 'purple', // Red
  },
  {
    description: 'basketball practice.',
    isComplete: false,
    dates: { days: [1, 6, 27, 30] }, // Every Friday
    color: 'red',
  },
  {
    description: 'practice.',
    isComplete: false,
    dates: ['2022-08-09', '2022-08-23'], // Every Friday
    color: 'blue',
  },
];

const attributes = todos.map((todo, idx) => ({
  key: idx,
  dot: todo.color, // popover -> dot 대신 bar, highlight도 있음
  dates: todo.dates,
  customData: todo,
  popover: {
    label: todo.description,
    // slot: 'todo-row',
    visibility: 'click',
    // hideIndicator: true, // popover 앞에 dot/bar/highlight 사라짐
  },
}));

// const attributes = [
//   {
//     key: 'test',
//     // Attribute type definitions
//     // highlight: true, // Boolean, String, Object // 동그라미
//     dot: 'red', // Boolean, String, Object // 하단 점
//     // bar: true, // Boolean, String, Object // 하단 밑줄
//     // content: 'red', // Boolean, String, Object // 날짜 색깔
//     // popover: { label: ['뭘까나', '음', 'test'], visibility: 'click' }, // Only objects allowed
//     popover: {
//       label: '뭘까나',
//       label: '음',
//       label: '오와오',
//       visibility: 'click',
//     }, // Only objects allowed
//     // Your custom data object for later access, if needed
//     // customData: { ... },
//     // We also need some dates to know where to display the attribute
//     // We use a single date here, but it could also be an array of dates,
//     //  a date range or a complex date pattern.
//     // dates: new Date(),
//     dates: { days: [1, 2, 3, 12, 31] },
//     // You can optionally provide dates to exclude
//     excludeDates: null,
//     // Think of `order` like `z-index`
//     order: 0,
//   },
//   {
//     highlight: {
//       color: 'purple',
//       fillMode: 'outline',
//     },
//     popover: {
//       label: '글쎄용',
//       visibility: 'click',
//       slot: 'testSlot',
//     }, // Only objects allowed
//     // dates: { days: [21, 22, 23] },
//     dates: ['2022-08-12', '2022-08-31'],
//     excludeDates: null,
//     order: 0,
//   },
// ];
</script>
<template>
  <div>
    <v-calendar
      :max-date="new Date()"
      title-position="left"
      trim-weeks
      show-weeknumbers="left-outside"
      :modelValue="originalDate"
      @click="originalClick"
      :attributes="attributes"
    >
      <!-- <template v-slot:todo-row="{ customData }" class="todo-row">
        <div class="todo-content">
          <input type="checkbox" />
          <span>{{ customData.description }}허엄</span>
        </div>
      </template> -->
    </v-calendar>
    <div>선택한 날짜 : {{ originalDate }}</div>

    <v-date-picker
      nav-visibility="visible"
      is-expanded
      :modelValue="date"
      @click="dateClick"
    />
    <div>선택한 날짜 : {{ date }}</div>

    <v-date-picker
      :modelValue="tworow"
      ref="calendar"
      :rows="2"
      :value="null"
      color="pink"
      is-range
    />
  </div>
</template>

<style></style>
