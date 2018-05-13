<template>
  <div class="v_operator__callrecord_container">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="记录总数">
              <span>{{ props.row.total_size }}</span>
            </el-form-item>
            <el-form-item label=月份>
              <span>{{ props.row.billMonth }}</span>
            </el-form-item>
            <el-form-item label="对方号码">
              <span>{{ props.row.peer_number }}</span>
            </el-form-item>
            <el-form-item label="呼出地">
              <span>{{ props.row.location }}</span>
            </el-form-item>
            <el-form-item label="通话地类型">
              <span>{{ props.row.location_type }}</span>
            </el-form-item>
            <el-form-item label="主叫被叫">
              <span>{{ props.row.dial_type }}</span>
            </el-form-item>
            <el-form-item label="通话费(分)">
              <span>{{ props.row.fee }}</span>
            </el-form-item>
            <el-form-item label="通话时间">
              <span>{{ props.row.time }}</span>
            </el-form-item>
            <el-form-item label="通话时长(s)">
              <span>{{ props.row.duration }}</span>
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
        label="对方号码"
        prop="peer_number">
      </el-table-column>
      <el-table-column
        label="呼出地"
        prop="location">
      </el-table-column>
      <el-table-column
        label="主叫被叫"
        prop="dial_type">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorCallRecord',
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

.v_operator__callrecord_container {
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
