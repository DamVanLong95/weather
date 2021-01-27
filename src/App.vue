<template>
  <div id="app">
    <component :is="layout" v-if="layout" />
    <sidebar />
    <sidebar-toggle />
  </div>
</template>

<script>
import Sidebar from "@/components/SideBar.vue";
import SidebarToggle from "@/components/SidebarToggle.vue";
export default {
  name: "app",
  components: {
    Sidebar,
    SidebarToggle,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style>
:root {
  --accent-color: #ffc107;
  --primary-color: #673ab7;
  --dark-color: #2e294e;
}

* {
  box-sizing: border-box;
}
</style>
