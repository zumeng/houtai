<template>
  <div class="vb-from-type-content">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="130px"
      class="demo-ruleForm"
    >
      <el-form-item label="Required Text" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item class="nav-menu" label="Email" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Number" prop="number">
        <el-input v-model.number="ruleForm.number"></el-input>
      </el-form-item>
      <el-form-item label="Url" prop="website">
        <el-input v-model="ruleForm.website"></el-input>
      </el-form-item>
      <el-form-item label="Equal To" prop="equal">
        <div class="from-equal-wrap">
          <el-input
            class="from-equal"
            type="text"
            v-model="ruleForm.equal"
          ></el-input>
          <el-form-item class="from-equal" prop="equalTo">
            <el-input type="text" v-model="ruleForm.equalTo"></el-input>
          </el-form-item>
        </div>
      </el-form-item>
      <el-form-item class="sbt">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          class="sbt-btn"
          >VALEDATE INPUTS</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'FromType',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    var checkNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入数字'))
      }
      if (!Number.isInteger(value)) {
        return callback(new Error('请输入数字值'))
      }
      callback()
    }
    var checkWebsite = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入网址'))
      }
        callback()
    }
    var validateEqual = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证值'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validateEqual2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次验证值'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入值不一致!'))
      } else {
        callback()
      }
    }
    return {
      msg_fromParent: '',
      ruleForm: {
        equal: '',
        equalTo: '',
        number: '',
        website: '',
        name: '',
        email: ''
      },
      rules: {
        equal: [{ validator: validateEqual, trigger: 'blur' }],
        equalTo: [{ validator: validateEqual2, trigger: 'blur' }],
        number: [{ validator: checkNumber, trigger: ['blur', 'change'] }],
        website: [{ validator: checkWebsite, trigger: 'blur' }],
        name: [{ required: true, message: '请输入文本内容', trigger: 'blur' }],
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  mounted () {
    this.msg_fromParent = this.$parent.msg_parent
  }
}
</script>
<style scoped>
.vb-from-type-content {
  width: 75%;
  padding-right: 30px;
  margin: 0px auto;
}
.sbt {
  display: flex;
  justify-content: center;
  margin: 15px;
}
.sbt-btn {
  background: #57af5b;
}
.from-equal-wrap {
  display: flex;
  justify-content: flex-start;
}
.from-equal {
  width: 50%;
}
</style>
