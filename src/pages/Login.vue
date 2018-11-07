<template>
  <div>
    <el-row>
      <el-col :span="24">

          <el-menu  router @select="handleSelect" :default-active="activeIndex" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/login">登录</el-menu-item>
            <el-menu-item index="/register">注册</el-menu-item>
          </el-menu>
      </el-col>
    </el-row>


    <el-main class="bg-dark">
      <el-row>
        <el-col :span="12" :offset="7">
          <el-form label-width="80px" ref="regForm" :label-position="'left'" :rules="rules" :model="regForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="regForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="regForm.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="success">登录</el-button>
              <el-button type="danger">重置</el-button>
            </el-form-item>

          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </div>

</template>

<script>
    export default {
        name: "Login",
      data(){
        let checkpassword =(rule,value,callback)=>{
          let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;

          if(!reg.test(value))
          {
            callback(new Error('密码必须是6-16位数组字母的组合'));
          }else{
            callback();
          }


        };
        return{
          activeIndex: '/login',
          regForm:{
             username:'',
            password:''
          },
          rules:{
            username:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 6, max: 10, message: '长度在 6-10', trigger: 'blur' }
            ],
           password:[
              { required: true, message: '请输入用户名', trigger: 'blur' },
             { validator: checkpassword, trigger: 'blur' }
            ]

          }
        }

      },
      methods:{
        handleSelect:function () {

        }
      }
    }
</script>

<style scoped>

</style>
