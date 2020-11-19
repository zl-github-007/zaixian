<template>
  <div id="StudentsSaid">
    <div class="header">
      <div class="header-1">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label>
            <el-input v-model="formInline.user" placeholder="查询"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="title">
      <div class="title-1">
        <button class="AddStudentsSaid" @click="to">+添加同学说</button>
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="50" align="center" :selectable="selectable"></el-table-column>
            <el-table-column prop="id" label="同学说ID" width="100" align="center"></el-table-column>
            <el-table-column label="同学头像" width="100" align="center">
              <template>
                <div>
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  ></el-avatar>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="同学姓名" width="100" align="center"></el-table-column>
            <el-table-column prop="occupation" label="同学职业" width="100" align="center"></el-table-column>
            <el-table-column prop="school" label="毕业院校" width="100" align="center"></el-table-column>
            <el-table-column prop="time" label="同学报名时间" width="200" align="center"></el-table-column>
            <el-table-column prop="curriculum" label="同学报名课程" width="100" align="center"></el-table-column>
            <el-table-column prop="expect" label="期待" width="100" align="center"></el-table-column>
            <el-table-column prop="Price" label="是否显示" width="100" align="center">
              <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-table-column>
            <el-table-column prop="addtime" label="添加时间" width="200" align="center"></el-table-column>
            <el-table-column prop="operation" label="操作" width="150" align="center">
              <template>
                <div class="operation">
                  <a @click="see()">查看</a>
                  <a @click="edit()">编辑</a>
                  <a @click="dle()">删除</a>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </div>
    <div class="footer">
      <div class="footer-1">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentsSaid",
  data() {
    return {
      value: true,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          id: "2019999",
          name: "赵甲",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019998",
          name: "钱乙",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019997",
          name: "孙丙",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019996",
          name: "李丁",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019995",
          name: "周戊",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019994",
          name: "吴己",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019993",
          name: "郑庚",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019992",
          name: "王辛",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019991",
          name: "冯壬",
          occupation: "学生",
          school: "河南大学",
          time: "2017-07-19 14:48:38",
          curriculum: "综合素质",
          expect: "期待。。。",
          addtime: "2017-07-19 14:48:38"
        }
      ]
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "addstudentssaid"
      });
    },
    see() {
      this.$router.push({
        path: "seestudentssaid"
      });
    },
    edit() {
      this.$router.push({
        path: "editstudentssaid"
      });
    },
    dle() {
      confirm("确定删除吗？");
    }
  }
};
</script>
<style scoped>
#StudentsSaid {
  margin-top: 20px;
  background: #f2f2f2;
}
.header {
  background: #fff;
  width: 95%;
  margin: 20px 0 20px 50px;
}
.footer {
  background: #fff;
  width: 95%;
  margin: 20px 0 20px 50px;
}
.footer-1 {
  padding: 20px;
}
.header-1 {
  padding-top: 20px;
  width: 40%;
}
.title {
  padding-bottom: 20px;
  background: #fff;
  width: 95%;
  margin: 20px 0 20px 50px;
}
.title-1 {
  margin: 20px 0 0 50px;
  padding-top: 20px;
  width: 91%;
}
.AddStudentsSaid {
  border-radius: 5px;
  margin-left: -840px;
  margin-bottom: 20px;
  font-size: 15px;
  color: #fff;
  border: none;
  width: 150px;
  height: 40px;
  background: rgb(0, 247, 255);
}
.title img {
  width: 50px;
  height: 30px;
}
.operation > a {
  cursor: pointer;
  margin: 0 5px;
  color: rgb(0, 60, 255);
}
</style>