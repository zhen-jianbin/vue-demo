<template>
  <div class="login">
    <el-form class="form" :model="model" :rules="rules" ref="loginForm">
      <h1 class="title">登录</h1>
      <el-form-item prop="email">
        <el-input
          class="text"
          v-model="model.email"
          prefix-icon="User"
          clearable
          placeholder="请输入你的用户邮箱"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          class="text"
          v-model="model.password"
          prefix-icon="Lock"
          show-password
          clearable
          placeholder="请输入你的用户密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          class="btn"
          size="large"
          @click="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import { login } from "../../network/index";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "login",
  setup() {
    const router = useRouter();
    // const route = useRoute();

    const getRules = () => ({
      email: [
        { required: true, message: "请输入正确的电子邮箱", trigger: "blur" },
        { type: "email", message: "电子邮箱格式错误", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入正确的用户密码", trigger: "blur" },
        { min: 8, message: "密码长度不得小于8个字符", trigger: "blur" },
      ],
    });
    const state = reactive({
      model: {
        email: "414090297@qq.com",
        password: "12345678",
      },
      rules: getRules(),
      loading: false,

      loginForm: ref(null),
      submit: () => {
        if (state.loading) {
          return;
        }
        state.loginForm.validate(async (valid) => {
          if (valid) {
            state.loading = true;
            try {
              const res = await login(state.model);
              if (res.success) {
                ElMessage.success("登录成功");
                window.sessionStorage.setItem(
                  "userinfo",
                  JSON.stringify(res.data.userinfo)
                );
                router.push("/home");
              }
            } catch (error) {
            } finally {
              state.loading = false;
            }
            console.log(state.model);
          }
        });
      },
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  transition: transform 1s;
  transform: scale(1);
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #2d3a4b;
  min-height: 100vh;
  .form {
    width: 520px;
    max-width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
    margin: 160px auto 0;
    :deep {
      .el-input__wrapper {
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        background: rgba(0, 0, 0, 0.1);
      }
      .el-input-group--append > .el-input__wrapper {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .el-input-group--prepend > .el-input__wrapper {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    .title {
      color: #fff;
      text-align: center;
      font-size: 24px;
      margin: 0 0 24px;
    }
    .text {
      font-size: 16px;
      :deep(.el-input__inner) {
        color: #fff;
        height: 48px;
        line-height: 48px;
        &::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      }
    }
    .btn {
      width: 100%;
    }
  }
}
.change-lang {
  position: fixed;
  right: 20px;
  top: 20px;
  :deep {
    .change-lang {
      height: 24px;
      &:hover {
        background: none;
      }
      .icon {
        color: #fff;
      }
    }
  }
}
</style>
