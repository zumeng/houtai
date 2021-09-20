
<template>
    <div class="side-box__name">
        <div class="side-box__icon">
            <template v-if="item.iconImg">
                <img :src="item.iconImg" class="side-box__icon--img">
            </template>
            <template v-else-if="item.iconText">
                <div class="side-box__icon--text" :class="item.icon">{{item.iconText}}</div>
            </template>
            <template v-else>
                <i class="side-box__icon--font" :class="item.icon"></i>
            </template>
        </div>
        <div class="side-box__label">{{item.name}}</div>
        <div class="side-box__other">
            <slot name="other"></slot>
        </div>
    </div>
</template>
<script>

export default {
  name: 'NavItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.side-box__name{
    width: 100%;
    line-height: 50px;
    color: #fff;
    font-size: 14px;
    height: 50px;
    display: flex;
    align-items: center;
}
.side-box__name:hover{
   cursor: pointer;
}
.side-box__name.active{
    background: hsla(0,0%,78.4%,.2);
}
.side-box__icon{
    flex: 0 0 auto;
    width: 80px;
    height: 40px;
    font-size: 20px;
    overflow: hidden;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
}
.side-box__icon--img{
    line-height: normal;
    width: 40%;
    height: 80%;
    border-radius: 50px;
    vertical-align: unset;
}
.side-box__icon--text{
   font-size: 15px;
}
.side-box__label{
    font: inherit;
    color: inherit;
    white-space: nowrap;
    flex: 1 1 auto;
    width: calc(100% - 40px);
}
.side-box__other{
    font: inherit;
    color: inherit;
    flex: 0 0 auto;
    margin-right: 15px;
}
</style>
