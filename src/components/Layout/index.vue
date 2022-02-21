<template>
  <a-layout class="workbench">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />

      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>

      <a-layout-content style="padding: 20px">
        <div class="content">
          <slot />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.workbench {
  min-height: 100vh;
  .logo {
    height: 32px;
    background: #efefef;
    margin: 16px;
  }
  .header {
    background: #fff;
    padding: 0;
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
    }
    .trigger:hover {
      color: #1890ff;
    }
  }
  .content {
    width: 100%;
    height: calc(100vh - 104px);
    background: #fff;
    overflow: scroll;
  }
}
</style>
