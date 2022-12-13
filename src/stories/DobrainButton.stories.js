import DobrainButton from './DobrainButton.vue';

export default {
  title: 'Dobrain/Button',
  component: DobrainButton,
  argTypes: {
    background: { control: 'color' },
    color: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { DobrainButton },
  setup() {
    return { args };
  },
  template: '<dobrain-button v-bind="args"/>',
});

export const BasicButton = Template.bind({});
export const TransparentButton = Template.bind({});

BasicButton.args = {
  primary: true,
  label: 'Button',
};

TransparentButton.args = {
  label: 'Button',
};
