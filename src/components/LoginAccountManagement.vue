<template>
  <div id="LoginAccountManagement">
    <div class="header">
      <div class="header-1">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label>
            <el-input v-model="formInline.user" placeholder="ID/账号"></el-input>
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
        <button class="AddLoginAccountManagement" @click="to">+添加账号</button>
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="50" align="center" :selectable="selectable"></el-table-column>
            <el-table-column prop="id" label="账号ID" width="100" align="center"></el-table-column>
            <el-table-column prop="user" label="账号" width="100" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="150" align="center"></el-table-column>
            <el-table-column prop="phone" label="手机号" width="100" align="center"></el-table-column>
            <el-table-column prop="addtime" label="添加时间" width="200" align="center"></el-table-column>
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
  name: "LoginAccountManagement",
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
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        },
        {
          id: "201909",
          user: "18888",
          name: "王昭君",
          phone: "1222222",
          addtime: "2017-07-19 14:48:38",
          time: "2017-07-19 14:48:38"
        }
      ]
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "addloginaccountmanagement"
      });
    },
    see() {
      this.$router.push({
        path: "seeloginaccountmanagement"
      });
    },
    del() {
      confirm("确定删除吗？");
    }
  }
};
</script>
<style scoped>
#LoginAccountManagement {
  margin-top: 20px;
  background: #f2f2f2;
}
.header {
  background: #fff;
  width: 95%;
  margin: 20px 0 20px 50px;
}
.AddLoginAccountManagement {
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