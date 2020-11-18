<template>
  <div id="Lectureotes">
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
        <button class="AddLectureotes" @click="to">+添加同学笔记</button>
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="50" align="center" :selectable="selectable"></el-table-column>
            <el-table-column prop="id" label="同学说ID" width="100" align="center"></el-table-column>
            <el-table-column label="笔记" width="400" align="center">
              <template>
                <div class="demo-type">
                  <el-avatar :size="60" src="https://empty" @error="errorHandler">
                    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                  </el-avatar>
                </div>
              </template>
            </el-table-column>
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
  name: "Lectureotes",
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
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019998",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019997",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019996",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019995",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019994",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019993",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019992",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019991",
          addtime: "2017-07-19 14:48:38"
        }
      ]
    };
  },
  methods: {
    errorHandler() {
      return true;
    },
    to() {
      this.$router.push({
        path: "addexaminationsyllabus"
      });
    },
    see() {
      this.$router.push({
        path: "seeexaminationsyllabus"
      });
    },
    edit() {
      this.$router.push({
        path: "editexaminationsyllabus"
      });
    },
    dle() {
      confirm("确定删除吗？");
    }
  }
};
</script>
<style scoped>
#Lectureotes {
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
.AddLectureotes {
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