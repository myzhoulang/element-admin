<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="background-color: #304156" id="nav">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <el-menu-item index="1-1">
              <router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/about">About</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container id="main">
        <el-header class="header">
          <!-- <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span> -->
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
body {
  background: #f0f2f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
}

.container {
  display: flex;
}

#nav {
  width: 300px;
  text-align: left;
  a {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#main {
  flex: 1;
}

.header {
  background: ghostwhite;
}
</style>
