<template>
  <div class="v_alimarket_index">
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="基本信息">
        <VBaseInfo></VBaseInfo>
      </el-tab-pane>
      <el-tab-pane label="淘宝订单信息">
        <VOrderInfo></VOrderInfo>
      </el-tab-pane>
      <el-tab-pane label="最近几笔订单收货地址">
        <VRecentDeliverAddr></VRecentDeliverAddr>
      </el-tab-pane>
      <el-tab-pane label="淘宝收货地址">
        <VDeliverAddr></VDeliverAddr>
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
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
  },
  components: {
    VBaseInfo, VRecentDeliverAddr, VDeliverAddr, VOrderInfo
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
  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
}
</style>
