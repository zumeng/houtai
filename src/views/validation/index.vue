<template>
  <div>
    <!-- 登陆表格区 -->
    <div class="from-wrap">
      <div class="register-from">
        <title-profile>
          <i class="el-icon-user-solid" slot="icon"></i>
          <from-register slot="content"></from-register>
        </title-profile>
      </div>
      <div class="login-from">
        <title-profile>
          <i class="el-icon-user-solid" slot="icon"></i>
          <from-content slot="content"></from-content>
        </title-profile>
      </div>
    </div>
    <!-- 数据验证区 -->
    <div class="Type-from">
      <title-profile>
        <p slot="icon">Type Validation</p>
        <from-type slot="content"></from-type>
      </title-profile>
    </div>
    <!-- 范围限制区 -->
    <div class="Range-from">
      <title-profile>
        <p slot="icon">Range Validation</p>
        <from-range slot="content"> </from-range>
      </title-profile>
    </div>
  </div>
</template>
<script>

export default {
}
</script>
<script>
import FromRegister from './components/from-register.vue'
import FromContent from './components/from-content.vue'
import TitleProfile from '../components/title-profile.vue'
import FromType from './components/from-type.vue'
import FromRange from './components/from-range.vue'
export default {
  name: 'index',
  components: {
    FromContent,
    TitleProfile,
    FromType,
    FromRange,
    FromRegister
  }
}
</script>
<style scoped src="./index.css"></style>
