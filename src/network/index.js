import { request } from "./request";
// 登录
export function login(data) {
  return request({
    url: "/api/mobile/elogin",
    method: "post",
    data,
  });
}

// 获取所有学校
export function getSchoolList() {
  return request({
    url: "/api/school/all",
    method: "get",
  });
}

// 获取竞赛列表
export function getCompetitionPage(data) {
  return request({
    url: "/api/competition/page",
    method: "post",
    data,
  });
}

// 添加竞赛
export function addCompetition(data) {
  return request({
    url: "/api/competition/add",
    method: "post",
    data,
  });
}

// 删除竞赛
export function delCompetition(params) {
  return request({
    url: "/api/competition/delete",
    method: "get",
    params,
  });
}

// 编辑竞赛
export function editCompetition(data) {
  return request({
    url: "/api/competition/edit",
    method: "post",
    data,
  });
}

// 获取竞赛详情
export function getCompetitionOne(params) {
  return request({
    url: "/api/competition/one",
    method: "get",
    params,
  });
}

// 报名
export function competitionSignup(data) {
  return request({
    url: "/api/competitionSignup/add",
    method: "post",
    data,
  });
}
