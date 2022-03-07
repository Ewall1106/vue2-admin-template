<template>
  <Form ref="form" :model="form" v-bind="$attrs" :rules="rules">
    <slot />
  </Form>
</template>

<script>
import { Form } from "element-ui";

export default {
  name: "EleForm",
  components: {
    Form,
  },
  provide() {
    return {
      getForm: () => {
        return this.form;
      },
      setForm: (obj) => {
        Object.keys(obj).forEach((key) => {
          this.form[key] = obj[key];
        });
      },
      resetForm: () => {
        this.$refs.form.resetFields();
      },
      validate: (cb) => {
        this.$refs.form.validate(cb);
      },
    };
  },
  data() {
    return {
      form: {
        name: "",
        age: "",
        delivery: false,
        type: [],
        radio: "",
        time: new Date(2016, 9, 10, 18, 40),
        date: [],
      },
      rules: {
        // name: [
        //   { required: true, message: "改字段不能为空", trigger: "change" },
        //   { min: 3, max: 5, message: "长度在3到5个字符", trigger: "change" },
        //   { validator: validateFunc, trigger: 'change' } // 自定义校检
        // ],
      },
    };
  },
  mounted() {
    if (!Object.keys(this.form).length) {
      console.error("请先定义 Form.vue 中的关于 form 相关表单域属性");
    }
    // 回显的逻辑写这里
    // axios.get...
    // this.form = ...
  },
};
</script>
