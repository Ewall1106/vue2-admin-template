<template>
  <ButtonGroup>
    <Button @click="onConfirm" type="primary">确认</Button>
    <Button @click="onReset">重置</Button>
    <Button @click="onValidate">校检</Button>
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
        console.log("validate:", valid);
        console.log("校检规则请在Form.tsx的rules属性中配置");
      });
    },
  },
};
</script>
