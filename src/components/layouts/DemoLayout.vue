<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="css">
html,
body {
  background-color: #3fa9fc;
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>