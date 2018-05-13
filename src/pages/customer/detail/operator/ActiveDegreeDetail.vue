<template>
  <div class="v_active_degree_detail">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近一个月通话活跃天数">
        <span>{{data.call_day_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话活跃天数">
        <span>{{data.call_day_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话活跃天数">
        <span>{{data.call_day_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均通话活跃天数">
        <span>{{data.call_day_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均通话活跃天数">
        <span>{{data.call_day_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月短信活跃天数">
        <span>{{data.sms_day_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月短信活跃天数">
        <span>{{data.sms_day_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月短信活跃天数">
        <span>{{data.sms_day_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均短信活跃天数">
        <span>{{data.sms_day_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均短信活跃天数">
        <span>{{data.sms_day_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月充值次数">
        <span>{{data.recharge_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月充值次数">
        <span>{{data.recharge_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月充值次数">
        <span>{{data.recharge_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均充值次数">
        <span>{{data.recharge_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均充值次数">
        <span>{{data.recharge_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话次数">
        <span>{{data.call_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话次数">
        <span>{{data.call_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话次数">
        <span>{{data.call_time_6m}}</span>
      </el-form-item>
     <el-form-item label="近三个月月均通话次数">
        <span>{{data.call_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均通话次数">
        <span>{{data.call_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月短信次数">
        <span>{{data.sms_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月短信次数">
        <span>{{data.sms_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月短信次数">
        <span>{{data.sms_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均短信次数">
        <span>{{data.sms_time_avg_3m}}</span>
      </el-form-item>
     <el-form-item label="近六个月月均短信次数">
        <span>{{data.sms_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月套餐流量总量">
        <span>{{data.flow_total_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月套餐流量总量">
        <span>{{data.flow_total_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月套餐流量总量">
        <span>{{data.flow_total_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均套餐流量总量">
        <span>{{data.flow_total_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均套餐流量总量">
        <span>{{data.flow_total_avg_6m}}</span>
      </el-form-item>
     <el-form-item label="近一个月套餐流量使用量">
        <span>{{data.flow_used_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月套餐流量使用量">
        <span>{{data.flow_used_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月套餐流量使用量">
        <span>{{data.flow_used_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月套餐流量月均使用量">
        <span>{{data.flow_used_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月套餐流量月均使用量">
        <span>{{data.flow_used_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月均次通话时长">
        <span>{{data.call_avg_duration_1m}}</span>
      </el-form-item>
     <el-form-item label="近三个月均次通话时长">
        <span>{{data.call_avg_duration_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月均次通话时长">
        <span>{{data.call_avg_duration_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月无呼出天数">
        <span>{{data.no_dial_day_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月无呼出天数">
        <span>{{data.no_dial_day_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月无呼出天数">
        <span>{{data.no_dial_day_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均无呼出天数">
        <span>{{data.no_dial_day_avg_3m}}</span>
      </el-form-item>
     <el-form-item label="近六个月月均无呼出天数">
        <span>{{data.no_dial_day_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月无呼出天数占比">
        <span>{{data.no_dial_day_percent_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月无呼出天数占比">
        <span>{{data.no_dial_day_percent_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月无呼出天数占比">
        <span>{{data.no_dial_day_percent_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月无通话天数">
        <span>{{data.no_call_day_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月无通话天数">
        <span>{{data.no_call_day_3m}}</span>
      </el-form-item>
     <el-form-item label="近六个月无通话天数">
        <span>{{data.no_call_day_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均无通话天数">
        <span>{{data.no_call_day_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均无通话天数">
        <span>{{data.no_call_day_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月无通话天数占比">
        <span>{{data.no_call_day_percent_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月无通话天数占比">
        <span>{{data.no_call_day_percent_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月无通话天数占比">
        <span>{{data.no_call_day_percent_6m}}</span>
      </el-form-item>
     <el-form-item label="近一个月最大连续开机天数">
        <span>{{data.power_on_max_day_1m}}</span>
      </el-form-item>
      <el-form-item label="近一个月关机天数">
        <span>{{data.power_off_day_1m}}</span>
      </el-form-item>
      <el-form-item label="近一个月关机天数占比">
        <span>{{data.power_off_day_percent_1m}}</span>
      </el-form-item>
      <el-form-item label="近一个月连续三天以上关机次数">
        <span>{{data.continue_power_off_num_1m}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VActiveDegreeDetail',
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
@import '../../../../assets/css/vars.scss';

.v_active_degree_detail {
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
      width: 200px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
  .title_box {
    margin: $ent-gap-xx-small $ent-gap-small;
  }
}
</style>
