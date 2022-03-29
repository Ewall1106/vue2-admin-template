<template>
  <div class="menu-multiple">
    <div style="width: 256px; flex-shrink: 0; border-right: 1px solid #e6e6eb">
      <el-menu :default-openeds="defaultOpeneds" @open="handleOpen" @close="handleClose">
        <el-submenu index="1" class="submenu-level-1">
          <template slot="title">
            <div class="submenu-level-1-title">
              <h3>触发节点1</h3>
              <div style="display: flex; align-items: center">
                <i class="el-icon-document-copy icon"></i>
                <i class="el-icon-delete icon"></i>
              </div>
            </div>
          </template>

          <el-submenu index="1-1" class="submenu-level-2">
            <template slot="title">
              <div class="submenu-level-2-title">默认分组1</div>
            </template>
            <el-menu-item index="1-1-1" class="submenu-level-3">
              <div class="content">
                <div style="display: flex; align-items: center">
                  <i class="el-icon-menu icon"></i>
                  <span>规则1</span>
                </div>
                <div style="display: flex; align-items: center">
                  <i class="el-icon-plus icon" @click.stop="handleOpen"></i>
                  <i class="el-icon-document-copy icon"></i>
                  <i class="el-icon-delete icon"></i>
                </div>
              </div>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="1-2" class="submenu-level-2">
            <template slot="title">
              <div class="submenu-level-2-title">默认分组2</div>
            </template>
            <el-menu-item index="1-2-1" class="submenu-level-3">
              <div class="content">
                <div style="display: flex; align-items: center">
                  <i class="el-icon-menu icon"></i>
                  <span>规则1</span>
                </div>
                <div style="display: flex; align-items: center">
                  <i class="el-icon-plus icon" @click.stop="handleOpen"></i>
                  <i class="el-icon-document-copy icon"></i>
                  <i class="el-icon-delete icon"></i>
                </div>
              </div>
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
    <div style="flex: 1">2</div>
  </div>
</template>

<script>
export default {
  name: "MenuMultiple",
  data() {
    return {
      defaultOpeneds: ["1", "1-1", "1-1-1"],
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style>
.menu-multiple .submenu-level-1 .el-submenu__icon-arrow {
  left: 20px !important;
  right: auto !important;
}
.menu-multiple .submenu-level-2 .el-submenu__icon-arrow {
  left: 40px !important;
  right: auto !important;
}
</style>

<style lang="scss" scoped>
.menu-multiple {
  display: flex;
  height: 672px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 #ebeef5;

  .submenu-level-1-title {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    font-size: 16px;
    font-family: PingFangSC-Medium;
  }

  .submenu-level-2-title {
    padding-left: 20px;
    font-size: 14px;
    font-family: PingFangSC-Medium;
    color: #3d3e40;
  }

  .submenu-level-3 {
    padding-right: 20px;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #666666;
    }
  }
}

.menu-multiple .icon {
  font-size: 15px;
  margin-right: 0;
  /* cursor: default; */
}

.menu-multiple .icon:hover {
  color: red;
}
</style>
