<template>
  <div class="v_operator__recentlocation_container">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="通话归属地">
              <span>{{ props.row.city }}</span>
            </el-form-item>
            <el-form-item label="通话次数">
              <span>{{ props.row.total_num }}</span>
            </el-form-item>
            <el-form-item label="通话号码数">
              <span>{{ props.row.peer_num }}</span>
            </el-form-item>
            <el-form-item label="通话总时长">
              <span>{{ props.row.total_time }}</span>
            </el-form-item>
            <el-form-item label="主叫次数">
              <span>{{ props.row.dial_num }}</span>
            </el-form-item>
            <el-form-item label="被叫次数">
              <span>{{ props.row.dialed_num }}</span>
            </el-form-item>
            <el-form-item label="主叫总时长">
              <span>{{ props.row.dial_time }}</span>
            </el-form-item>
            <el-form-item label="被叫总时长">
              <span>{{ props.row.dialed_time }}</span>
            </el-form-item>
            <el-form-item label="平均主叫时长">
              <span>{{ props.row.dial_time_avg }}</span>
            </el-form-item>
            <el-form-item label="平均被叫时长">
              <span>{{ props.row.dialed_time_avg }}</span>
            </el-form-item>
            <el-form-item label="主叫次数比例">
              <span>{{ props.row.dial_num_percent }}</span>
            </el-form-item>
            <el-form-item label="被叫次数比例">
              <span>{{ props.row.dialed_num_percent }}</span>
            </el-form-item>
            <el-form-item label="主叫时长比例">
              <span>{{ props.row.dial_time_precent }}</span>
            </el-form-item>
            <el-form-item label="被叫时长比例">
              <span>{{ props.row.dialed_time_precent }}</span>
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
        label="通话归属地"
        prop="city">
      </el-table-column>
      <el-table-column
        label="通话次数"
        prop="total_num">
      </el-table-column>
      <el-table-column
        label="主叫次数"
        prop="dial_num">
      </el-table-column>
      <el-table-column
        label="被叫次数"
        prop="dialed_num">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRecentLocation',
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

.v_operator__recentlocation_container {
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
