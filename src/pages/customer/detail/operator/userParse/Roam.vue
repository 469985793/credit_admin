<template>
  <div class="v_operator__roam_container">
    <el-table
      class="table_box"
      stripe
      :data="dataList">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form class="form_list_box" label-position="left" inline>
            <el-form-item label="漫游地">
              <span>{{ props.row.roam_location }}</span>
            </el-form-item>
            <el-form-item label="近三个月漫游地漫游天数">
              <span>{{ props.row.roam_day_num_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月漫游地漫游天数">
              <span>{{ props.row.roam_day_num_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月漫游地连续漫游一天以上次数">
              <span>{{ props.row.continue_roam_num_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月漫游地连续漫游一天以上次数">
              <span>{{ props.row.continue_roam_num_6m }}</span>
            </el-form-item>
            <el-form-item label="近三个月漫游地连续漫游最大天数">
              <span>{{ props.row.max_roam_day_num_3m }}</span>
            </el-form-item>
            <el-form-item label="近六个月漫游地连续漫游最大天数">
              <span>{{ props.row.max_roam_day_num_6m }}</span>
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
        label="漫游地"
        prop="roam_location">
      </el-table-column>
      <el-table-column
        label="近三个月漫游地漫游天数"
        prop="roam_day_num_3m">
      </el-table-column>
      <el-table-column
        label="近六个月漫游地漫游天数"
        prop="roam_day_num_6m">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRoam',
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

.v_operator__roam_container {
  height: 100%;
  overflow-y: auto;
  .table_box {
    width: 100%;
    .form_list_box {
      font-size: 0;
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
}
</style>
