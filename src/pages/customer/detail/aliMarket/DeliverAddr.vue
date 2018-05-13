<template>
  <div class="v_alimarket_deliver_addr">
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataList">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="省"
        prop="province">
      </el-table-column>
      <el-table-column
        label="市"
        prop="city">
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address">
      </el-table-column>
      <el-table-column
        label="详细地址"
        prop="full_address">
      </el-table-column>
      <el-table-column
        label="邮编"
        prop="zip_code">
      </el-table-column>
      <el-table-column
        label="电话号码"
        prop="phone_no">
      </el-table-column>
      <el-table-column
        width="150"
        label="是否默认收货地址"
        prop="default">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VAliMarketDeliverAddr',
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

.v_alimarket_deliver_addr {
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        width: 180px;
        color: #99a9bf;
      }
      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 33.3%;
      }
    }
  }
}
</style>
