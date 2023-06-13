<template>
  <div class="big">
    <div class="up">
      <el-aside>
        <el-menu class="" :router="true" :default-active="activeIndex">
          <el-menu-item index="/home/competitionManage">竞赛管理</el-menu-item>

          <el-menu-item index="/home/competition">竞赛报名</el-menu-item>

          <el-menu-item index="/home/competitionCreate">竞赛创建</el-menu-item>
        </el-menu>
      </el-aside>
    </div>

    <div class="down">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/home/competitionManage",
    };
  },
  methods: {
    go() {
      console.log("fhdghio");
      this.$router.push("/first");
    },
  },
};
</script>
<style scoped>
.el-menu-item {
  color: rgb(189, 189, 192);
}
.el-menu-item.is-active {
  color: #fff;
}
.is-active::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4px;
  content: "";
  background: #009688;
}
.vertical .el-menu .el-menu-item.is-active,
.vertical .el-menu--popup .el-menu-item.is-active {
  background: #060708;
}
.el-menu-item:hover {
  background-color: #060708;
}
/* .el-menu-item.is-active {
  color: #ffffff;
} */
.el-aside {
  width: 210px;
  height: 100%;
}
.el-menu {
  height: 100%;
  background-color: #060708;
}
.s {
  margin-top: 13px;
}

.up {
  width: 210px;
  height: 100%;
}
.down {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f0f2f5;
}

.big {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
