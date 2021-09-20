<template>
  <div class="map-content">
    <div class="map-table">
      <el-table :data="tableData" :show-header="false">
        <el-table-column prop="date">
          <template slot-scope="scope">
            <img width="30" :src="scope.row.date" />
          </template>
        </el-table-column>
        <el-table-column prop="name"> </el-table-column>
        <el-table-column prop="address"> </el-table-column>
        <el-table-column prop="baifenbi"> </el-table-column>
      </el-table>
    </div>
    <div class="map-body-img">
      <img src="@/assets/images/tp1.jpg" />
    </div>
  </div>
</template>
<script>
import cardSrc from '@/assets/images/card-1.jpg'
export default {
    name:'DashboardMap',
    data () {
      return{
        tableData: [
          {
            date: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png',
            name: '中国',
            address: '123',
            baifenbi: '41%'
          },
          {
            date: cardSrc,
            name: '印度',
            address: '1341',
            baifenbi: '41%'
          },
          {
            date: require('@/assets/images/card-2.jpg'),
            name: '日本',
            address: '135',
            baifenbi: '41%'
          },
          {
            date: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png',
            name: '美国',
            address: '1315',
            baifenbi: '41%'
          },
          {
            date: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
            name: '中国',
            address: '123',
            baifenbi: '41%'
          },
          {
            date: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
            name: '印度',
            address: '1341',
            baifenbi: '41%'
          }
        ]
      }
    }
}
</script>
<style scoped>
  .map-content {
      width: 100%;
      display: flex;
      justify-content: center;
      overflow: hidden;
      border: solid 1px red;
  }
  .map-table {
    flex:  0 0 50%;
    width: 50%;
    display: flex;
  }
  .map-body-img {
      flex: 0 0 50%;
      width: 50%;
    
  }
</style>