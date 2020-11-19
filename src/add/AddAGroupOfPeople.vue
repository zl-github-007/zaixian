<template>
  <div id="AddAGroupOfPeople">
    <div class="header">
      <div class="header-1">
        <span>创建活动</span>
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
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-checkbox-group label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-checkbox-group>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
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
  name: "AddAGroupOfPeople",
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
#AddAGroupOfPeople {
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