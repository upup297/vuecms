<template>
  <div class="aui-wrapper aui-page__login">
    <canvasbg></canvasbg>
    <div class="aui-content__wrapper" stype=" pointer-events:auto;">
      <main class="aui-content logincontent">
        <div class="login-header">
          <!-- <h2 class="login-brand"></h2> -->
          <h5 class="login-header-img" src="~@/assets/img/logintitle1.png">欢迎使用优惠券商城管理系统</h5>
        </div>
        <div class="login-body">
          <h3 class="login-title">重置密码</h3>
          <el-form label-width="100px" :model="listForm" :rules="rules">
            <el-form-item label="账号：" prop="username">
              <el-input placeholder="请输入验证码" />
            </el-form-item>
            <el-form-item label="手机：" prop="phone">
              <div style="display:flex">
                <el-input placeholder="请输入账号" />
                <el-button type="primary">{{listForm.codeHtml}}</el-button>
              </div>
            </el-form-item>
            <el-form-item label="手机验证码：" prop="code">
              <el-input placeholder="请输入验证码" />
            </el-form-item>
            <el-form-item label="新密码：" prop="password">
              <el-input type="password" placeholder="请输入新密码" />
            </el-form-item>
            <el-form-item label="确认新密码：" prop="requpassword">
              <el-input type="password" placeholder="请再次输入密码" />
            </el-form-item>
            <el-button type="primary">确定</el-button>
            <el-button @click="back">返回</el-button>
            <!-- <el-button @click="()=>{this.$router.go(-1)}">返回</el-button> -->
          </el-form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import debounce from "lodash/debounce";
import { messages } from "@/i18n";
import canvasbg from "@/components/canvasbg";
import JsEncrypt from "jsencrypt";
import security from "@/utils/security.js";

export default {
  data() {
    return {
      listForm: {
        username: "",
        phone: "",
        code: "",
        requpasswod: "",
        password: "",
        uuid: "",
        captcha: "",
        codeHtml: "获取验证码"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        requpassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    // canvasbg
  },
  computed: {
    // dataRule() {
    //   var validateComfirmPassword3 = (rule, value, callback) => {
    //     // console.log(this.captchaStatus)
    //     if (this.captchaStatus) {
    //       callback();
    //     } else {
    //       return callback(new Error("验证码不正确"));
    //     }
    //   };
    //   var validateComfirmPassword2 = (rule, value, callback) => {
    //     // console.log(this.captchaStatus)
    //     if (this.passwordStatus) {
    //       callback();
    //     } else {
    //       return callback(new Error("账号或密码错误"));
    //     }
    //   };
    //   return {
    //     username: [
    //       {
    //         required: true,
    //         message: this.$t("validate.required"),
    //         trigger: "blur"
    //       },
    //       { validator: validateComfirmPassword2, trigger: "blur" }
    //     ],
    //     password: [
    //       {
    //         required: true,
    //         message: this.$t("validate.required"),
    //         trigger: "blur"
    //       },
    //       { validator: validateComfirmPassword2, trigger: "blur" }
    //     ],
    //     captcha: [
    //       {
    //         required: true,
    //         message: this.$t("validate.required"),
    //         trigger: "blur"
    //       },
    //       { validator: validateComfirmPassword3, trigger: "blur" }
    //     ]
    //   };
    // }
  },
  created() {
    // this.getCaptcha();
  },
  methods: {
    back() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss">
.aui-page__login {
  overflow: hidden;
}
.logincontent .el-form-item {
  margin-bottom: 20px !important;
}
</style>

