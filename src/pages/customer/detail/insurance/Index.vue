<template>
  <div class="v_insurance_index">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="基本信息">
        <VBaseInfo :data="dataObj"></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="保险种类信息">
        <VClassifyInfo :dataList="dataObj.insurances"></VClassifyInfo>
      </el-tab-pane>
      <el-tab-pane label="保险缴存记录">
        <VRecord :dataList="dataObj.insurance_record"></VRecord>
      </el-tab-pane>
      <el-tab-pane label="医保消费信息">
        <VMedicalRecord :dataList="dataObj.medical_insurance_record"></VMedicalRecord>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VBaseInfo from './BaseInfo'
import VClassifyInfo from './ClassifyInfo'
import VRecord from './Record'
import VMedicalRecord from './MedicalRecord'

export default {
  name: 'VInsurance',
  data() {
    return {
      dataObj: {}
    }
  },
  components: {
    VBaseInfo, VClassifyInfo, VRecord, VMedicalRecord
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.httpService.get('/api/insurance', (res) => {
        this.dataObj = res.data.data.data;
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_insurance_index {
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
  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
}
</style>
