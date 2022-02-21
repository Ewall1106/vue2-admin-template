<template>
  <div id="app">
    <Layout>
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view :key="key" />
      </keep-alive>
      <router-view v-else :key="key" />
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";

export default {
  components: {
    Layout,
  },
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
</script>
