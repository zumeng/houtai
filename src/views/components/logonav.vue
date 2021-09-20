<template>
  <div class="header-nav">
    <div class="header-name">
      <slot name="logo"></slot>
    </div>
    <div class="header-nav-wrap">
      <input
        type="text"
        name=""
        class="header-search"
        placeholder="Search..."
      />
      <a class="header-nav-item" href="../#/dashboard"
        ><i class="el-icon-menu"></i
        ></a>
      <a
        class="header-nav-item"
        href="https://demos.creative-tim.com/vue-material-dashboard-pro/#/components/notifications"
        ><i class="el-icon-message"></i>
        <div class="nav-news-profile"><span class="nav-news">{{news}}</span></div></a
      >
      <a
        class="header-nav-item"
        href="https://demos.creative-tim.com/vue-material-dashboard-pro/#/pages/user"
        ><i class="el-icon-s-custom"></i
      ></a>
      <el-button size="mini" round @click="logout">logout</el-button>
    </div>
  </div>
</template>
<script>
import { userCache } from '../../user'
export default {
  name: 'logonav',
  data () {
    return {
      news: '5'
    }
  },
  methods: {
    logout () {
      userCache.destroy()
      this.$router.replace('/login')
    }
  }
}
</script>
<style scoped>
.header-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.header-name {
  font-size: 20px;
  color: #333;
}
.header-nav-wrap {
  display: flex;
  justify-content: space-between;
}
.header-nav-item {
  margin: 0 15px;
  font-size: 20px;
  position: relative;
}
.header-search {
  border: none;
  border-bottom: #333333 1px solid;
  background: #eeeeee;
  width: 200px;
}
.nav-news-profile {
  background: red;
  width: 20px;
  height: 20px;
  line-height: 17px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: 10px;
}
.nav-news {
  color: #fff;
  font-size: 14px;
}
</style>
