<template>
  <div class="v_credit_query_container">
    <el-form :inline="true">
      <el-form-item>
        <el-input size="small" v-model="searchData.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" v-model="searchData.idcardNum" placeholder="身份证号"></el-input>
      </el-form-item>
      <!-- <el-form-item>
        <el-cascader
          expand-trigger="hover"
          @change="doChangeTrade"
          size="small"
          placeholder="搜索行业"
          :options="tradeList"
          filterable
        ></el-cascader>
      </el-form-item> -->
    </el-form>
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="申请雷达">
        <VApply :searchData="searchData"></VApply>
      </el-tab-pane>
      <el-tab-pane label="行为雷达">
        <VBehavior :searchData="searchData"></VBehavior>
      </el-tab-pane>
      <el-tab-pane label="失信">
        <VDiscredit :searchData="searchData"></VDiscredit>
      </el-tab-pane>
      <el-tab-pane label="被执行">
        <VExcuted :searchData="searchData"></VExcuted>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VApply from './Apply'
import VExcuted from './Excuted'
import VDiscredit from './Discredit'
import VBehavior from './Behavior'
import trade from '../../configs/json/trade.json'
export default {
  name: 'VCreditQuery',
  data() {
    return {
      searchData: {
        name: '',
        idcardNum: '',
        tradeType: 'A1'
      },
      tradeList: []
    }
  },
  components: {
    VApply, VExcuted, VDiscredit, VBehavior
  },
  created() {
    trade.forEach((item, index) => {
      var obj = {
        value: '',
        label: '',
        children: []
      }
      obj.value = item.key;
      obj.label = item.value;
      item.list.forEach((subItem, subIndex) => {
        var subObj = {}
        subObj['value'] = subItem.key;
        subObj['label'] = subItem.value;
        obj.children.push(subObj);
      });
      this.tradeList.push(obj);
    });
  },
  methods: {
    doChangeTrade(value) {
      this.searchData.tradeType = value[value.length - 1];
    }
  }
}
</script>

<style lang="scss">
.el-cascader-menu {
  li {
    font-size: 10px;
  }
}
</style>