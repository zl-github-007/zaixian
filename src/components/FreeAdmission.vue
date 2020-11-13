<template>
  <div id="FreeAdmission">
    <div class="header">
      <div class="header-1">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label>
            <el-input v-model="formInline.user" placeholder="课程ID/名称"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-select v-model="formInline.region" placeholder="课程类型">
              <el-option label="综合素质" value="zhsz"></el-option>
              <el-option label="教育教学能力" value="jyjxnl"></el-option>
            </el-select>
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
        <button class="AddFreeAdmission" @click="to">+添加课程</button>
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="50" align="center" :selectable="selectable"></el-table-column>
            <el-table-column prop="id" label="课程ID" width="100" align="center"></el-table-column>
            <el-table-column prop="name" label="课程名称" width="150" align="center"></el-table-column>
            <el-table-column prop="image" label="课程图片" width="100" align="center">
              <template>
                <img src="../../img/2.jpg" />
              </template>
            </el-table-column>
            <el-table-column prop="time" label="课程时长" width="100" align="center"></el-table-column>
            <el-table-column prop="chapter" label="课程章节" width="120" align="center"></el-table-column>
            <el-table-column prop="lecturer" label="讲师" width="100" align="center"></el-table-column>
            <el-table-column prop="type" label="课程类型" width="150" align="center"></el-table-column>
            <el-table-column prop="number" label="在学人数" width="150" align="center"></el-table-column>
            <el-table-column prop="Price" label="是否免费" width="100" align="center">
              <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-table-column>
            <el-table-column prop="addtime" label="添加时间" width="180" align="center"></el-table-column>
            <el-table-column prop="operation" label="操作" width="180" align="center">
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
  name: "FreeAdmission",
  data() {
    return{
      value: true,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          id: "2019999",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019998",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019997",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019996",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019995",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019994",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019993",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019992",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019991",
          name: "教学观",
          image: "../../img/2.jpg",
          time: "20小时",
          chapter: "98小节",
          lecturer: "王昭君",
          type: "综合素质",
          number: "123",
          addtime: "2017-07-19 14:48:38"
        }
      ]
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "addfreeadmission"
      });
    },
    see() {
      this.$router.push({
        path: "seefreeadmission"
      });
    },
    edit() {
      this.$router.push({
        path: "editfreeadmission"
      });
    },
    dle(){
      confirm("确定删除吗？");
    }
  }
};
</script>
<style scoped>
#FreeAdmission {
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
  width: 60%;
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
.AddFreeAdmission {
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