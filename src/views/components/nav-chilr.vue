
<template>
  <div class="side-box">
    <template v-if="item.chidlren && item.chidlren.length > 0">
      <div class="side-box__wrap">
        <nav-item :item="item" @click.native="expendBox">
          <template #other>
            <div class="side-box__arrow">
              <i class="fa" :class="{'fa-chevron-down': !isExpend, 'fa-chevron-up': isExpend}"></i>
            </div>
          </template>
        </nav-item>
        <transition name="menuup">
          <div class="side-box__wrap--box" v-show="isExpend">
            <template v-for="subItem in item.chidlren">
              <nav-chilr :item="subItem" :key="subItem.id"></nav-chilr>
            </template>
          </div>
        </transition>
      </div>
    </template>
    <template v-else-if="item.url">
        <nav-item :item="item" @click.native="toUrl"></nav-item>
    </template>
    <template v-else>
      <router-link class="side-link" :to="item.path || ''">
        <nav-item :item="item"></nav-item>
      </router-link>
    </template>
  </div>
</template>
<script>
import NavItem from './nav-item.vue'
export default {
  components: {NavItem},
  name: 'NavChilr',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      isExpend: false, //子元素是否展开
    }
  },
  methods: {
    expendBox () {
      this.isExpend = !this.isExpend
    },
    toUrl () {
      window.location.href = this.item.url
    }
  }
}
</script>
<style scoped>
.side-box{
  position: relative;
  width: 100%;
}
 .menuup-enter,
  .menuup-leave-to {
    transform: scaleY(0);
  }
  .menuup-enter-active,
  .menuup-leave-active {
    transform-origin: top;
    transition: transform 0.5s;
 }
</style>
