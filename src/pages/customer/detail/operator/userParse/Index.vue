<template>
  <div class="v_user_parse_container">
    <el-tabs v-model="activeTab" class="tab_box" type="card" tab-position="top">
      <el-tab-pane label="风险分析" name="1">
        <VRisk :data="data.risk_analysis"></VRisk>
      </el-tab-pane>
      <el-tab-pane label="活跃度分析" name="2">
        <VActiveDegree :data="data.active_degree"></VActiveDegree>
      </el-tab-pane>
      <el-tab-pane label="消费分析" name="3">
        <VConsumption :data="data.consumption_analysis"></VConsumption>
      </el-tab-pane>
      <el-tab-pane label="漫游分析" name="4">
        <VRoam :dataList="data.roam_analysis"></VRoam>
      </el-tab-pane>
      <el-tab-pane label="第三方通话分析" name="5">
        <VThirdPart :data="data.call_third_part_detail"></VThirdPart>
      </el-tab-pane>
      <el-tab-pane label="稳定性分析" name="6">
        <VStability :data="data.call_family_detail"></VStability>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VActiveDegree from './ActiveDegree'
import VConsumption from './Consumption'
import VThirdPart from './ThirdPart'
import VStability from './Stability'
import VRoam from './Roam'
import VRisk from './Risk'

export default {
  name: 'VCustomerDetailApply',
  data() {
    return {
      activeTab: '1'
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    VActiveDegree, VConsumption, VThirdPart, VStability, VRoam, VRisk
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/css/vars.scss';

.v_user_parse_container {
  height: 100%;
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
      line-height: 30px;
      height: 30px;
      &:nth-child(6) {
        border-bottom: none;
      }
    }
  }
}
</style>






