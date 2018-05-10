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
              <span>{{ props.row.telNum }}</span>
            </el-form-item>
            <el-form-item label="近三个月漫游地漫游天数">
              <span>{{ props.row.idCardNum }}</span>
            </el-form-item>
            <el-form-item label="近六个月漫游地漫游天数">
              <span>{{ props.row.sex }}</span>
            </el-form-item>
            <el-form-item label="近三个月漫游地连续漫游一天以上次数">
              <span>{{ props.row.applyMoney }}</span>
            </el-form-item>
            <el-form-item label="近六个月漫游地连续漫游一天以上次数">
              <span>{{ props.row.applyTime }}</span>
            </el-form-item>
            <el-form-item label="近三个月漫游地连续漫游最大天数">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
            <el-form-item label="近六个月漫游地连续漫游最大天数">
              <span>{{ props.row.loadMoney }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        prop="id">
      </el-table-column>
      <el-table-column
        label="漫游地"
        prop="name">
      </el-table-column>
      <el-table-column
        label="近三个月漫游地漫游天数"
        prop="telNum">
      </el-table-column>
      <el-table-column
        label="近六个月漫游地漫游天数"
        prop="sex">
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
