<template slot="pagination">
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="currentSize"
    :page-size="pageSize"
    layout="total, prev, pager, next, jumper"
    :total="total"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "ElePagination",
  props: ["name"],
  inject: ["tableData"],
  data() {
    return {
      total: 100,
      current: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(val);
    },
  },
};
</script>
