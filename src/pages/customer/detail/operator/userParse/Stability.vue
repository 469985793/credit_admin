<template>
  <div class="v_operator__stability_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近一个月是否亲情网用户">
        <span>{{data.is_family_net_member_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月是否亲情网用户">
        <span>{{data.is_family_net_member_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月是否亲情网用户">
        <span>{{data.is_family_net_member_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月是否亲情网用户户主">
        <span>{{data.is_family_net_master_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月是否亲情网用户户主">
        <span>{{data.is_family_net_master_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月是否亲情网用户户主">
        <span>{{data.is_family_net_master_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月连续充值月数">
        <span>{{data.recharge_month_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月连续充值月数">
        <span>{{data.recharge_month_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月连续充值月数">
        <span>{{data.recharge_month_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月常联系地址是否为手机号码归属地">
        <span>{{data.is_address_match_phone_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月常联系地址是否为手机号码归属地">
        <span>{{data.is_address_match_phone_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月常联系地址是否为手机号码归属地">
        <span>{{data.is_address_match_phone_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话次数小于使用月数*1次">
        <span>{{data.num_of_call_less_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话次数小于使用月数*1次">
        <span>{{data.num_of_call_less_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话次数小于使用月数*1次">
        <span>{{data.num_of_call_less_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话次数大于使用月数*300次">
        <span>{{data.num_of_call_more_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话次数大于使用月数*300次">
        <span>{{data.num_of_call_more_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话次数大于使用月数*300次">
        <span>{{data.num_of_call_more_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月连续欠费月数">
        <span>{{data.unpaid_month_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月连续欠费月数">
        <span>{{data.unpaid_month_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月连续欠费月数">
        <span>{{data.unpaid_month_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月在本地是否超过使用月数*1次">
        <span>{{data.live_month_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月在本地是否超过使用月数*1次">
        <span>{{data.live_month_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月在本地是否超过使用月数*1次">
        <span>{{data.live_month_6m}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorStability',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/css/vars.scss';

.v_operator__stability_container {
  height: 100%;
  overflow-y: auto;
  .highlight {
    color: $ent-color-danger;
  }

  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      font-size: $ent-font-size-small;
      width: 220px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
}
</style>
