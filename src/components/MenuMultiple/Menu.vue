<template>
  <div class="menu">
    <!-- level 1 -->
    <div class="submenu" v-for="(i, idx) in menuList" :key="idx">
      <div
        class="submenu-level-1"
        :class="i.isActive ? 'subMenuActive' : ''"
        @click="handleMenuClick(i)"
      >
        <div style="display: flex; align-items: center">
          <i class="el-icon-arrow-down" :class="i.isExpand ? 'iconExpand' : 'iconCollapse'" />
          <span style="margin-left: 8px">{{ i.label }}</span>
        </div>
        <div style="display: flex; align-items: center">
          <i class="el-icon-copy-document icon"></i>
          <i class="el-icon-delete icon"></i>
        </div>
      </div>
      <!-- level 2 -->
      <el-collapse-transition>
        <div v-show="i.isExpand">
          <div v-for="(j, idx) in i.children" :key="idx">
            <div class="submenu-level-2" @click="handleMenuClick(j)">
              <i class="el-icon-arrow-down" :class="j.isExpand ? 'iconExpand' : 'iconCollapse'" />
              <span style="margin-left: 8px">{{ j.label }}</span>
            </div>
            <!-- level 3 -->
            <el-collapse-transition>
              <div v-show="j.isExpand">
                <div
                  class="submenu-level-3"
                  :class="k.isActive ? 'subMenuActive' : ''"
                  v-for="(k, idx) in j.children"
                  :key="idx"
                  @click="handleMenuClick(k)"
                >
                  <div style="display: flex; align-items: center">
                    <i class="el-icon-menu icon"></i>
                    <span style="margin-left: 4px"> {{ k.label }}</span>
                  </div>
                  <div style="display: flex; align-items: center">
                    <i class="el-icon-plus icon" @click.stop="handleOpen"></i>
                    <i class="el-icon-copy-document icon"></i>
                    <i class="el-icon-delete icon"></i>
                  </div>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuMultiple",
  data() {
    return {
      menuList: [
        {
          id: 1, // 必须保证id是唯一的
          label: "触发节点1",
          isExpand: true,
          isActive: false,
          children: [
            {
              id: 2,
              label: "默认分组1",
              isExpand: true,
              isActive: false,
              children: [
                {
                  id: 3,
                  label: "规则1",
                  isExpand: true,
                  isActive: false,
                },
                {
                  id: 4,
                  label: "规则2",
                  isExpand: true,
                  isActive: false,
                },
              ],
            },
          ],
        },
        {
          id: 4, // 必须保证id是唯一的
          label: "触发节点2",
          isExpand: true,
          isActive: false,
          children: [
            {
              id: 42,
              label: "默认分组1",
              isExpand: true,
              isActive: false,
              children: [
                {
                  id: 43,
                  label: "规则1",
                  isExpand: true,
                  isActive: false,
                },
                {
                  id: 44,
                  label: "规则2",
                  isExpand: true,
                  isActive: false,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleMenuClick(item) {
      item.isExpand = !item.isExpand;

      this.updateTree();
      item.isActive = true;
    },
    updateTree() {
      const dfs = (item) => {
        if (item.children && item.children.length) {
          for (let i = 0; i < item.children.length; i++) {
            const child = item.children[i];
            child.isActive = false;
            dfs(child);
          }
        }
      };
      for (let item of this.menuList) {
        item.isActive = false;
        dfs(item);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  .subMenuActive {
    color: #6c6cff !important;
    background: #f0f0ff;
  }

  .submenu-level-1 {
    cursor: pointer;
    height: 36px;
    padding: 0 18px;
    display: flex;
    color: #333;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    align-items: center;
    justify-content: space-between;
  }

  .submenu-level-2 {
    cursor: default;
    display: flex;
    align-items: center;
    height: 36px;
    padding: 0 40px;
    color: #333;
    font-size: 14px;
    font-family: PingFangSC-Medium;
  }

  .submenu-level-3 {
    cursor: pointer;
    padding: 0 20px 0 56px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666666;
    font-family: PingFangSC-Regular;
    font-size: 14px;
  }

  .submenu-level-1:hover,
  .submenu-level-2:hover,
  .submenu-level-3:hover {
    background: #f0f0ff8a;
  }
}

.icon {
  font-size: 15px;
  margin-left: 8px;
}

.icon:hover {
  color: #6c6cff;
}

.el-icon-arrow-down {
  font-size: 14px;
  color: #ccc;
  transition: transform 0.2s;
}

.iconExpand {
  transform: rotate(0);
}

.iconCollapse {
  transform: rotate(-90deg);
}
</style>
