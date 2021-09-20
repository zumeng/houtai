<template>
    <div class="img-wrap">
        <div class="img-wrap-img">
            <img class="wrap-img-item" :src="item.img">
        </div>
        <div class="img-cover">
            <a class="cover-a" href="#">
              <i class="el-icon-takeaway-box" style="margin-right: 10px"></i>
              FIX HEADER!
            </a>
        </div>
        <div class="img-icon">
            <i class="el-icon-s-ticket"></i>
            <i class="img-icon-two el-icon-refresh-right"></i>
            <i class="img-icon-three el-icon-edit"></i>
        </div>
        <div class="img-text">
          <p class="img-text-name">{{item.name}}</p>
          <p>{{item.title}}</p>
          <hr/>
        </div>
        <div class="img-tail-title">
          <p>{{item.price}}</p>
          <p>
            <i class="el-icon-alarm-clock" ></i>
            {{item.tail}}
          </p>
        </div>
    </div>
</template>

<script>
export default{
  name: 'DashboardImg',
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
.img-wrap {
      width: 29%;
      border-radius: 5px;
      background: #fff;
      position:relative;
      padding:15px;
}
.img-wrap-img {
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
   position:absolute;
    top: -20px;
    left: 15px;
    transition: all 0.4s;
}
.wrap-img-item {
    width: 100%;
    border-radius: 5px;
}
.img-wrap:hover .img-wrap-img {
    transform: translateY(-50px);
}
.img-cover {
    font-size: 16px;
    margin:0 auto;
    text-align: center;
    height: 40px;
    padding-top: 100px;
    padding-bottom: 10px;
}
.cover-a {
    color: red;
}
.img-icon {
    text-align: center;
}
.img-icon:hover {
    cursor: pointer;
}
.img-icon-two {
    color: rgb(81, 233, 43);
    margin: 0 15px;
}
.img-icon-three {
    color: red;
}
.img-text {
    padding-top: 20px;
    text-align: center;
    font-size: 12px;
    color: rgb(71, 69, 69);
}
.img-tail-title{
    display: flex;
    justify-content: space-between;
    color: #333333; font-size: 12px
}
.img-text-name {
    font-size: 16px;
}
</style>
