<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import router from '../router';
</script>

<template>
  <h1>라이브러리 테스트</h1>

  <router-link to="/chart"><button>차트</button></router-link>
  <router-link to="/calendar"><button>캘린더</button></router-link>
  <router-link to="/editor"><button>에디터</button></router-link>
  <router-view />
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
</template>

<style scoped>
/* .logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
