<template>
  <div class="v_contact_parse_container">
    <el-tabs v-model="activeTab" class="tab_box" type="card" tab-position="top">
      <el-tab-pane label="近三月联系人号码归属地通话详情分析" name="1">
        <VRecentLoaction :dataList="data.call_location_detail_3m"></VRecentLoaction>
      </el-tab-pane>
      <el-tab-pane label="近三月通话时间段详情分析" name="2">
        <VDialogTime :dataList="data.call_duration_detail_3m"></VDialogTime>
      </el-tab-pane>
      <el-tab-pane label="近六个月联系人通话分析" name="3">
        <VRecentContact :dataList="data.call_contact_detail"></VRecentContact>
      </el-tab-pane>
      <el-tab-pane label="近六月通话时间段详情分析" name="4">
        <VDialogTime :dataList="data.call_duration_detail_6m"></VDialogTime>
      </el-tab-pane>
      <el-tab-pane label="通话次数及时长分析" name="5">
        <VCountAndTime :data="data.call_time_detail"></VCountAndTime>
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
    VDialogTime, VRecentLoaction, VRecentContact, VCountAndTime
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/css/vars.scss';

.v_contact_parse_container {
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
