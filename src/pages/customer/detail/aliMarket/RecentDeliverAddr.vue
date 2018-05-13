<template>
  <div class="v_recent_deliver_addr">
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="订单id">
              <span>{{ props.row.trade_id }}</span>
            </el-form-item>
            <el-form-item label="订单时间">
              <span>{{ props.row.trade_createtime }}</span>
            </el-form-item>
            <el-form-item label="订单费用">
              <span>{{ props.row.actual_fee }}</span>
            </el-form-item>
            <el-form-item label="收货地址中的姓名">
              <span>{{ props.row.deliver_name }}</span>
            </el-form-item>
            <el-form-item label="收货地址中的手机">
              <span>{{ props.row.deliver_mobilephone }}</span>
            </el-form-item>
            <el-form-item label="收货地址中的固定电话">
              <span>{{ props.row.deliver_fixedphone }}</span>
            </el-form-item>
            <el-form-item label="省份">
              <span>{{ props.row.province }}</span>
            </el-form-item>
            <el-form-item label="城市">
              <span>{{ props.row.city }}</span>
            </el-form-item>
            <el-form-item label="详细地址">
              <span>{{ props.row.deliver_address }}</span>
            </el-form-item>
            <el-form-item label="邮编">
              <span>{{ props.row.deliver_postcode }}</span>
            </el-form-item>
            <el-form-item label="发票抬头">
              <span>{{ props.row.invoice_name }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        label="订单id"
        prop="trade_id">
      </el-table-column>
      <el-table-column
        label="订单时间"
        prop="trade_createtime">
      </el-table-column>
      <el-table-column
        label="收货地址中的姓名"
        prop="deliver_name">
      </el-table-column>
      <el-table-column
        label="详细地址"
        prop="deliver_address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VRecentDeliverAddr',
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

.v_recent_deliver_addr {
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
