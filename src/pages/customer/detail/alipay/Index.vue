<template>
  <div class="v_alipay_index">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="基本信息">
        <VBaseInfo :data="dataObj"></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="交易记录信息">
        <VTradeInfo :dataList="dataObj.tradeinfo"></VTradeInfo>
      </el-tab-pane>
      <el-tab-pane label="绑定银行卡信息">
        <VBankInfo :dataList="dataObj.bankinfo"></VBankInfo>
      </el-tab-pane>
      <el-tab-pane label="最近交易人信息">
        <VRecentTrader :dataList="dataObj.recenttraders"></VRecentTrader>
      </el-tab-pane>
      <el-tab-pane label="我的联系人信息">
        <VContactInfo :dataList="dataObj.alipaycontacts"></VContactInfo>
      </el-tab-pane>
      <el-tab-pane label="收货地址信息">
        <VDeliverAddr :dataList="dataObj.alipaydeliveraddresses"></VDeliverAddr>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VBaseInfo from './BaseInfo'
import VTradeInfo from './TradeInfo'
import VRecentTrader from './RecentTrader'
import VDeliverAddr from './DeliverAddr'
import VContactInfo from './ContactInfo'
import VBankInfo from './BankInfo'

export default {
  name: 'VAlipay',
  data() {
    return {
      dataObj: {}
    }
  },
  components: {
    VBaseInfo, VTradeInfo, VRecentTrader, VDeliverAddr, VContactInfo, VBankInfo
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.httpService.get('/api/alipay', (res) => {
        this.dataObj = res.data.data.data;
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_alipay_index {
  height: 100%;
  .tab_box {
    height: 100%;
    .el-tabs__content {
      height: 100%;
      overflow-y: auto;
    }
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
  }
}
</style>
