<template>
  <ButtonGroup>
    <Button @click="onConfirm" type="primary">确认</Button>
    <Button @click="onReset">重置</Button>
    <Button @click="onValidate">校检</Button>
    <Button @click="onReshow">回显</Button>
  </ButtonGroup>
</template>

<script>
import { Button, ButtonGroup } from "element-ui";

export default {
  name: "EleFormItemActions",
  components: {
    Button,
    ButtonGroup,
  },
  inject: ["validate", "getForm", "resetForm"],
  methods: {
    onConfirm() {
      const form = this.getForm();
      console.log("confirm", form);
    },
    onReset() {
      console.log("reset");
      this.resetForm();
    },
    onValidate() {
      this.validate((valid) => {
        console.log(
          "validate:",
          valid,
          "(具体校检规则请在 Form.vue 的 rules 属性中配置)"
        );
      });
    },
    onReshow() {
      console.log("回显的逻辑在 Form.vue 的 mounted 钩子中实现");
    },
  },
};
</script>
