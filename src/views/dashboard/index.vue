<template>
<div>
     <div>
           <!-- 图形内容区(4列) -->
      <div class="content-wrap">
        <template v-for="item in list">
          <dashboard-wrap :item="item" :key="item.id"></dashboard-wrap>
        </template>
      </div>
      <!-- 图形内容区(3列) -->
      <div class="content-config">
        <template v-for="item in svgimg">
          <dashboard-config :item="item" :key="item.id"></dashboard-config>
        </template>
      </div>
      <!-- 图形内容区(map) -->
      <div class="content-map">
        <title-profile>
          <i slot="icon" class="el-icon-s-marketing"></i>
          <p slot="name">Global Sales by Top Locations</p>
          <dashboard-map slot="content"></dashboard-map>
        </title-profile>
      </div>
      <!-- 图形内容区(风景) -->
      <div class="content-img">
        <template v-for="item in scenery">
          <dashboard-img :item="item" :key="item.id"></dashboard-img>
        </template>
      </div>
       </div>
</div>
</template>
<script>
import TitleProfile from '../components/title-profile.vue'
import DashboardMap from './components/dashboard-map.vue'
import DashboardConfig from './components/dashboard-config.vue'
import DashboardWrap from './components/dashboard-wrap.vue'
import DashboardImg from './components/dashboard-img.vue'
export default {
  name: 'DashBoard',
  components: {
    DashboardWrap,
    DashboardConfig,
    DashboardImg,
    TitleProfile,
    DashboardMap
  },
  data () {
    return {
      list: [
        {
          id: '1',
          color: '#17bbd0',
          icon: 'fa fa-plane',
          name: 'Folowers',
          price: '+245',
          tailIcon: 'fa fa-tag',
          title: ' Just Updated'
        },
        {
          id: '2',
          color: '#f85a5a',
          icon: 'fa fa-rebel',
          name: 'Website Visits',
          price: '75.521',
          tailIcon: 'fa fa-tasks',
          title: ' Tracked from Google Analytics'
        },
        {
          id: '3',
          color: '#61b765',
          icon: 'fa fa-fort-awesome',
          name: 'Revenue',
          price: '$ 34,245',
          tailIcon: 'fa fa-university',
          title: 'Last 24 Hours'
        },
        {
          id: '4',
          color: '#f0c508',
          icon: 'fa fa-credit-card',
          name: 'Bookings',
          price: '184',
          tailIcon: 'fa fa-sort-amount-asc',
          title: 'Get More Space...'
        }
      ],
      svgimg: [
        {
          id: '1',
          img: require('@/assets/images/tp_03.jpg'),
          name: 'Website Views',
          title: 'Last Campaign Performance',
          field: 'updated 10 days ago'
        },
        {
          id: '2',
          img: require('@/assets/images/tp_05.jpg'),
          name: 'Daily Sales',
          icon: 'fa fa-arrow-up',
          number: '55% ',
          title: 'increase in today sales.',
          field: 'updated 4 minutes ago'
        },
        {
          id: '3',
          img: require('@/assets/images/tp_07.jpg'),
          name: 'Completed Tasks',
          title: 'Last Campaign Performance',
          field: ' campaign sent 26 minutes ago'
        }
      ],
      scenery: [
        {
          name: 'Cozy 5 Stars Apartment',
          id: '1',
          img: require('@/assets/images/card-2.jpg'),
          title:
            'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          tail: 'Barcelona, Spain',
          price: '$899/night'
        },
        {
          name: 'Office Studio',
          id: '2',
          img: require('@/assets/images/card-3.jpg'),
          title:
            'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
          tail: 'London, UK',
          price: '$1.119/night'
        },
        {
          name: 'Beautiful Castle',
          id: '3',
          img: require('@/assets/images/card-1.jpg'),
          title:
            'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          tail: 'Milan, Italy',
          price: '$459/night'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .content-wrap,.content-config,.content-img {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
}
</style>