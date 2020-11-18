<template>
  <div id="OrderManagement">
    <div class="header">
      <div class="header-1">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label>
            <el-input v-model="formInline.user" placeholder="订单编号"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-input v-model="formInline.user" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
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
            <el-table-column prop="id" label="订单编号" width="150" align="center"></el-table-column>
            <el-table-column prop="time" label="购买时间" width="200" align="center"></el-table-column>
            <el-table-column prop="phone" label="手机号" width="100" align="center"></el-table-column>
            <el-table-column prop="purchase" label="购买课程" width="150" align="center"></el-table-column>
            <el-table-column prop="amount" label="订单金额" width="100" align="center"></el-table-column>
            <el-table-column prop="payment" label="实付金额" width="100" align="center"></el-table-column>
            <el-table-column prop="state" label="订单状态" width="150" align="center"></el-table-column>
            <el-table-column prop="operation" label="操作" width="150" align="center">
              <template>
                <div class="operation">
                  <a @click="see()">查看订单</a>
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
  name: "OrderManagement",
  data() {
    return {
      value1:"",
      value: true,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "待支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        },
        {
          id: "20190909120909",
          time: "2019-09-09 12:09:09",
          phone: "手机号",
          purchase: "综合素质",
          amount: "10.00",
          payment: "10.00",
          state: "已支付"
        }
      ]
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "addexaminationsyllabus"
      });
    },
    see() {
      this.$router.push({
        path: "seeexaminationsyllabus"
      });
    }
  }
};
</script>
<style scoped>
#OrderManagement {
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
  width: 80%;
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