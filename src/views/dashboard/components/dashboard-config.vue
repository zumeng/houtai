<template>
  <div class="config">
        <div class="config-img">
           <img class="img-body" :src="item.img" >
        </div>
        <div class="config-cover">
             <a class="cover-a" href="#"><i class="el-icon-takeaway-box cover-a-i"></i>FIXHEADER!</a>
        </div>
        <div class="config-icon">
          <a href="#" class="icon-item el-icon-refresh-right"></a>
          <a href="#" class="icon-item el-icon-edit"></a>
        </div>
        <div class="config-title">
             <h4>{{item.name}}</h4>
             <p class="config-title-item">
                 <span class="config-title-item-span"><i :class="item.icon"></i>{{item.number}}</span>
                 {{item.title}}
            </p>
             <hr>
             <p class="config-title-tail">
                 <i class="el-icon-alarm-clock"></i>
                 {{item.field}}
             </p>
        </div>
    </div>
</template>
<script>
export default{
  name: 'DashboardConfig',
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
.config {
      width: 32%;
      border-radius: 5px;
      background: #fff;
      position:relative;
}
.config-img {
    width: 90%;
  border-radius: 5px;
  margin: 0 auto;
   position:absolute;
    top: -20px;
    left: 15px;
    transition: all 0.4s;
}
.img-body {
    width: 100%;
    border-radius: 5px;
}
.config:hover .config-img {
    transform: translateY(-35px);
}
.config-cover{
    font-size: 16px;
    margin:0 auto;
    text-align: center;
    height: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.cover-a {
    color: red;
}
.cover-a-i {
    margin-right: 10px;
}
.config-icon {
    text-align: center;
}
.icon-item{
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
}
.el-icon-refresh-right {
    color: #0ab3c8;
}
.config-title-item{
    color: #333333;
    font-size: 14px;
    padding:10px 0px;
}
.config-title-tail{
    color: #333333;
    font-size: 12px;
}
.config-title {
    padding: 15px;
}
.config-title-item-span {
    color: rgb(39, 230, 32);
}
</style>
