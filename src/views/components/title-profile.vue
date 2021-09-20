<template>
<div class="title-profile">
    <div class="title-header-profile">
        <div class="title-header-img">
          <div class="title-header-img-box">
              <slot name="icon"><i class="el-icon-scissors vd-form-img-outer"></i></slot>
          </div>
        </div>
        <div class="title-header-name">
            <slot name="name">{{name}}</slot>
         </div>
    </div>
    <div class="title-content">
       <slot name="content"></slot>
    </div>
</div>
</template>
<script>
export default {
  name: 'TitleProfile',
  data () {
    return {
      name: ''
    }
  }
}
</script>
<style scoped>
.title-profile {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  margin: 50px auto;
  padding: 15px;
  padding-top: 0px;
  box-sizing: border-box;
}
.title-header-profile {
  display: flex;
  justify-content: flex-start;
}
.title-header-name {
  line-height: 40px;
  margin-left: 20px;
  font-size: 20px;
  color: rgb(143, 141, 141);
}
.title-content {
  width: 100%;
  margin:0 atuo;
}
.title-header-img {
  height: 60px;
  max-width: 200px;
  min-width: 60px;
  padding: 0 15px;
  box-sizing: border-box;
  background: #57af5b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  transform: translateY(-20px);
}
.title-header-img-box{
  height: auto;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: inherit;
  color: inherit;
  font-size: 20px;
}
</style>
