<template>
  <div class="logon-wrap">
    <div class="logon-nav-center">
      <div class="logon-name">Login</div>
      <el-row class="logon-nav">
        <el-button class="logon-nav-menu" @click="handleClick('dashboard')">
          <span class="login-al el-icon-menu"></span>DASHBOARD</el-button>
        <el-button class="logon-nav-menu" @click="handleClick('pricing')">
          <span class="login-al el-icon-s-custom"></span>PRICING</el-button>
        <el-button class="logon-nav-menu" @click="handleClick('register')">
          <span class="login-al el-icon-eleme"></span>REGISTER</el-button>
        <el-button class="logon-nav-menu" @click="handleClick('login')">
          <span class="login-al el-icon-key"></span>LOGIN</el-button>
        <el-button class="logon-nav-menu" @click="handleClick('lock')">
          <span class="login-al el-icon-unlock"></span>LOCK</el-button>
      </el-row>
    </div>
    <div class="login-main">
      <div class="login-content-prifile">
        <div class="logon-content">
          <div class="logon-content-icon">
            <div class="content-icon-title">Log in</div>
            <div class="content-icon-wrap">
              <i class="el-icon-circle-plus-outline"></i>
              <i class="el-icon-s-promotion"></i>
              <i class="el-icon-platform-eleme"></i>
            </div>
          </div>
          <div class="logon-content-input">
            <p class="content-input-title">Or Be Classical</p>
            <login-from></login-from>
          </div>
        </div>
      </div>
      <div class="logon-footer">
        <div class="footer-nav">
          <a class="footer-nav-item" href="../#/dashboard">HOME</a>
          <a class="footer-nav-item" href="">COMPANY</a>
          <a class="footer-nav-item" href="">PORTFOLIO</a>
          <a class="footer-nav-item" href="">BLOG</a>
        </div>
        <div class="footer-title">
          <p>
            © 2021
            <a
              class="footer-title-a"
              href="https://www.creative-tim.com/?ref=mdf-vuejs&_ga=2.178848876.918816323.1629164764-983949408.1627700374"
              >Creative Tim</a
            >, made with for a better web
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="./index.css"></style>
<script>
import LoginFrom from './login-from.vue'
export default {
  components: {
    LoginFrom
  },
  methods: {
    handleClick (type) {
      switch (type) {
        case 'dashboard':
          window.location.href = 'https://demos.creative-tim.com/'
          break
        case 'pricing':
          window.location.href = 'https://demos.creative-tim.com/vue-material-dashboard-pro/#/pricing'
          break
        case 'register':
          window.location.href = 'https://demos.creative-tim.com/vue-material-dashboard-pro/#/register'
          break
        case 'login':
          this.$router.repalce('/login')
          break
        case 'lock':
          window.location.href = 'https://demos.creative-tim.com/vue-material-dashboard-pro/#/lock'
      }
    }
  },
  data () {
    return {
      email: '',
      phone: '',
      phoneError: '',
      fanemail: ''
    }
  }
}
</script>
