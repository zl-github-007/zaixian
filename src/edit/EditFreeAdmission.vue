<template>
  <div id="EditFreeAdmission">
    <div class="header">
      <div class="header-1">
        <span>编辑课程</span>
      </div>
    </div>
    <div class="title">
      <div class="title-1">
        <div class="title-a title-img">
          <span>基本信息</span>
        </div>
        <div class="title-b">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="课程名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="课程图片">
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
            <el-form-item label="课程时长" prop="duration">
              <el-input v-model="ruleForm.duration"></el-input>
            </el-form-item>
            <el-form-item label="课程小节" prop="section">
              <el-input v-model="ruleForm.section"></el-input>
            </el-form-item>
            <el-form-item label="讲师" prop="lecturer">
              <el-input v-model="ruleForm.lecturer"></el-input>
            </el-form-item>
            <el-form-item label="课程类型" prop="type">
              <el-input v-model="ruleForm.type"></el-input>
            </el-form-item>
            <el-form-item label="是否免费" prop="freeadmission">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="title-1">
        <div class="title-a title-img">
          <span>课程介绍</span>
        </div>
        <div class="title-b">
          <img src="../../img/4.png" />
        </div>
      </div>
      <div class="title-1">
        <div class="title-a title-img">
          <span>讲师介绍</span>
        </div>
        <div class="title-b">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="讲师头像">
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
            <el-form-item label="讲师姓名" prop="lecturername">
              <el-input v-model="ruleForm.lecturername"></el-input>
            </el-form-item>
            <el-form-item label="讲师头衔" prop="title">
              <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="讲师介绍" prop="introduce">
              <el-input v-model="ruleForm.introduce"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="title-1">
        <div class="title-a title-img">
          <span>课程视频</span>
        </div>
        <div class="title-b">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
          </el-upload>
        </div>
      </div>
      <div class="title-1">
        <div class="title-a title-img">
          <span>课程章节</span>
        </div>
        <div class="title-b">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="章节内容" prop="content">
              <el-input v-model="ruleForm.content"></el-input>
            </el-form-item>
            <el-form-item label="章节时长" prop="time">
              <el-input v-model="ruleForm.time"></el-input>
            </el-form-item>
            <el-form-item label="章节视频">
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
                <el-button type="primary" class="upload">选择文件</el-button>
              </el-upload>
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
  name: "EditFreeAdmission",
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
          { required: true, message: "请输入课程名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        duration: [
          { required: true, message: "请输入课程时长", trigger: "blur" }
        ],
        section: [
          { required: true, message: "请输入课程小节", trigger: "blur" }
        ],
        lecturer: [
          { required: true, message: "请输入讲师姓名", trigger: "blur" }
        ],
        type: [{ required: true, message: "请输入课程类型", trigger: "blur" }],
        lecturername: [
          { required: true, message: "请输入讲师姓名", trigger: "blur" }
        ],
        title: [{ required: true, message: "请输入讲师头衔", trigger: "blur" }],
        introduce: [
          { required: true, message: "请输入讲师介绍", trigger: "blur" }
        ],
        content: [
          { required: true, message: "请输入章节内容", trigger: "blur" }
        ],
        time: [{ required: true, message: "请输入章节时长", trigger: "blur" }]
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
#EditFreeAdmission {
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