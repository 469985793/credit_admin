<template>
  <div class="v_operator__dialogcount_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近1个月通话次数">
        <span>{{data.total_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月通话次数">
        <span>{{data.total_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月通话次数">
        <span>{{data.total_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月均通话次数">
        <span>{{data.total_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月均通话次数">
        <span>{{data.total_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近1个月通话总时长">
        <span>{{data.total_time_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月通话总时长">
        <span>{{data.total_time_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月通话总时长">
        <span>{{data.total_time_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月平均通话总时长">
        <span>{{data.total_time_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月平均通话总时长">
        <span>{{data.total_time_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近1个月通话号码数">
        <span>{{data.total_peer_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月通话号码数">
        <span>{{data.total_peer_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月通话号码数">
        <span>{{data.total_peer_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月均通话号码数">
        <span>{{data.total_peer_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月均通话号码数">
        <span>{{data.total_peer_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近1个月通话号码归属地总数">
        <span>{{data.total_city_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月通话号码归属地总数">
        <span>{{data.total_city_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月通话号码归属地总数">
        <span>{{data.total_city_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月均通话号码归属地总数">
        <span>{{data.total_city_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月均通话号码归属地总数">
        <span>{{data.total_city_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近1个月主叫次数">
        <span>{{data.total_dial_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月主叫次数">
        <span>{{data.total_dial_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月主叫次数">
        <span>{{data.total_dial_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月均主叫次数">
        <span>{{data.total_dial_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月均主叫次数">
        <span>{{data.total_dial_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近1个月被叫次数">
        <span>{{data.total_dialed_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月被叫次数">
        <span>{{data.total_dialed_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月被叫次数">
        <span>{{data.total_dialed_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月均被叫次数">
        <span>{{data.total_dialed_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月均被叫次数">
        <span>{{data.total_dialed_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近1个月主叫号码数">
        <span>{{data.total_dial_peer_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月主叫号码数">
        <span>{{data.total_dial_peer_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月主叫号码数">
        <span>{{data.total_dial_peer_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月均主叫号码数">
        <span>{{data.total_dial_peer_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月均主叫号码数">
        <span>{{data.total_dial_peer_num_avg_6m}}</span>
      </el-form-item>
      <el-form-item label="近1个月被叫号码数">
        <span>{{data.total_dialed_peer_num_1m}}</span>
      </el-form-item>
      <el-form-item label="近3个月被叫号码数">
        <span>{{data.total_dialed_peer_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月被叫号码数">
        <span>{{data.total_dialed_peer_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近3个月均被叫号码数">
        <span>{{data.total_dialed_peer_num_avg_3m}}</span>
      </el-form-item>
      <el-form-item label="近6个月均被叫号码数">
        <span>{{data.total_dialed_peer_num_avg_6m}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorDialogCount',
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

.v_operator__dialogcount_container {
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
      width: 180px;
      font-size: $ent-font-size-small;
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
