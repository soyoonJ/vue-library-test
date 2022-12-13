<script setup>
import { onMounted, ref } from 'vue';
import '@fullcalendar/core/vdom'; // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid'; // Offers Month and DayGrid views:
import interactionPlugin from '@fullcalendar/interaction'; // Required to detect dateClick actions, selectable actions, and event drag-n-drop & resizing.
import bootstrapPlugin from '@fullcalendar/bootstrap5';

const fullcalendarTag = ref(null);
const selectedEvent = ref(null);

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin, bootstrapPlugin],
  initialView: 'dayGridMonth',
  eventDidMount: function (info) {
    // var tooltip = new Tooltip(info.el, {
    //   title: info.event.extendedProps.description,
    //   placement: 'top',
    //   trigger: 'hover',
    //   container: 'body',
    // });
    // console.log(info.el.innerText); // some text
  },
  // events: [
  //   {
  //     title: 'All Day Event',
  //     description: 'description for All Day Event',
  //     start: '2022-08-01',
  //   },
  //   // 시작일과 종료일 설정 가능
  //   {
  //     title: 'Long Event',
  //     description: 'description for Long Event',
  //     start: '2022-08-07',
  //     end: '2022-08-10',
  //   },
  //   // 시간 설정할 경우 점으로 나타남
  //   {
  //     groupId: '999',
  //     title: 'Repeating Event',
  //     description: 'description for Repeating Event',
  //     start: '2022-08-09T16:00:00',
  //   },
  //   {
  //     groupId: '999',
  //     title: 'Repeating Event',
  //     description: 'description for Repeating Event',
  //     start: '2022-08-16T16:00:00',
  //   },
  //   {
  //     title: 'Meeting',
  //     description: 'description for Meeting',
  //     start: '2022-08-12T10:30:00',
  //     end: '2022-08-12T12:30:00',
  //   },
  //   {
  //     title: 'Lunch',
  //     description: 'description for Lunch',
  //     start: '2022-08-12T12:00:00',
  //   },
  //   // url도 연결 가능
  //   {
  //     title: 'Click for Google',
  //     description: 'description for Click for Google',
  //     url: 'http://google.com/',
  //     start: '2022-08-28',
  //   },
  // ],
  events: [],
  moreLinkClick: 'popover',
  dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
  selectable: true,
  eventClick: function (info) {
    // console.log(info.event.title, info.event.description, info.event.start); // description은 안나옴...
    selectedEvent.value = calendarOptions.events.filter(
      (e) => e.title === info.event.title
    )[0];
  },
  // eventContent: function (arg) {
  //   return arg.event.extendedProps.description;
  // }, // 달력에 바로 표시되는 event...
  // popover 안에 설명 결정
  // eventRender: function (event, element) {
  //   element.popover({
  //     content: 'hover테스트',
  //     trigger: hover,
  //   });
  // },
  // eventClick: function () {
  //   alert('테스트');
  // },
  // eventMouseEnter: function () {
  //   console.log('뜨나');
  // },
  dayMaxEventRows: true, // for all non-TimeGrid views
  // views: {
  //   timeGrid: {
  //     dayMaxEventRows: 6, // adjust to 6 only for timeGridWeek/timeGridDay
  //   },
  // },
  // eventDidMount: function (info) {
  //   $(info.el).tooltip({
  //     title: 'dfsdf',
  //     placement: 'top',
  //     trigger: 'hover',
  //     container: 'body',
  //   });
  //   // var tooltip = new Tooltip(info.el, {
  //   //   title: 'fsdf...',
  //   //   placement: 'top',
  //   //   trigger: 'hover',
  //   //   container: 'body',
  //   // });
  // },
};
// console.log(calendarOptions.events);
const addEvent = () => {
  for (let i = 0; i < 10; i++) {
    calendarOptions.events = [
      ...calendarOptions.events,
      {
        title: `${i} Event`,
        description: `${i} Event description`,
        start: `2022-08-0${i}`,
      },
    ];
  }
};
addEvent();
// calendar.render();

// onMounted(() => {
//   console.log(fullcalendarTag.value);
// });
</script>

<template>
  <div>
    <FullCalendar :options="calendarOptions" ref="fullcalendarTag" />
    선택된 이벤트 : {{ selectedEvent }}
  </div>
</template>

<style></style>
