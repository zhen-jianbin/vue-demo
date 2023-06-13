<template>
  <div>
    <!-- form表单形式显示数据-->
    <el-form :model="entity" label-width="120px">
      <el-form-item label="学生编号">
        <el-input v-model="entity.studentId" />
      </el-form-item>

      <el-form-item label="报名竞赛时间">
        <el-input v-model="entity.createTime" />
      </el-form-item>

      <!-- <el-form-item label="竞赛类型">
        <el-select v-model="entity.type" placeholder="请选择">
          <el-option label="个人赛" value="个人赛" />
          <el-option label="团体赛" value="团体赛" />
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-input v-model="entity.start" />
      </el-form-item>
      <el-form-item label="结束时间">
        <el-input v-model="entity.end" />
      </el-form-item> -->
    </el-form>

    <div class="btnDiv">
      <el-button type="primary" @click="sure">确定</el-button>
      <el-button @click="doCancel">取消</el-button>
    </div>
  </div>
</template>
<script>
import {
  editCompetition,
  getSchoolList,
  getCompetitionOne,
  addCompetition,
  competitionSignup,
} from "../../network/index";
import { ElMessage } from "element-plus";

export default {
  //父组件将id传参给子组件，id = 0 新建   id不为0 编辑
  props: { id: Number, schoolId: Number },
  mounted() {
    console.log("mounted" + this.id);
  },
  data() {
    return {
      entity: {
        studentId: "",
        createTime: "",
      },
    };
  },
  methods: {
    //点击确认按钮，根据id来执行新建/编辑操作
    sure() {
      console.log(this.entity);
      for (let a in this.entity) {
        if (this.entity[a] === "" && a !== "organizer") {
          ElMessage.warning("信息不能为空");
          return;
        }
      }
      this.add();
    },
    //新建
    add() {
      console.log("添加的:" + JSON.stringify(this.entity));
      competitionSignup({
        ...this.entity,
        competitionId: this.id,
        checked: 0,
      }).then((resp) => {
        if (resp.success) {
          ElMessage.success("报名成功");
          this.doCancel();
        }
      });
    },
    //编辑
    edit() {
      editCompetition(this.entity).then((resp) => {
        if (resp.success) {
          ElMessage.success("已保存");
          this.doCancel();
        }
      });
    },
    //点击取消按钮，给父组件提交'doCancel'事件，父组件触发该事件时关闭弹窗
    doCancel() {
      this.$emit("doCancel");
    },
    //编辑时获取单个的数据
    get() {
      // if (this.id != 0) {
      //   getCompetitionOne({ id: this.id }).then((resp) => {
      //     console.log("编辑收到的:" + JSON.stringify(resp));
      //     this.entity = resp.data.competition;
      //   });
      // }
    },
  },
};
</script>
<style scoped>
.btnDiv {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.img {
  width: 200px;
  height: 150px;
}
</style>
