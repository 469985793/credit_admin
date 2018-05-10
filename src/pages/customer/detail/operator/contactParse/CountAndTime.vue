<template>
  <div class="v_operator__countandtime_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近一个月单次通话最长时间">
        <span>{{data.max_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月单次通话最长时间">
        <span>{{data.max_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月单次通话最长时间">
        <span>{{data.max_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月单次通话最短时间">
        <span>{{data.min_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月单次通话最短时间">
        <span>{{data.min_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月单次通话最短时间">
        <span>{{data.min_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话时间1min内次数">
        <span>{{data.call_time_in_1_min_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间1min内次数">
        <span>{{data.call_time_in_1_min_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间1min内次数">
        <span>{{data.call_time_in_1_min_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间1min内月均次数">
        <span>{{data.call_time_in_1_min_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间1min内月均次数">
        <span>{{data.call_time_in_1_min_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话时间1min-5min内次数">
        <span>{{data.call_time_in_5_min_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间1min-5min内次数">
        <span>{{data.call_time_in_5_min_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间1min-5min内次数">
        <span>{{data.call_time_in_5_min_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间1min-5min内月均次数">
        <span>{{data.call_time_in_5_min_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间1min-5min内月均次数">
        <span>{{data.call_time_in_5_min_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话时间5min-10min内次数">
        <span>{{data.call_time_in_10_min_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间5min-10min内次数">
        <span>{{data.call_time_in_10_min_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间5min-10min内次数">
        <span>{{data.call_time_in_10_min_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间5min-10min内月均次数">
        <span>{{data.call_time_in_10_min_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间5min-10min内月均次数">
        <span>{{data.call_time_in_10_min_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月通话时间超过10min次数">
        <span>{{data.call_time_over_10_min_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间超过10min次数">
        <span>{{data.call_time_over_10_min_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间超过10min次数">
        <span>{{data.call_time_over_10_min_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月通话时间超过10min月均次数">
        <span>{{data.call_time_over_10_min_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话时间超过10min月均次数">
        <span>{{data.call_time_over_10_min_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月白天07:00- 18:00时长">
        <span>{{data.in_day_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月白天07:00- 18:00时长">
        <span>{{data.in_day_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月白天07:00- 18:00时长">
        <span>{{data.in_day_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月白天07: 00-18:00月均时长">
        <span>{{data.in_day_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月白天07: 00-18:00月均时长">
        <span>{{data.in_day_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月晚上18: 00-次日07:00时长">
        <span>{{data.in_night_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月晚上18: 00-次日07:00时长">
        <span>{{data.in_night_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月晚上18: 00-次日07:00时长">
        <span>{{data.in_night_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月晚上18:00-次日07:00月均时长">
        <span>{{data.in_night_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月晚上18:00-次日07:00月均时长">
        <span>{{data.in_night_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月本地时长">
        <span>{{data.local_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月本地时长">
        <span>{{data.local_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月本地时长">
        <span>{{data.local_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均本地时长">
        <span>{{data.local_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均本地时长">
        <span>{{data.local_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月长途(号码所属归属地以外地区)时长">
        <span>{{data.remote_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月长途(号码所属归属地以外地区)时长">
        <span>{{data.remote_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月长途(号码所属归属地以外地区)时长">
        <span>{{data.remote_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均长途(号码所属归属地以外地区)时长">
        <span>{{data.remote_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均长途(号码所属归属地以外地区)时长">
        <span>{{data.remote_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月白天07: 00-18:00次数">
        <span>{{data.in_day_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月白天07: 00-18:00次数">
        <span>{{data.in_day_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月白天07: 00-18:00次数">
        <span>{{data.in_day_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月白天07: 00-18:00月均次数">
        <span>{{data.in_day_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月白天07: 00-18:00月均次数">
        <span>{{data.in_day_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月晚上18:00-次日07:00次数">
        <span>{{data.in_night_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月晚上18:00-次日07:00次数">
        <span>{{data.in_night_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月晚上18:00-次日07:00次数">
        <span>{{data.in_night_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月晚上18:00-次日07:00月均次数">
        <span>{{data.in_night_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月晚上18:00-次日07:00月均次数">
        <span>{{data.in_night_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月本地次数">
        <span>{{data.local_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月本地次数">
        <span>{{data.local_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月本地次数">
        <span>{{data.local_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均本地次数">
        <span>{{data.local_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均本地次数">
        <span>{{data.local_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近一个月长途次数">
        <span>{{data.remote_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近三个月长途次数">
        <span>{{data.remote_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月长途次数">
        <span>{{data.remote_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月月均长途次数">
        <span>{{data.remote_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月月均长途次数">
        <span>{{data.remote_num_avg_6m}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorCountAndTime',
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

.v_operator__countandtime_container {
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
}
</style>
