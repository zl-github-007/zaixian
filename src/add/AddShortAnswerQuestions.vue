<template>
  <div id="AddShortAnswerQuestions">
    <div class="header">
      <div class="header-1">
        <span>添加题目</span>
      </div>
    </div>
    <div class="title">
      <div class="title-1">
        <div class="title-b">
          <p>1. 教学三要素包括什么？（10分）</p>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="正确答案" prop="pass">
              <el-input type="textarea" placeholder="要素1.2.3"></el-input>
            </el-form-item>
            <el-form-item label="解析" prop="pass">
              <el-input type="textarea" placeholder="解析内容"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="to">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddShortAnswerQuestions",
  data() {
    return {
      value1: null,
      value2: null,
      value: true,
      formInline: {
        user: "",
        region: ""
      },
      ruleForm: {
        name: "",
        primary: "",
        section: "",
        lecturer: "",
        type: "",
        freeadmission: false
      },
      rules: {
        name: [
          { required: true, message: "请输入模拟试卷名称", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "shortanswerquestions"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
#AddShortAnswerQuestions {
  margin-top: 20px;
  background: #f2f2f2;
}
.title-a,
.title-b {
  margin-left: 20px;
  float: left;
}
.title-b {
  margin-top: 50px;
}
.title-a {
  margin-top: 40px;
}
.title-b img {
  width: 89%;
  margin-top: -80px;
  margin-left: 150px;
}
.title-img > p {
  line-height: 55px;
  text-align: center;
  width: 148px;
  height: 55px;

  background: url("../../img/3.png") no-repeat;
}
.header {
  background: #fff;
  width: 95%;
  margin: 20px 0 20px 50px;
}
.header-1 {
  font-size: 13px;
  text-align: left;
  padding: 20px;
}
.title {
  clear: both;
  padding-bottom: 20px;
  background: #fff;
  width: 95%;
  height: 95%;
  margin: 20px 0 20px 50px;
}
.title-1 {
  clear: both;
  margin: 20px 0 0 50px;
  padding-top: 20px;
  width: 91%;
}
</style>