<template>
    <el-table
    :data="data"
    style="width: 100%">
    <el-table-column
      prop="Name"
      label="Name"
      >
    </el-table-column>
    <el-table-column
      prop="Email"
      label="Email">
    </el-table-column>
    <el-table-column
      prop="Age"
      label="Age">
    </el-table-column>
    <el-table-column
      prop="Salary"
      label="Salary">
    </el-table-column>
    <el-table-column
    align="right"
      prop="操作"
      label="Action">
      <el-button type="text" @click="opena">
       <i class="table-icon-one el-icon-moon"></i>
      </el-button>
      <el-button type="text" @click="off">
        <i class="table-icon-two el-icon-s-platform"></i>
      </el-button>
      <el-button type="text" @click="open">
        <i class="table-icon-three el-icon-scissors"></i>
      </el-button>
    </el-table-column>
    <table slot="append" style="width:100%;text-align:left;">
        <th class="table-slot-tail">Name</th>
        <th class="table-slot-tail">Email</th>
        <th class="table-slot-tail">Age</th>
        <th class="table-slot-tail">Salary</th>
        <th class="table-slot-tail slot-right">Action</th>
    </table>
  </el-table>
</template>
<script>
export default {
  name: 'TableContent',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    open () {},
    opena () {},
    off () {}
  }
}
</script>
<style scoped>
.table-icon-one {
   font-size: 20px;
   color: #00bcd4;
}
.table-icon-two {
  font-size: 20px;
  color: #fcc26c;
}
.table-icon-three {
  font-size: 20px;
  color: #f5594d;
}
.table-icon-one,.table-icon-two,
.table-icon-three {
  cursor: pointer;
}
el-table-column {
    width: 20%;
    border-collapse: collapse;
}
.table-slot-tail{
    width: 20%;
    padding-left: 10px;
    border: none;
}
 .slot-right {
    text-align: right;
    padding-right: 10px;
}
</style>
