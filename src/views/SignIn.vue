<template>
    <div id="Signin">
        <div class="logo"><img src="../../img/1.jpg"></div>
        <div class="login">
            <p>账号登录</p>
            <input type="search" placeholder="请输入账号" v-model="user">
            <i class="el-icon-mobile"></i>
            <input type="search" placeholder="请输入密码" v-model="password">
            <i class="el-icon-lock"></i>
            <button @click="go">登录</button>
            <div class="checkbox"><input type="checkbox"><span>记住登录状态</span></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Signin',
    data(){
      return{
          user:'',
          password:''
      }
  },
  methods: {
    go(){
      if(this.user==""){
        alert("请输入账号！")
      }else if(this.password==""){
        alert("请输入密码！")
      }else{
          this.$router.push({
          path:'/index'
      })
      }
    }
  }
}
</script>
<style scoped>
#Signin{
    background-color: #cccccc;
}
.logo{
    position: relative;
    top:90px;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0 auto;
}
.logo>img{
    margin-top: 30px;
    border-radius: 50%;
    width: 80%;
}
.login{
    margin: 0 auto;
    background: #fff;
    width: 460px;
    height: 510px;
    border-radius: 10px;
}
.login>p{
    border-bottom: 2px solid rgb(0, 89, 255);
    font-size: 18px;
    font-weight: bold;
    color: rgb(0, 89, 255);
    padding: 100px 0 10px 0;
    margin: 0 60px;
}
.login>input{
    margin-left: 15px;
    padding: 18px 0 18px 50px;
}
.login>i{
    position: relative;
    left: -320px;
}
.login>input,.login>button{
    border-radius: 5px;
    border: 1px solid #cccccc;
    margin-top: 30px;
    width: 73%;
}
.login>button{
    cursor: pointer;
    padding: 10px;
    background: rgb(0, 195, 255);
    color: #fff;
    font-size: 18px;
}
.checkbox{
    margin: 10px 0 0 -250px;
}
.checkbox>span{
    color: #cccccc;
    font-size: 12px;
}
</style>