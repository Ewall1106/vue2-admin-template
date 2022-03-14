<template>
  <el-table-column align="center" v-bind="$attrs"></el-table-column>
</template>

<script>
export default {
  name: "EleTableColumn",
  props: ["name"],
  data() {
    return {};
  },
};
</script>
