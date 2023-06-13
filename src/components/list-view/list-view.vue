<template>
  <div class="big">
    <div class="small">
      <p class="c606266" v-if="!!title">{{ title }}</p>
      <div class="tb">
        <el-table stripe :data="data">
          <template v-for="(col, index) in column">
            <el-table-column
              :prop="col.prop"
              :label="col.label"
              :width="col.width"
            >
            </el-table-column>
          </template>
          <slot> </slot>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "listView",
  props: ["data", "column", "title"],
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
.tb {
  width: 100%;
  display: flex;
  justify-content: center;
}

.small {
  /* margin-left: 25%; */
  /* width: 30%; */
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-x: hidden;
  background-color: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
}

.big {
  width: 100%;
}
</style>
