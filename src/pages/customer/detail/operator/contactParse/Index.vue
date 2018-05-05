<template>
  <div class="v_operator__index_container">
    <el-tabs v-model="activeTab" class="tab_box_luo" type="card" tab-position="top">
      <el-tab-pane label="近三月联系人号码归属地通话详情分析" name="1">
        <VRecentLoaction></VRecentLoaction>
      </el-tab-pane>
      <el-tab-pane label="近三月通话时间段详情分析" name="2">
        <VDialogTime></VDialogTime>
      </el-tab-pane>
      <el-tab-pane label="近六个月联系人通话分析" name="3">
        <VRecentContact></VRecentContact>
      </el-tab-pane>
      <el-tab-pane label="近六月通话时间段详情分析" name="4">
        <VDialogTime></VDialogTime>
      </el-tab-pane>
      <el-tab-pane label="通话次数及时长分析" name="5">
        <VCountAndTime></VCountAndTime>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'
import VDialogTime from './DialogTime'
import VRecentLoaction from './RecentLocation'
import VRecentContact from './RecentContact'
import VCountAndTime from './CountAndTime'

export default {
  name: 'VContactParse',
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
    VDialogTime, VRecentLoaction, VRecentContact, VCountAndTime
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
