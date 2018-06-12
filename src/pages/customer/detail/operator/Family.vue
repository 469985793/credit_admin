<template>
  <div class="v_operator__family_container">
    <div v-for="(familyItem, index) in dataList" :key="index">
      <el-tag>家庭总数{{familyItem.family_num}}</el-tag>
      <el-table
        class="table_box"
        :data="familyItem.items"
        stripe
        style="width: 100%"
        height="100%">
        <el-table-column
          type="index"
          label="序号"
          width="60">
        </el-table-column>
        <el-table-column
          prop="long_number"
          label="长号">
        </el-table-column>
        <el-table-column
          prop="short_number"
          label="短号">
        </el-table-column>
        <el-table-column
          prop="member_type"
          label="成员类型">
        </el-table-column>
        <el-table-column
          prop="join_date"
          label="加入日期">
        </el-table-column>
        <el-table-column
          prop="expire_date"
          label="失效日期">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorFamily',
  props: {
    dataList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_operator__family_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    height: calc(100% - 56px) !important;
  }
}
</style>
