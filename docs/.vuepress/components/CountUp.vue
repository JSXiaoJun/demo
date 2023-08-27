<!--
 * @Author: your name
 * @Date: 2023-08-24 13:56:17
 * @LastEditTime: 2023-08-24 14:53:08
 * @LastEditors: BG1659
 * @Description: In User Settings Edit
 * @FilePath: \demo\docs\.vuepress\components\CountUp.vue
-->
<template>
  <div>
    <ClientOnly>
      <slot name="before"></slot>
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>

<script>
import { CountUp } from 'countUp.js';  // 引入插件 

export default {
  name: "CountUp",
  props: {
    startVal: {
      type: Number,
      default: 0,
    },
    endVal: {
      type: Number,
      default: 2000,
    },
    decimalPlaces: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 2,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      counter: null,
    };
  },
  methods: {
    init() {
      import("countup.js").then((module) => {
        this.$nextTick(() => {
          this.counter = new CountUp(this.$refs.countUp, this.endVal, {
            startVal: this.startVal,
            decimalPlaces: this.decimalPlaces,
            duration: this.duration,
          });

          setTimeout(() => {
            this.counter.startVal;
            console.log(this.counter);
          }, this.delay);
        });
      });
    },
  },
  beforeDestroy() {
    this.counter.reset();
    this.counter = null;
  },
};
</script>

