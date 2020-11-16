<template>
    <div id="TwoChoiceQuestion">
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
        <button class="AddTwoChoiceQuestion" @click="to">+添加选择题</button>
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="selection" width="50" align="center" :selectable="selectable"></el-table-column>
            <el-table-column prop="id" label="题目ID" width="100" align="center"></el-table-column>
            <el-table-column prop="content" label="题目内容" width="150" align="center"></el-table-column>
            <el-table-column prop="a" label="选项A" width="150" align="center"></el-table-column>
            <el-table-column prop="b" label="选项B" width="150" align="center"></el-table-column>
            <el-table-column prop="c" label="选项C" width="150" align="center"></el-table-column>
            <el-table-column prop="d" label="选项D" width="150" align="center"></el-table-column>
            <el-table-column prop="sort" label="排序" width="100" align="center"></el-table-column>
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
    name:'TwoChoiceQuestion',
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
          content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"1",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019998",
           content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"2",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019997",
           content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"3",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019996",
           content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"4",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019995",
         content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"5",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019994",
           content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"6",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019993",
           content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"7",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019992",
           content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"8",
          addtime: "2017-07-19 14:48:38"
        },
        {
          id: "2019991",
         content:"教学指观是指()",
          a:"内容A",
          b:"内容B",
          c:"内容C",
          d:"内容D",
          sort:"9",
          addtime: "2017-07-19 14:48:38"
        }
      ]
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "addchoicequestion"
      });
    },
    see() {
      this.$router.push({
        path: "seechoicequestion"
      });
    },
    edit() {
      this.$router.push({
        path: "editchoicequestion"
      });
    },
    dle() {
      confirm("确定删除吗？");
    }
  }
}
</script>
<style scoped>
#TwoChoiceQuestion {
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
.AddTwoChoiceQuestion {
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