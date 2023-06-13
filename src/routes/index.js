import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/login/index.vue";

import Index from "../pages/home/index.vue";
import CompetitionManage from "../pages/competitionManage/index.vue";
import Competition from "../pages/competition/index.vue";
import CompetitionCreate from "../pages/competitionCreate/index.vue";
import { ElMessage } from "element-plus";
const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/login", component: Login },
  {
    path: "/home",
    component: Index,
    name: "home",
    redirect: { name: "competitionManage" },
    children: [
      {
        path: "competitionManage",
        name: "competitionManage",
        component: CompetitionManage,
      },
      { path: "competition", name: "competition", component: Competition },
      {
        path: "competitionCreate",
        name: "competitionCreate",  
        component: CompetitionCreate,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from) => {
  console.log(to, from);
  const userinfo = JSON.parse(
    window.sessionStorage.getItem("userinfo") || "{}"
  );

  if (
    // 检查用户是否已登录
    !userinfo?.token &&
    // ❗️ 避免无限重定向
    to.path !== "/login"
  ) {
    ElMessage.error("请登录");
    // 将用户重定向到登录页面
    return { path: "/login" };
  }
});

export default router;
