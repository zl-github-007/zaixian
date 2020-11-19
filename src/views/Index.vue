<template>
  <div id="Index">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #404040">
        <el-menu>
           <div class="logo">
             <img src="../../img/1.jpg"/>
           </div>
          <el-submenu index="1">
            <template slot="title">课程管理</template>
            <router-link tag="el-menu-item" to="freeadmission">免费课</router-link>
            <router-link tag="el-menu-item" to="excellentcourse">精品课</router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">综合素质题库管理</template>
            <router-link tag="el-menu-item" to="examinationsyllabus">考试大纲</router-link>
            <router-link tag="el-menu-item" to="realtopicovertheyears">历年真题</router-link>
            <router-link tag="el-menu-item" to="simulationtestpaper">模拟试卷</router-link>
            <router-link tag="el-menu-item" to="choicequestion">选择题</router-link>
            <router-link tag="el-menu-item" to="shortanswerquestions">简答题</router-link>
            <router-link tag="el-menu-item" to="materialanalysisquestions">材料分析题</router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">教育教学能力题库管理</template>
            <router-link tag="el-menu-item" to="Twoexaminationsyllabus">考试大纲</router-link>
            <router-link tag="el-menu-item" to="Tworealtopicovertheyears">历年真题</router-link>
            <router-link tag="el-menu-item" to="Twosimulationtestpaper">模拟试卷</router-link>
            <router-link tag="el-menu-item" to="Twochoicequestion">选择题</router-link>
            <router-link tag="el-menu-item" to="Twoshortanswerquestions">简答题</router-link>
            <router-link tag="el-menu-item" to="Twomaterialanalysisquestions">材料分析题</router-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">学者成果管理</template>
            <router-link tag="el-menu-item" to="studentssaid">同学说</router-link>
            <router-link tag="el-menu-item" to="commentsfromstudents">同学感言</router-link>
            <router-link tag="el-menu-item" to="lectureotes">上课笔记</router-link>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">订单管理</template>
            <router-link tag="el-menu-item" to="ordermanagement">订单管理</router-link>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">数据中心</template>
            <router-link tag="el-menu-item" to="dataoverview">数据概览</router-link>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">运营管理</template>
            <router-link tag="el-menu-item" to="agroupofpeople">多人拼团</router-link>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">用户管理</template>
            <router-link tag="el-menu-item" to="usermanagement">用户管理</router-link>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">登录账号管理</template>
            <router-link tag="el-menu-item" to="loginaccountmanagement">登录账号管理</router-link>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown></el-dropdown>
          <div class="Navigation">
            <p>退出</p>
            <p>admin</p>
            <div>头像</div>
          </div>
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Index"
};
</script>
<style>
.logo {
  background: #404040;
  width: 100%;
  height: 80px;
}
.logo>img{
  margin-top: 20px;
  border-radius: 15px;
  height: 50px;
  width: 50%;
}
.el-submenu__title {
  color: #fff;
  background-color: #404040;
}
.el-menu-item {
   color: #fff;
  background: #435267;
}
.Navigation>div{
  color: #fff;
  text-align: center;
  line-height: 40px;
  background: #404040;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.Navigation>p{
  font-size: 15px;
}
.Navigation>div,.Navigation>p{
  margin-left:10px;
  float: right; 
}
</style>