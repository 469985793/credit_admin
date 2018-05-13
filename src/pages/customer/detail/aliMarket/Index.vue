<template>
  <div class="v_alimarket_index">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="基本信息">
        <VBaseInfo :data="dataObj"></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="淘宝订单信息">
        <VOrderInfo :data="dataObj.tradedetails"></VOrderInfo>
      </el-tab-pane>
      <el-tab-pane label="最近几笔订单收货地址">
        <VRecentDeliverAddr :dataList="dataObj.recentdeliveraddress"></VRecentDeliverAddr>
      </el-tab-pane>
      <el-tab-pane label="淘宝收货地址">
        <VDeliverAddr :dataList="dataObj.deliveraddress"></VDeliverAddr>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VBaseInfo from './BaseInfo'
import VRecentDeliverAddr from './RecentDeliverAddr'
import VDeliverAddr from './DeliverAddr'
import VOrderInfo from './OrderInfo'

export default {
  name: 'VAliMarket',
  data() {
    return {
      dataObj: {}
    }
  },
  components: {
    VBaseInfo, VRecentDeliverAddr, VDeliverAddr, VOrderInfo
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.httpService.get('/api/alimarket', (res) => {
        this.dataObj = res.data.data.data;
      });
    }
  }
}
</script>

<style lang="scss">
@import '../../../../assets/css/vars.scss';

.v_alimarket_index {
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
  } /* overwrite */
}
</style>
