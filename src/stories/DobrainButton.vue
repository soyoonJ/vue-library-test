<template>
  <button type="button" :class="classes" :style="style">두브레인 버튼</button>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  setup(props, { emit }) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        'storybook-button--primary': props.primary,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.color,
      })),
    };
  },
};
</script>
<style scoped lang="scss">
button {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;

  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  background: #fff;
  border: 1px solid #e6e6e6;
}

.storybook-button--primary {
  background: #fc5c65;
  color: #fff;
  border: none;
}
</style>
