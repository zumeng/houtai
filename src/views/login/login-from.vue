<template>
  <el-form
    :model="dynamicValidateForm"
    :rules="rules"
    ref="dynamicValidateFormRef"
    class="demo-dynamic content-input-form">
    <div class="input-from-item">
        <i class="el-icon-s-custom nav-icon"></i>
        <el-form-item class="nav-menu"  prop="name">
          <el-input
            type="text"
            v-model="dynamicValidateForm.name"
            autocomplete="off"
            placeholder="Frist Name...">
          </el-input>
        </el-form-item>
     </div>
     <div class="input-from-item">
        <i class="el-icon-message nav-icon"></i>
        <el-form-item class="nav-menu" prop="email"
        >
          <el-input v-model="dynamicValidateForm.email" placeholder="Eamil..."></el-input>
        </el-form-item>
    </div>
    <div class="input-from-item">
        <i class="el-icon-lock nav-icon"></i>
       <el-form-item class="nav-menu"  prop="pass">
         <el-input  type="password" v-model="dynamicValidateForm.pass" autocomplete="off"  placeholder="Password..."></el-input>
       </el-form-item>
    </div>
    <div class="nav-menu-sbt-profile">
    <el-form-item >
      <el-button class="nav-menu-sbt"   type="primary" @click="submitForm">LETS GO</el-button>
    </el-form-item>
    </div>
  </el-form>
</template>
<script>
import { userCache } from '@/user'
const userList = [{name: 'admin', pass: '123456'}, {name: 'admin2', pass: '123456'}]
export default {
  data () {
    return {
      dynamicValidateForm: {
        email: 'www.ww@qq.com',
        pass: '123456',
        name: 'admin'
      },
      rules: {
        pass: [{ required: true, trigger: 'blur' }],
        name: [{ required: true, trigger: 'blur' }],
        email: [
          { required: true, message: '请输入email地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.dynamicValidateFormRef.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    },
    login () {
      /* // const a = { b: 2, c: 3}
      // // a.b  a.c
      // const { b:c , b:o } = a
      // const c = a.b;
      // const o = a.b; */
      const { pass, name } = this.dynamicValidateForm
      // 先寻找账号是否存在
      const index = userList.findIndex(cur => cur.name === name)
      if (index === -1) {
        this.$message.error('账号不存在！')
        return
      }
      const user = userList[index]
      if (user.pass !== pass) {
        this.$message.error('密码错误！')
        return
      }
      // this.loader(true)
      // let params = {};
      // params = {
      //   a: b,
      //   c: d
      // }
      // const res = axjax('', params);
      // this.list = res.data.map(cur=>cur);
      // this.loader(false)
      userCache.userInfo = user
      userCache.token = +new Date()
      this.$router.push('/dashboard')
    }
  }
}
</script>
<style scoped>
 .content-input-form {
    height: 440px;
    background: #fff;
    border-radius: 5px;
    position: relative;
    top: 20px;
    overflow: hidden;
  }
.input-from-item {
    display: flex;
  }
  .nav-icon {
      font-size: 20px;
      line-height: 40px;
  }
  .nav-menu {
      border: none;
      width: 100%;
  }
  .nav-menu-sbt {
      background: none;
      color: #5db461;
      border: none;
  }
  .nav-menu-sbt:active {
   background: rgb(199, 197, 199);
  }
  .nav-menu-sbt-profile{
      display: flex;
      justify-content: center;
      padding-top: 20px;
  }
</style>
