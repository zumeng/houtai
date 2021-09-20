<template>
  <div class="content-table">
    <title-profile>
      <i slot="icon" class="el-icon-tickets"></i>
      <p slot="name">Pagianted Tables</p>
      <div slot="content">
        <div class="table-nav">
          <div>
            <p class="table-select-title">per page</p>
            <el-select
              v-model="pageSize"
              placeholder="请选择"
              @change="handlePageSizeChange"
              id="table-nav-select"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <input
            type="text"
            name=""
            class="table-nav-search"
            placeholder="Search records"
          />
        </div>
        <div class="table-content">
          <table-content :data="tableData"></table-content>
          <div class="table-tail">
            <p class="table-tail-title">
              Showing {{ (currentPage - 1) * pageSize + 1 }} to
              {{ pageSize }} of {{ total }} entries
            </p>
            <div class="table-tail-flip">
              <el-pagination
                :small="true"
                :page-size="pageSize"
                :current-page="currentPage"
                :total="total"
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </title-profile>
  </div>
</template>
<script>
import TableContent from './table-content.vue'
import axios from 'axios'
import TitleProfile from '../components/title-profile.vue'
export default {

  components: {
    TableContent,
    TitleProfile,
    axios
  },
  data () {
    return {
      isjump: '',
      options: [{
        value: 5,
        label: '5'
      }, {
        value: 10,
        label: '10'
      }, {
        value: 25,
        label: '25'
      }, {
        value: 40,
        label: '40'
      }],
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    jump (value) {
      this.isjump = value
    },
    opena () {},
    open () {},
    off () {},
    handlePageSizeChange () {
      this.total = 0
      // this.currentPage = 1
      // this.initData()
      this.handleCurrentChange(1)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.initData()
    },
    initData () {
      this.$http({
        method: 'get',
        url: 'table-list',
        params: {
          page: this.currentPage,
          pageSize: this.pageSize
        }
      }).then(response => {
        console.log('response', response)
        // 浏览器返回的接口状态 成功一定是200
        if (response.status !== 200) {
          return
        }
        // response.data.data后台接口返回的数据
        // 这个code就不一定是200
        if (response.data.code !== 200) {
          return
        }
        const data = response.data.data || {}
        console.log('data', data)
        const tableData = (data.data || []).map(cur => {
          return {
            Name: cur.name,
            Email: cur.tag,
            id: cur.id
          }
        })
        this.total = Number(data.total)
        this.tableData = tableData
      })
    }
  }
}
</script>
<style scoped src="./index.css"></style>
