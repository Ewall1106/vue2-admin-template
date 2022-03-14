<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @select="handleSelect"
      @select-all="handleSelectAll"
    >
      <slot />
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentSize"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="total"
    />
  </div>
</template>

<script>
export default {
  name: "EleTable",
  provide() {
    return {
      tableData: this.tableData,
      handleRefresh: this.handleRefresh,
    };
  },
  data() {
    return {
      total: 100,
      pageSize: 20,
      currentSize: 1,
      tableData: [],
      checkedListMap: new Map(),
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getTableData();
    },
    getTableData() {
      // keyId && checked is ESSENTIAL in each field.
      this.tableData = [
        {
          keyId: 0, // unique && essential
          checked: false, // essential
          date: "2016-05-03",
          name: "王",
        },
      ];

      if (!this.checkedListMap.has(this.currentSize)) {
        const checkedList = this.tableData.filter((item) => item.checked);
        this.checkedListMap.set(this.currentSize, checkedList);
      }

      this.$nextTick(() => {
        const columns = this.checkedListMap.get(this.currentSize).map((item) => item.keyId);
        this.tableData.forEach((item) => {
          if (columns.includes(item.keyId)) {
            this.$refs.multipleTable.toggleRowSelection(item, true);
          }
        });
      });
    },
    handleRefresh() {
      this.getTableData();
    },
    // pagination
    handleCurrentChange(value) {
      console.log("pagination", value);
      this.currentSize = value;
      this.getTableData();
    },
    // multiple table
    handleSelect(selection, row) {
      console.log("select", row);
      const { keyId } = row;
      const currentSizeCheckList = this.checkedListMap.get(this.currentSize);
      const checked = currentSizeCheckList.some((item) => item.keyId === keyId);

      if (checked) {
        const index = currentSizeCheckList.findIndex((item) => item.keyId === keyId);
        currentSizeCheckList.splice(index, 1);
      } else {
        currentSizeCheckList.push({ ...row, checked: true });
      }

      this.checkedListMap.set(this.currentSize, currentSizeCheckList);
    },
    handleSelectAll(selection) {
      this.checkedListMap.set(this.currentSize, selection);
    },
  },
};
</script>
