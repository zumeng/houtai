<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
  >
    <el-form-item class="nav-menu" prop="email">
      <el-input v-model="ruleForm.email" placeholder="Eamil..."></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
        type="password"
        v-model="ruleForm.pass"
        autocomplete="off"
        placeholder="password..."
      ></el-input>
    </el-form-item>
    <slot name="checkPass" ></slot>
    <el-form-item>
      <el-button class="nav-sbt" type="primary" @click="submitForm('ruleForm')"
        >REGISTER</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'FromContent',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        eamil: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
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
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.nav-sbt {
  float: right;
  width: 20%;
  background: #57af5b;
}
</style>
