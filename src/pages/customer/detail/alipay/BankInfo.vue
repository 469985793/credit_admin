<template>
  <div class="v_credit_discredit">
    <el-table
      class="table_box"
      stripe
      :highlight-current-row="true"
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="映射ID">
              <span>{{ props.row.mapping_id }}</span>
            </el-form-item>
            <el-form-item label="银行卡绑定的时间">
              <span>{{ props.row.active_date }}</span>
            </el-form-item>
            <el-form-item label="卡预留的手机号码">
              <span>{{ props.row.mobile }}</span>
            </el-form-item>
            <el-form-item label="银行卡后4位">
              <span>{{ props.row.card_number }}</span>
            </el-form-item>
            <el-form-item label="作用未知">
              <span>{{ props.row.level }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.user_name }}</span>
            </el-form-item>
            <el-form-item label="银行名称">
              <span>{{ props.row.bank_name }}</span>
            </el-form-item>
            <el-form-item label="银行卡类型">
              <span>{{ props.row.card_type }}</span>
            </el-form-item>
            <el-form-item label="编号">
              <span>{{ props.row.sign_id }}</span>
            </el-form-item>
            <el-form-item label="是否已开通快捷支付">
              <span>{{ props.row.open_fpcard }}</span>
            </el-form-item>
            <el-form-item label="加密标识">
              <span>{{ props.row.provider_userid }}</span>
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
        label="姓名"
        prop="user_name">
      </el-table-column>
      <el-table-column
        label="卡预留的手机号码"
        prop="mobile">
      </el-table-column>
      <el-table-column
        label="银行卡后4位"
        prop="card_number">
      </el-table-column>
      <el-table-column
        label="银行卡绑定的时间"
        prop="active_date">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VCreditDiscredit',
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

.v_credit_discredit {
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
