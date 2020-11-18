<template>
  <div id="UserManagement">
    <div class="header">
      <div class="header-1">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label>
            <el-input v-model="formInline.user" placeholder="用户ID/手机号"></el-input>
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
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="50" align="center" :selectable="selectable"></el-table-column>
            <el-table-column prop="id" label="用户ID" width="150" align="center"></el-table-column>
            <el-table-column prop="phone" label="手机号" width="100" align="center"></el-table-column>
            <el-table-column prop="money" label="购买金额" width="150" align="center"></el-table-column>
            <el-table-column prop="number" label="购买数量" width="100" align="center"></el-table-column>
            <el-table-column prop="addtime" label="注册时间" width="200" align="center"></el-table-column>
            <el-table-column prop="time" label="最后登录时间" width="200" align="center"></el-table-column>
            <el-table-column label="账号启用状态" width="100" align="center">
              <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </el-table-column>
            <el-table-column prop="operation" label="操作" width="150" align="center">
              <template>
                <div class="operation">
                  <a @click="deit()">查看</a>
                  <a @click="del()">删除</a>
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
  name: "UserManagement",
  data() {
    return {
      value1: "",
      centerDialogVisible: false,
      value: true,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          phone: "18888",
          money: "￥2000.00",
          number: "10",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        }
      ]
    };
  },
  methods: {
    see() {
      this.$router.push({
        path: "seeexaminationsyllabus"
      });
    },
    del() {
      confirm("确定删除吗？");
    }
  }
};
</script>
<style scoped>
#UserManagement {
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