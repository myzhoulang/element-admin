<template>
  <el-card shadow="never" :class="className">
    <div slot="header" class="clearfix" v-if="title">
      <span>{{ title }}</span>
      <div><slot name="toolbar"></slot></div>
    </div>

    <div>
      <slot></slot>
    </div>
  </el-card>
</template>

<script>
import { prefix } from '../utils/props-util';
export default {
  name: 'Card',
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      className: [
        {
          [`${prefix}-card`]: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/element-variables.scss';

.#{$prefix}-card {
  border-radius: 0;
  border: none;

  ::v-deep .el-card__body {
    padding: 22px 22px 0;
  }
}
</style>
