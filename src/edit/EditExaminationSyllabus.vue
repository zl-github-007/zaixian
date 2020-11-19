<template>
  <div id="EditExaminationSyllabus">
    <div class="header">
      <div class="header-1">
        <span>编辑考试大纲</span>
      </div>
    </div>
    <div class="title">
      <div class="title-1">
        <div class="title-a title-img">
          <p>基本信息</p>
        </div>
        <div class="title-b">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="考试大纲" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="title-1">
        <div class="title-a title-img">
          <p>考试大纲内容</p>
        </div>
        <div class="title-b">
          <img src="../../img/4.png" />
        </div>
      </div>
    </div>
    <el-form>
      <el-form-item>
        <el-button type="primary" @click="to">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "EditExaminationSyllabus",
  data() {
    return {
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
          { required: true, message: "请输入考试大纲年份", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "examinationsyllabus"
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
#EditExaminationSyllabus {
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