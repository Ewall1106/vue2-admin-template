<template>
  <div class="menu-multiple">
    <div style="width: 256px; flex-shrink: 0; border-right: 1px solid #e6e6eb">
      <Menu />
    </div>
    <div style="flex: 1">2</div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "MenuMultiple",
  components: {
    Menu,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu-multiple {
  display: flex;
  height: 672px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 #ebeef5;
}
</style>
