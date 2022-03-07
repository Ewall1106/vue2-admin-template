<template>
  <div style="display: flex">
    <Checkbox
      style="margin-right: 30px"
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="onCheck"
    >
      全选
    </Checkbox>
    <CheckboxGroup v-model="checkList" @change="onChange">
      <Checkbox v-for="item in options" :label="item" :key="item">
        {{ item }}
      </Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
import { CheckboxGroup, Checkbox } from "element-ui";

const options = ["上海", "北京", "广州", "深圳"];

export default {
  name: "EleFormItemCheckbox",
  props: ["name"],
  components: {
    CheckboxGroup,
    Checkbox,
  },
  inject: ["getForm"],
  data() {
    return {
      checkAll: false,
      options: options,
      isIndeterminate: false,
      form: this.getForm(),
    };
  },
  computed: {
    checkList: {
      get() {
        return this.form[this.name] || [];
      },
      set(value) {
        this.form[this.name] = value;
      },
    },
  },
  methods: {
    onCheck(val) {
      this.checkList = val ? options : [];
      this.isIndeterminate = false;
    },
    onChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.options.length;
    },
  },
};
</script>
