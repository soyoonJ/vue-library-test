<!-- 참고 https://codesandbox.io/s/wdv9y?file=/src/components/CalendarMonthDayItem.vue -->

<script setup>
import { ref, computed } from 'vue';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekOfYear);
dayjs.extend(weekday);

const dayNames = ['월', '화', '수', '목', '금', '토', '일'];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

const selectedMonthDate = ref(dayjs(`${currentYear}-${currentMonth}-01`));
const selectedYear = computed(() => selectedMonthDate.value.year());
const selectedMonth = computed(() => selectedMonthDate.value.month() + 1);

const currentMonthDays = computed(() => {
  const daysInMonth = dayjs(selectedMonthDate.value).daysInMonth();
  return Array.from({ length: daysInMonth }, (x, i) => {
    return {
      date: dayjs(
        `${selectedYear.value}-${selectedMonth.value}-${i + 1}`
      ).format('YYYY-MM-DD'),
      isCurrentMonth: true,
    };
  });
});

const previousMonthDays = computed(() => {
  const previousMonth = dayjs(
    `${selectedYear.value}-${selectedMonth.value}-01`
  ).subtract(1, 'month');
  const firstDayWeekDay = dayjs(currentMonthDays.value[0].date).weekday(); // 요일 index
  // 일요일은 firstDayWeekDay가 0으로 나오기 때문에 조건식 달아주어야 함
  const previousMonthDayLength =
    firstDayWeekDay === 0 ? 6 : firstDayWeekDay - 1;
  const previousMonthFirstDay = dayjs(currentMonthDays.value[0].date)
    .subtract(previousMonthDayLength, 'day')
    .date();

  if (previousMonthDayLength !== 0) {
    return Array.from({ length: previousMonthDayLength }, (x, i) => {
      return {
        date: dayjs(
          `${previousMonth.year()}-${previousMonth.month() + 1}-${
            previousMonthFirstDay + i
          }`
        ).format('YYYY-MM-DD'),
        isCurrentMonth: false,
      };
    });
  } else {
    return [];
  }
});

const nextMonthDays = computed(() => {
  const endDayOfMonth = dayjs(`${selectedYear.value}-${selectedMonth.value}-01`)
    .endOf('month')
    .day();
  const nextMonthDayLength = 7 - endDayOfMonth;
  // console.log(endDayOfMonth, nextMonthDayLength);
  const nextMonth = dayjs(
    `${selectedYear.value}-${selectedMonth.value}-01`
  ).add(1, 'month');
  return Array.from({ length: nextMonthDayLength }, (x, i) => {
    return {
      date: dayjs(
        `${nextMonth.year()}-${nextMonth.month() + 1}-${i + 1}`
      ).format('YYYY-MM-DD'),
      isCurrentMonth: false,
    };
  });
});

const days = computed(() => [
  ...previousMonthDays.value,
  ...currentMonthDays.value,
  ...nextMonthDays.value,
]);

const goPreviousMonth = () => {
  selectedMonthDate.value = dayjs(selectedMonthDate.value).subtract(1, 'month');
};
const goNextMonth = () => {
  selectedMonthDate.value = dayjs(selectedMonthDate.value).add(1, 'month');
};
const setToday = () => {
  selectedMonthDate.value = dayjs();
};

const selectedDate = ref(null);
const dateModalOpen = (date) => {
  // console.log(dayjs(date).date());
  selectedDate.value = date;
};

const dateModal = ref(null);
const dateModalRef = ref(null);
document.addEventListener('click', (e) => {
  if (dateModalRef.value !== null) {
    if (
      e.target.innerText !== '클릭' &&
      dateModalRef.value[0] !== e.target &&
      !dateModalRef.value[0].contains(e.target)
    ) {
      selectedDate.value = null;
    }
  }
});
</script>

<template>
  <h2>{{ selectedYear }}년 {{ selectedMonth }}월</h2>
  <button @click="goPreviousMonth">이전</button>
  <button @click="setToday">오늘</button>
  <button @click="goNextMonth">다음</button>

  <ol class="days-grid">
    <li v-for="dayName in dayNames" :key="dayName">{{ dayName }}</li>
  </ol>

  <ol class="date-grid">
    <li
      v-for="day in days"
      :key="day.date"
      class="calendar-day"
      style="background: #fff"
    >
      {{ dayjs(day.date).format('D') }}
      <button @click="dateModalOpen(day.date)">클릭</button>
      <div
        class="date-modal"
        v-if="day.date === selectedDate"
        ref="dateModalRef"
      >
        <button>000번째 알림장</button>
        <button>333번째 알림장</button>
      </div>
    </li>
  </ol>
</template>

<style scoped>
h2 {
  text-align: start;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.date-grid {
  --grid-gap: 1px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #eee;
  background: #eee;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
}
.calendar-day {
  height: 100px;
  width: 100px;
  position: relative;
}
ol,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.date-modal {
  position: absolute;
  top: 30px;
  left: -60px;
  z-index: 1;

  width: 152px;
  height: 100px;
  background: pink;
}
</style>
