<template>
  <div class="v_contact_info_container">
    <el-tabs v-model="activeTab" class="tab_box" type="card" tab-position="top">
      <el-tab-pane label="近三月联系人" name="1">
        <VRecentContact :dataList="data.call_num_top3_3m"></VRecentContact>
      </el-tab-pane>
      <el-tab-pane label="近六月月联系人" name="2">
        <VRecentContact :dataList="data.call_num_top3_6m"></VRecentContact>
      </el-tab-pane>
      <el-tab-pane label="近三月联系人号码归属地" name="3">
        <VRecentContact :dataList="data.call_location_top3_3m"></VRecentContact>
      </el-tab-pane>
      <el-tab-pane label="近六月联系人号码归属地" name="4">
        <VRecentContact :dataList="data.call_location_top3_6m"></VRecentContact>
      </el-tab-pane>
      <el-tab-pane label="通话统计" name="5">
        <VDialogCount :data="data.call_analysis"></VDialogCount>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VRecentContact from './RecentContact'
import VDialogCount from './DialogCount'

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
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    VRecentContact, VDialogCount
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

.v_contact_info_container {
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

  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
}
.el-tabs__content {
  height: 100%;
  .el-tab-pane {
    height: 100%;
    // .el-tabs__content {
    //   height: calc(100% - 65px);
    //   overflow-y: auto;
    // }
  }
}
</style>
