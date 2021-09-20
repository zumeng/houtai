<template>
  <div class="nav-content" :class="{ expend: isExpend }">
    <div class="nav-scroll">
      <div class="wrap-style">
        <div class="wrap-style-linke" @click="tourl">
          <div class="wrap-style-img-profile">
            <img class="wrap-style-img" src="@/assets/images/vue-logo.png" />
          </div>
          <div class="wrap-style-title">
            <p class="wrap-style-name">VUE MD PRO</p>
          </div>
        </div>
        <div class="wrap-style-icon">
          <i
            @click="isswitch"
            :class="{ 'fa fa-th': isExpend, 'fa fa-ellipsis-v': !isExpend }"
          ></i>
        </div>
      </div>
      <template v-for="item in list">
        <nav-chilr :item="item" :key="item.id"></nav-chilr>
      </template>
    </div>
  </div>
</template>
<script>
import NavChilr from './nav-chilr.vue'
export default {
  name: 'NavMenu',
  provide () {
    return {
      main: this
    }
  },
  components: {
    NavChilr
  },
  data () {
    return {
      list: [
        {
          name: 'Tania Andrew',
          id: '2',
          icon: 'fa fa-chevron-down',
          iconImg: require('@/assets/images/avatar.jpg'),
          chidlren: [
            {
              name: 'My Profile',
              id: '2-1',
              iconText: 'MP',
              path: '/dashboard'
            },
            {
              name: 'Edit Profile',
              id: '2-2',
              iconText: 'EP',
              path: '/dashboard'
            },
            {
              name: 'Settings',
              id: '2-3',
              iconText: 'S',
              path: '/dashboard'
            }
          ]
        },
        {
          name: 'Dashboard',
          id: '3',
          icon: 'fa fa-th-large',
          path: '/dashboard'
        },
        {
          name: 'Pages',
          id: '4',
          icon: 'fa fa-file-image-o',
          path: '/dashboard',
          chidlren: [
            {
              name: 'My Profile',
              id: '4-1',
              iconText: 'MP',
              path: '/dashboard'
            },
            {
              name: 'Edit Profile',
              id: '4-2',
              iconText: 'EP',
              path: '/dashboard'
            },
            {
              name: 'Settings',
              id: '4-3',
              iconText: 'S',
              path: '/dashboard'
            },
            {
              name: 'My Profile',
              id: '4-4',
              iconText: 'MP',
              path: '/dashboard'
            },
            {
              name: 'Edit Profile',
              id: '4-5',
              iconText: 'EP',
              path: '/dashboard'
            },
            {
              name: 'Settings',
              id: '4-6',
              iconText: 'S',
              path: '/dashboard'
            },
            {
              name: 'Settings',
              id: '4-7',
              iconText: 'S',
              path: '/dashboard'
            }
          ]
        },
        {
          name: 'Components',
          id: '5',
          icon: 'fa fa-table',
          path: '/dashboard',
          chidlren: [
            {
              name: 'My Profile',
              id: '5-1',
              iconText: 'MP',
              path: '/dashboard'
            },
            {
              name: 'Edit Profile',
              id: '5-2',
              iconText: 'EP',
              path: '/dashboard'
            },
            {
              name: 'Settings',
              id: '5-3',
              iconText: 'S',
              path: '/dashboard'
            },
            {
              name: 'My Profile',
              id: '5-4',
              iconText: 'MP',
              path: '/dashboard'
            },
            {
              name: 'Edit Profile',
              id: '5-5',
              iconText: 'EP',
              path: '/dashboard'
            },
            {
              name: 'Settings',
              id: '5-6',
              iconText: 'S',
              path: '/dashboard'
            },
            {
              name: 'Settings',
              id: '5-7',
              iconText: 'S',
              path: '/dashboard'
            }
          ]
        },
        {
          name: 'Forms',
          id: '6',
          icon: 'fa fa-file-archive-o ',
          path: '/dashboard',
          chidlren: [
            {
              name: 'My Profile',
              id: '6-1',
              iconText: 'MP',
              path: '/dashboard'
            },
            {
              name: 'Edit Profile',
              id: '6-2',
              iconText: 'EP',
              path: '/dashboard'
            }
          ]
        },
        {
          name: 'dashboard',
          id: '7',
          icon: 'el-icon-s-flag',
          path: '/dashboard'
        },
        {
          name: 'validation',
          id: '8',
          icon: 'el-icon-s-flag',
          path: '/validation'
        },
        {
          name: 'table',
          id: '9',
          icon: 'el-icon-s-flag',
          path: '/table'
        }
      ],
      isExpend: false// 菜单是否展开
    }
  },
  methods: {
    updateExpendKey (id) {
      this.expendKey = id
    },
    tourl () {
      window.location.href =
        'https://www.creative-tim.com/?_ga=2.230531802.750328659.1628560947-983949408.1627700374'
    },
    isswitch () {
      this.isExpend = !this.isExpend
      this.$emit('onchange', this.isExpend)
    }
  }
}
</script>
<style scoped>
.nav-content {
  width: 80px;
  height: 100vh;
  background: url('~@/assets/images/sidebar-2.jpg') no-repeat, transparent fixed;
  position: fixed;
  z-index: 2;
  overflow: hidden;
  transition: width 0.5s;
}
.nav-content.expend,
.nav-content:hover {
  width: 260px;
}
.nav-scroll {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.nav-content:hover /deep/ .side-box__label {
  display: block;
}
.nav-content::before {
  content: ' ';
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
.wrap-style {
  width: 100%;
  line-height: 50px;
  color: #fff;
  font-size: 14px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
}
.wrap-style-linke {
  display: flex;
  justify-content: left;
}
.wrap-style-linke:hover {
  cursor: pointer;
}
.wrap-style-img-profile {
  flex: 0 0 auto;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap-style-img {
  width: 40%;
  height: 65%;
  border-radius: 50px;
  vertical-align: unset;
}
.wrap-style-name {
  font-size: 15px;
  color: #fff;
}
.wrap-style-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  flex: 1 0 auto;
}
.wrap-style-icon {
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
}
</style>
