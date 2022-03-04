<template>
  <FormModel
    ref="form"
    :model="form"
    :rules="rules"
    v-bind="$attrs"
    :label-col="{ span: labelColSpan, offset: labelColOffset }"
    :wrapper-col="{ span: wrapperColSpan, offset: wrapperColOffset }"
  >
    <slot />
  </FormModel>
</template>

<script>
import { FormModel } from "ant-design-vue";

export default {
  name: "AntdForm",
  props: {
    labelColSpan: {
      type: Number,
      default: 4,
    },
    wrapperColSpan: {
      type: Number,
      default: 20,
    },
    labelColOffset: {
      type: Number,
      default: 0,
    },
    wrapperColOffset: {
      type: Number,
      default: 0,
    },
  },
  components: {
    FormModel,
  },
  data() {
    return {
      form: {},
      rules: {
        // name: [
        //   { required: true, message: "改字段不能为空", trigger: "change" },
        //   { min: 3, max: 5, message: "长度在3到5个字符", trigger: "change" },
        //   { validator: validateFunc, trigger: "change" }, // 自定义校检
        // ],
      },
    };
  },
  provide() {
    return {
      getForm: () => {
        return this.form;
      },
      resetForm: () => {
        this.$refs.form.resetFields();
      },
      validate: (cb) => {
        this.$refs.form.validate(cb);
      },
    };
  },
  mounted() {
    // 回显的逻辑写这里
    // axios.get...
    // this.form = ...
  },
};
</script>
