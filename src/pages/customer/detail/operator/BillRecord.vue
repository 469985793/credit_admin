<template>
  <div class="v_operator__billrecord_container">
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="状态码">
              <span>{{ props.row.code }}</span>
            </el-form-item>
            <el-form-item label="账单月">
              <span>{{ props.row.bill_month }}</span>
            </el-form-item>
            <el-form-item label="账单起始日期">
              <span>{{ props.row.bill_start_date }}</span>
            </el-form-item>
            <el-form-item label="账单结束日期">
              <span>{{ props.row.bill_end_date }}</span>
            </el-form-item>
            <el-form-item label="套餐及固定费">
              <span>{{ props.row.base_fee }}</span>
            </el-form-item>
            <el-form-item label="增值业务费">
              <span>{{ props.row.extra_service_fee }}</span>
            </el-form-item>
            <el-form-item label="语音费">
              <span>{{ props.row.voice_fee }}</span>
            </el-form-item>
            <el-form-item label="短彩信费">
              <span>{{ props.row.sms_fee }}</span>
            </el-form-item>
            <el-form-item label="网络流量费">
              <span>{{ props.row.web_fee }}</span>
            </el-form-item>
            <el-form-item label="其他费用">
              <span>{{ props.row.extra_fee }}</span>
            </el-form-item>
            <el-form-item label="总费用">
              <span>{{ props.row.total_fee }}</span>
            </el-form-item>
            <el-form-item label="优惠费">
              <span>{{ props.row.discount }}</span>
            </el-form-item>
            <el-form-item label="其他优惠">
              <span>{{ props.row.extra_discount }}</span>
            </el-form-item>
            <el-form-item label="个人实际费用">
              <span>{{ props.row.actual_fee }}</span>
            </el-form-item>
            <el-form-item label="本期已付费用">
              <span>{{ props.row.paid_fee }}</span>
            </el-form-item>
            <el-form-item label="本期已未付费用">
              <span>{{ props.row.unpaid_fee }}</span>
            </el-form-item>
            <el-form-item label="本期可用积分">
              <span>{{ props.row.point }}</span>
            </el-form-item>
            <el-form-item label="上期可用积分">
              <span>{{ props.row.last_point }}</span>
            </el-form-item>
            <el-form-item label="本手机关联号码">
              <span>{{ props.row.related_mobiles }}</span>
            </el-form-item>
            <el-form-item label="备注">
              <span>{{ props.row.notes }}</span>
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
        label="账单月"
        prop="bill_month">
      </el-table-column>
      <el-table-column
        label="账单起始日期"
        prop="bill_start_date">
      </el-table-column>
      <el-table-column
        label="账单结束日期"
        prop="bill_end_date">
      </el-table-column>
      <el-table-column
        label="总费用"
        prop="total_fee">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorBillRecord',
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

.v_operator__billrecord_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        width: 130px;
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
