<template>
  <div id="EditChoiceQuestion">
    <div class="header">
      <div class="header-1">
        <span>编辑题目</span>
      </div>
    </div>
    <div class="title">
      <div class="title-1">
        <div class="title-b">
          <p>1.教学指观是指？</p>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="选项A" prop="pass">
              <el-input placeholder="内容A"></el-input>
            </el-form-item>
            <el-form-item label="选项B" prop="pass">
              <el-input placeholder="内容B"></el-input>
            </el-form-item>
            <el-form-item label="选项C" prop="pass">
              <el-input placeholder="内容C"></el-input>
            </el-form-item>
            <el-form-item label="选项D" prop="pass">
              <el-input placeholder="内容D"></el-input>
            </el-form-item>
            <el-form-item label="正确答案" prop="pass">
              <el-input placeholder="选D"></el-input>
            </el-form-item>
            <el-form-item label="解析" prop="pass">
              <el-input placeholder="解析内容"></el-input>
            </el-form-item>
            <el-form-item label="涉及知识点" prop="pass">
              <el-input placeholder="教学指观"></el-input>
            </el-form-item>
            <el-form-item label="易错程度" prop="pass">
              <el-rate v-model="value1"></el-rate>
            </el-form-item>
            <el-form-item label="难易程度" prop="pass">
              <el-rate v-model="value2"></el-rate>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="to">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <el-form></el-form>
  </div>
</template>
<script>
export default {
  name: "EditChoiceQuestion",
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
        path: "choicequestion"
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
#EditChoiceQuestion {
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