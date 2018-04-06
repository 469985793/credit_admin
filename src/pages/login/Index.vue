<template>
  <div class="v_login_container">
    <el-form class="form_box" autoComplete="on" :model="formData.info" :rules="formData.rule" ref="formElement">
      <h3 class="title">急我贷后台</h3>
      <el-form-item prop="userName" class="user_box">
        <span class="iconfont icon-user"></span>
        <el-input name="userName" type="text" clearable v-model="formData.info.userName" autoComplete="on" placeholder="userName" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="iconfont icon-password"></span>
        <el-input name="password" clearable :type="passwordType" @keyup.enter.native="doLogin" v-model="formData.info.password" autoComplete="on"
          placeholder="password"></el-input>
          <span class="show_password" @click="showPassword">
            <span class="iconfont icon-eye"></span>
          </span>
      </el-form-item>
      <el-form-item class="login_btn_box">
        <el-button type="primary" :loading="isLoading" @click.native.prevent="doLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'VLogin',
  data() {
    const checkUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'));
      } else {
        callback();
      }
    }
    return {
      formData: {
        info: {
          userName: 'admin',
          password: 'admin'
        },
        rule: {
          userName: [{ required: true, trigger: 'blur', validator: checkUserName }],
          password: [{ required: true, trigger: 'blur', validator: checkPassword }]
        }
      },
      isLoading: false,
      passwordType: 'password'
    }
  },
  methods: {
    showPassword() {
      this.passwordType = this.passwordType === 'password' ? '' : 'password';
    },
    doLogin() {
      this.$refs.formElement.validate((valid) => {
        if (valid) {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
            this.$message({
              message: '登录成功',
              type: 'success'
            });
          }, 500);
          this.$router.push({path: '/'});
        } else {
          this.$message({
            message: '登录失败',
            type: 'warning'
          });
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .v_login_container {
    position: fixed;
    height: 100%;
    width:100%;
    background-color: #2d3a4b;
    .form_box {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
      .title {
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
      .show_password {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select:none;
      }
      & .iconfont {
        color: #889aa4;
      }
      /*  overwrite start */
      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
        .el-form-item__content {
          text-align: left;
          padding-left: 10px;
        }
        &.login_btn_box {
          & .el-form-item__content {
            padding: 0;
            & button {
              width: 100%;
            }
          }
        }
      }
      input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
        -webkit-text-fill-color: #fff !important;
      }
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
      }
      .el-input {
        display: inline-block;
        height: 47px;
        width: calc(100% - 60px);
        & > input {
          width: 100%;
          padding-right: 40px;
        }
      }
      .user_box {
        .el-input {
          width: calc(100% - 20px);
        }
      }  /*  overwrite end */
    }
  }
</style>
