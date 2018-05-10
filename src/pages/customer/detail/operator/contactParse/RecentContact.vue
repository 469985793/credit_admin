<template>
  <div class="v_operator__recentcontact_container">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="对方号码">
              <span>{{ props.row.peer_num }}</span>
            </el-form-item>
            <el-form-item label="通话归属地">
              <span>{{ props.row.city }}</span>
            </el-form-item>
            <el-form-item label="近一周联系次数">
              <span>{{ props.row.call_num_1w }}</span>
            </el-form-item>
            <el-form-item label="近一月联系次数">
              <span>{{ props.row.call_num_1m }}</span>
            </el-form-item>
            <el-form-item label="近三月联系次数">
              <span>{{ props.row.call_num_3m }}</span>
            </el-form-item>
            <el-form-item label="近六月联系次数">
              <span>{{ props.row.call_num_6m }}</span>
            </el-form-item>
            <el-form-item label="近三月通话时长">
              <span>{{ props.row.call_time_3m }}</span>
            </el-form-item>
            <el-form-item label="近六月通话时长">
              <span>{{ props.row.call_time_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月主叫次数">
              <span>{{ props.row.dial_num_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月主叫次数">
              <span>{{ props.row.dial_num_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月被叫次数">
              <span>{{ props.row.dialed_num_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月被叫次数">
              <span>{{ props.row.dialed_num_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月早上(05: 30-11:30)联系次数">
              <span>{{ props.row.call_num_morning_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月早上(05: 30-11:30)联系次数">
              <span>{{ props.row.call_num_morning_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月中午(11: 30-13:30)联系次数">
              <span>{{ props.row.call_num_noon_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月中午(11: 30-13:30)联系次数">
              <span>{{ props.row.call_num_noon_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月下午(13: 30-17:30)联系次数">
              <span>{{ props.row.call_num_afternoon_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月下午(13: 30-17:30)联系次数">
              <span>{{ props.row.call_num_afternoon_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月晚上(17: 30-23:30)联系次数">
              <span>{{ props.row.call_num_evening_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月晚上(17: 30-23:30)联系次数">
              <span>{{ props.row.call_num_evening_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月凌晨(23: 30-05:30)联系次数">
              <span>{{ props.row.call_num_night_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月凌晨(23: 30-05:30)联系次数">
              <span>{{ props.row.call_num_night_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月工作日联系次数">
              <span>{{ props.row.call_num_weekday_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月工作日联系次数">
              <span>{{ props.row.call_num_weekday_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月周末联系次数">
              <span>{{ props.row.call_num_weekend_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月周末联系次数">
              <span>{{ props.row.call_num_weekend_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月节假日联系次数">
              <span>{{ props.row.call_num_holiday_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月节假日联系次数">
              <span>{{ props.row.call_num_holiday_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月是否全天联系">
              <span>{{ props.row.call_if_whole_day_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月是否全天联系">
              <span>{{ props.row.call_if_whole_day_6m }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        width="60"
        type="index">
      </el-table-column>
      <el-table-column
        label="对方号码"
        prop="peer_num">
      </el-table-column>
      <el-table-column
        label="通话归属地"
        prop="city">
      </el-table-column>
      <el-table-column
        label="近一周联系次数"
        prop="call_num_1w">
      </el-table-column>
      <el-table-column
        label="近一月联系次数"
        prop="call_num_1m">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRecentContact',
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
@import '../../../../../assets/css/vars.scss';

.v_operator__recentcontact_container {
  height: 100%;
  .table_box {
    height: 100%;
    overflow-y: auto;
    width: 100%;
    .form_list_box {
      font-size: 0;
      label {
        font-size: $ent-font-size-x-small;
        width: 190px;
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
