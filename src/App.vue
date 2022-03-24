<template>
  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
#app {
  height: 100%;
}
div#driver-popover-item .driver-popover-title {
  color: #1890ff;
}
div#driver-popover-item .driver-popover-footer .driver-next-btn {
  background-color: #1890ff;
  color: white;
  text-shadow: none;
  border-radius: 4px;
}
</style>
