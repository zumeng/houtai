<template>
  <div class="wrap">
    <div class="wrap-box-content">
      <div class="wrap-box" :style="{ background: item.color }">
        <i :class="item.icon"></i>
      </div>
      <div class="wrap-text">
        <p class="wrap-text-name">{{ item.name }}</p>
        <p class="wrap-text-price">{{ item.price }}</p>
      </div>
    </div>
    <div class="wrap-line"><hr /></div>
    <div class="wrap-footer-title">
      <i :class="item.tailIcon" class="footer-icon"></i>
      <span class="footer-title">{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardWrap',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
        }
      }
    }
  }
}
</script>
<style scoped>
.wrap {
  flex: 0 1 21%;
  width: 21%;
  border-radius: 3px;
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}
.wrap-box {
  width: 90px;
  height: 90px;
  position: absolute;
  top: -25px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
}
.wrap-text {
  float: right;
}
.wrap-text-name {
  padding-top: 15px;
  padding-bottom: 15px;
  color: #333;
  font-size: 14px;
  text-align: right;
}
.wrap-text-price {
  font-size: 18px;
  text-align: right;
}
.wrap-box-content {
  overflow: hidden;
}
.wrap-line {
  color: rgb(87, 84, 84);
  padding-top: 15px;
}
.wrap-footer-title {
  color: #333333;
  font-size: 12px;
  line-height: 20px;
  padding-bottom: 15px;
}
</style>
