<template>
  <div class="v_customer_detail_operator_container">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="个人信息">
        <VBaseInfo :data="orderObj"></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="账单记录">
        <VBillRecord :dataList="orderObj.bills"></VBillRecord>
      </el-tab-pane>
      <el-tab-pane label="亲情网">
        <VFamily :dataList="orderObj.families"></VFamily>
      </el-tab-pane>
      <el-tab-pane label="通话记录">
        <VCallRecord :dataList="orderObj.calls"></VCallRecord>
      </el-tab-pane>
      <el-tab-pane label="充值记录">
        <VRechargeRecord :dataList="orderObj.recharges"></VRechargeRecord>
      </el-tab-pane>
      <el-tab-pane label="报告基本信息">
        <VReportInfo :infoData="operatorObj.user_basic_info" :srcData="operatorObj.data_source"></VReportInfo>
      </el-tab-pane>
      <el-tab-pane label="信息校验">
        <VInfoCheck :dataList="operatorObj.basic_info_check_items"></VInfoCheck>
      </el-tab-pane>
      <el-tab-pane label="联系人信息">
        <VContactInfo :data="operatorObj.friend_circle"></VContactInfo>
      </el-tab-pane>
      <el-tab-pane label="联系人分析">
        <VContactParse :data="operatorObj.friend_circle"></VContactParse>
      </el-tab-pane>
      <el-tab-pane label="用户分析">
        <VUserParse :data="operatorObj.friend_circle"></VUserParse>
      </el-tab-pane>
      <el-tab-pane label="服务号通话详情">
        <VServiceDetail :dataList="operatorObj.call_service_detail"></VServiceDetail>
      </el-tab-pane>
      <el-tab-pane label="消费详情">
        <VConsumptionDetail :data="operatorObj.consumption_detail"></VConsumptionDetail>
      </el-tab-pane>
      <el-tab-pane label="漫游详情">
        <VRoamDetail :dataList="operatorObj.roam_detail"></VRoamDetail>
      </el-tab-pane>
      <el-tab-pane label="手机活跃度详情">
        <VActiveDegreeDetail :data="operatorObj.active_degree_detail"></VActiveDegreeDetail>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VBaseInfo from './BaseInfo'
import VBillRecord from './BillRecord'
import VFamily from './Family'
import VCallRecord from './CallRecord'
import VRechargeRecord from './RechargeRecord'
import VReportInfo from './ReportInfo'
import VActiveDegreeDetail from './ActiveDegreeDetail'
import VConsumptionDetail from './ConsumptionDetail'
import VServiceDetail from './ServiceDetail'
import VRoamDetail from './RoamDetail'
import VInfoCheck from './InfoCheck'
import VContactInfo from './contactInfo/Index'
import VContactParse from './contactParse/Index'
import VUserParse from './userParse/Index'

export default {
  name: 'VCustomerDetailApply',
  data() {
    return {
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100,
      operatorObj: {},
      orderObj: {}
    }
  },
  components: {
    VBaseInfo,
    VBillRecord,
    VFamily,
    VCallRecord,
    VRechargeRecord,
    VReportInfo,
    VActiveDegreeDetail,
    VConsumptionDetail,
    VServiceDetail,
    VRoamDetail,
    VInfoCheck,
    VContactInfo,
    VContactParse,
    VUserParse
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.httpService.get('/api/operator', (res) => {
        this.operatorObj = res.data.data.data;
      });
      this.httpService.get('/api/bill', (res) => {
        this.orderObj = res.data.data.data;
      });
    },
    doSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.fetchData();
    },
    doCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.fetchData();
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_customer_detail_operator_container {
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






