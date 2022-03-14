<template>
  <el-table-column align="right" label="操作" v-bind="$attrs" width="200">
    <template slot-scope="scope">
      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
        删除
      </el-button>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "EleTableColumnActions",
  data() {
    return {};
  },
  methods: {
    handleEdit(idx, row) {
      console.log(idx, row);
    },
    handleDelete(idx, row) {
      console.log(idx, row);
    },
  },
};
</script>
