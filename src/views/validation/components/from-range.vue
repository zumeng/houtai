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
      <el-form-item label="Min Length" prop="minText">
        <el-input v-model="ruleForm.minText"></el-input>
      </el-form-item>
      <el-form-item label="Max Length" prop="maxText">
        <el-input v-model="ruleForm.maxText"></el-input>
      </el-form-item>
      <el-form-item label="Range" prop="range">
        <el-input v-model="ruleForm.range"></el-input>
      </el-form-item>
      <el-form-item label="Min Value" prop="minSize">
        <el-input v-model="ruleForm.minSize"></el-input>
      </el-form-item>
      <el-form-item label="Max Value" prop="maxSize">
        <el-input v-model="ruleForm.maxSize"></el-input>
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
  name: 'FromRange',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    var checkMinText = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入值'))
      }
      setTimeout(() => {
        if (value.length < 10) {
          callback(new Error('请输入超过10位值'))
        }
      }, 1000)
    }
    var checkMaxText = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入值'))
      }
      setTimeout(() => {
        if (value.length > 10) {
          callback(new Error('输入的值不能超过10位'))
        }
      }, 1000)
    }
    var checkRange = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入值'))
      }
      setTimeout(() => {
        if (value.length > 10 || value.length < 7) {
          callback(new Error('请输入7~10位值'))
        }
      }, 1000)
    }
    var checkMinSize = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入值'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value) && !value >= 6) {
          callback(new Error('请输入数字值最小是6'))
        }
      }, 1000)
    }
    var checkMaxSize = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入值'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value) && !value <= '10') {
          callback(new Error('请输入数字值最大值是10'))
        }
      }, 1000)
    }
    return {
      msg_fromParent: '',
      ruleForm: {
        minText: '',
        maxText: '',
        range: '',
        minSize: '',
        maxSize: ''
      },
      rules: {
        minText: [{ validator: checkMinText, trigger: 'blur' }],
        maxText: [{ validator: checkMaxText, trigger: 'blur' }],
        range: [{ validator: checkRange, trigger: 'blur' }],
        minSize: [{ validator: checkMinSize, trigger: 'blur' }],
        maxSize: [{ validator: checkMaxSize, trigger: 'blur' }]
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
