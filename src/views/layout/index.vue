<template>
  <div class="frame-box">
    <aside v-if="$route.meta.menu">
      <!-- 侧边导航栏组件 -->
      <nav-menu @onchange="jump"></nav-menu>
    </aside>
    <div
      class="content-box"
      :style="listdata ? 'margin-left:260px' : 'margin-left:80px'"
    >
      <header v-if="$route.meta.menu">
        <!-- 头部导航栏组件-->
        <logo-nav>
          <p slot="logo">{{$route.meta.title}}</p>
        </logo-nav>
      </header>
      <section>
        <router-view></router-view>
      </section>
      <footer>
        <!-- 尾部导航栏 -->
        <footer-nav v-if="$route.meta.menu"></footer-nav>
      </footer>
    </div>
  </div>
</template>
<script>
import NavMenu from '../components/nav-menu.vue'
import LogoNav from '../components/logonav.vue'
import FooterNav from '../components/footernav.vue'
export default {
    name: 'Layout',
    components: {
      NavMenu,
      LogoNav,
      FooterNav
    },
    data () {
      return {
        listdata: ''
      }
    },
    methods: {
      jump (value) {
        this.listdata = value
      }
    },
    props: {
      list: {
        type: String,
        default () {
            return ''
        }
      }
    }
}
</script>
<style scoped>
.frame-box {
    width: 100%;
}
.content-box {
    background: #eeeeee;
    overflow: hidden;
    padding: 30px;
    transition: all 0.4s;
  }
</style>