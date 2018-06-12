<template>
  <div class="v_customer_detail_credit">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="被执行">
        <VExcuted></VExcuted>
      </el-tab-pane>
      <el-tab-pane label="申请雷达">
        <VApply></VApply>
      </el-tab-pane>
      <el-tab-pane label="行为雷达">
        <VBehavior></VBehavior>
      </el-tab-pane>
      <el-tab-pane label="失信">
        <VDiscredit></VDiscredit>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VApply from './Apply'
import VExcuted from './Excuted'
import VDiscredit from './Discredit'
import VBehavior from './Behavior'

export default {
  name: 'VCustomerDetailCredit',
  components: {
    VApply, VExcuted, VDiscredit, VBehavior
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_customer_detail_credit {
  height: 100%;
  .el-tabs__content {
    height: 100%;
    overflow-y: auto;
  }
  .highlight {
    color: $ent-color-danger;
  }

  /* overwrite */
  .el-table {
    font-size: 13px;
    .cell {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .el-badge__content.is-fixed.is-dot {
      left: -20px;
      top: 2px;
    }
  }
  .el-form-item {
    margin-bottom: $ent-gap-x-small;
  } /* overwrite */
  .tab_box {
    height: 100%;
    .el-tabs__item {
      font-size: 12px;
      &:nth-child(6) {
        border-bottom: 1px double $ent-color-primary;
      }
    }
  }
}
</style>
