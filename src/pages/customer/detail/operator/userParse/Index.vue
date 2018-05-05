<template>
  <div class="v_operator__index_container">
    <el-tabs v-model="activeTab" class="tab_box_luo" type="card" tab-position="top">
      <el-tab-pane label="风险分析" name="1">
        <VRisk></VRisk>
      </el-tab-pane>
      <el-tab-pane label="活跃度分析" name="2">
        <VActiveDegree></VActiveDegree>
      </el-tab-pane>
      <el-tab-pane label="消费分析" name="3">
        <VConsumption></VConsumption>
      </el-tab-pane>
      <el-tab-pane label="漫游分析" name="4">
        <VRoam></VRoam>
      </el-tab-pane>
      <el-tab-pane label="第三方通话分析" name="5">
        <VThirdPart></VThirdPart>
      </el-tab-pane>
      <el-tab-pane label="稳定性分析" name="6">
        <VStability></VStability>
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
      activeTab: '1',
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
  },
  components: {
    VActiveDegree, VConsumption, VThirdPart, VStability, VRoam, VRisk
  },
  methods: {
    doSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.fetchData();
      console.log(`每页 ${pageSize} 条`);
    },
    doCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.fetchData();
      console.log(`当前页: ${pageNum}`);
    }
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/css/vars.scss';

.v_operator__index_container {
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
  .tab_box_luo {
    height: 100%;
    .el-tabs__item {
      font-size: 12px;
      line-height: 30px;
      height: 30px;
      &:nth-child(6) {
        border: none;
      }
    }
  }
  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
}
</style>






