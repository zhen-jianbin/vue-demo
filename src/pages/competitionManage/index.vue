<template>
  <div>
    <div class="up card c606266">
      <span style="padding-top: 5px" class="mr10">竞赛管理</span>

      <el-select class="mr10" v-model="schoolId" placeholder="请选择学校名称">
        <el-option
          v-for="item in schoolList"
          :key="item.id"
          :label="item.schoolName"
          :value="item.id"
        />
      </el-select>
      <el-button type="primary" @click="doQuery"> 搜索 </el-button>
      <el-button type="primary" @click="all"> 刷新 </el-button>

    </div>

    <div class="down">
      <div>
        <!--列表组件-->
        <ListView :data="data" :column="column" title="竞赛列表">
          <slot>
            <el-table-column label="学校">
              <template #default="scope">
                <span>{{ scope.row.schoolId  }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="scope">
                <el-button
                  type="primary"
                  @click="doEdit(scope.row.id)"
                  size="small"
                >
                  编辑
                </el-button>
                <el-button
                  type="danger"
                  @click="doDelete(scope.row.id)"
                  size="small"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </slot>
        </ListView>
      </div>
    </div>

    <!--新建/编辑的弹窗-->
    <el-dialog v-model="visible" v-if="visible" width="30%" title="竞赛管理">
      <CompetitionManageDialog
        :id="choiceId"
        :schoolId="schoolId"
        @doCancel="doCancel"
      ></CompetitionManageDialog>
    </el-dialog>
  </div>
</template>
<script>
import ListView from "../../components/list-view/list-view.vue";
import {
  getSchoolList,
  getCompetitionPage,
  delCompetition,
} from "../../network/index";
import { ElMessage } from "element-plus";
import CompetitionManageDialog from "./competitionManageDialog.vue";
export default {
  mounted() {
    //初始化设定列表每列显示的属性和名称
    this.column = this.buildColumn();
    //获取数据
    // this.all();
    this._getSchoolList();
  },
  data() {
    return {
      data: [],
      column: [],
      visible: false,
      choiceId: 0,
      categoryArr: [],
      queryEntity: {
        recomscmendStatus: 0,
      },
      schoolList: [],
      schoolId: "",
    };
  },
  methods: {
    // 获取学校
    async _getSchoolList() {
      const res = await getSchoolList();
      this.schoolList = res.data.schools;
      console.log(res);
    },
    //查询
    doQuery() {
      if (!this.schoolId) {
        return ElMessage.error("请选择学校");
      }
      this.all();
    },
    //编辑
    doEdit(id) {
      this.choiceId = id;
      this.visible = true;
      console.log("编辑的id:" + this.choiceId + "  visible:" + this.visible);
    },
    //新建
    doAdd() {
      if (!this.schoolId) {
        return ElMessage.error("请选择学校");
      }
      console.log("触发了添加方法");
      this.choiceId = 0;
      this.visible = true;
    },
    //关闭弹窗
    doCancel() {
      this.visible = false;
      this.all();
    },
    //删除
    doDelete(id) {
      console.log("删除的id:" + id);
      delCompetition({ id: id }).then((resp) => {
        ElMessage.success("删除成功");
        this.all();
      });
    },
    //查询所有
    all() {
      let pageDto = {
        colums: [],
        current: 1,
        size: 9999,
        schoolName: this.schoolList.find((item) => item.id === this.schoolId)
          ?.schoolName,
      };
      getCompetitionPage(pageDto).then((resp) => {
        console.log(resp);
        // console.log("收到回复：" + JSON.stringify(resp.data));
        if (resp?.success) {
          this.data = resp.data.page.records;
        } else {
          this.data = [];
        }
      });
    },
    //规定列表每列名称和显示的属性
    buildColumn() {
      return [
        { prop: "name", label: "竞赛名称" },
        { prop: "homePage", label: "竞赛官网" },
        { prop: "level", label: "竞赛等级" },
        { prop: "type", label: "	竞赛类型" },
        { prop: "start", label: "开始时间" },
        { prop: "end", label: "	结束时间" },
      ];
    },
  },
  components: { ListView, CompetitionManageDialog },
};
</script>
<style scoped>
.img {
  width: 200px;
  height: 150px;
}

.el-input {
  width: 130px;
}

.item {
  /* width: 250px; */
  display: flex;
  width: 680px;
}

.up {
}

.down {
  margin-top: 20px;
}
</style>
