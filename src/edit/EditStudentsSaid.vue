<template>
  <div id="EditStudentsSaid">
    <div class="header">
      <div class="header-1">
        <span>编辑同学说</span>
      </div>
    </div>
    <div class="title">
      <div class="title-1">
        <div class="title-b">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="同学头像">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button type="primary" class="upload">上传图片</el-button>
                <div slot="tip" class="el-upload__tip">建议尺寸800*800px</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="同学姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="同学职业" prop="occupation">
              <el-input v-model="ruleForm.occupation"></el-input>
            </el-form-item>
            <el-form-item label="毕业学院" prop="school">
              <el-input v-model="ruleForm.school"></el-input>
            </el-form-item>
            <el-form-item label="报名时间" required>
              <el-col :span="11">
                <el-form-item prop="time">
                  <el-date-picker type="date" v-model="ruleForm.time" style="width: 220%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="报名课程" prop="curriculum">
              <el-input v-model="ruleForm.curriculum"></el-input>
            </el-form-item>
            <el-form-item label="期待" prop="expect">
              <el-input v-model="ruleForm.expect" type="textarea"></el-input>
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
  name: "EditStudentsSaid",
  data() {
    return {
      time: "",
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
        name: [{ required: true, message: "请输入同学姓名", trigger: "blur" }],
        occupation: [
          { required: true, message: "请输入同学职业", trigger: "blur" }
        ],
        school: [
          { required: true, message: "请输入毕业院校", trigger: "blur" }
        ],
        time: [{ required: true, message: "请输入报名时间", trigger: "blur" }],
        curriculum: [
          { required: true, message: "请输入报名课程", trigger: "blur" }
        ],
        expect: [{ required: true, message: "请输入期待", trigger: "blur" }]
      }
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "freeadmission"
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
#EditStudentsSaid {
  margin-top: 20px;
  background: #f2f2f2;
}
.title-a,
.title-b {
  margin-left: 20px;
  float: left;
}
.title-a {
  margin-top: 40px;
}
.title-b img {
  width: 89%;
  margin-top: -50px;
  margin-left: 150px;
}
.title-img > span {
  padding: 20px 42px;
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