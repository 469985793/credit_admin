<template>
  <div class="v_credit_query_container">
    <el-form :inline="true">
      <el-form-item>
        <el-input size="small" v-model="searchData.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input size="small" v-model="searchData.idcardNum" placeholder="身份证号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="searchData.tradeType" size="small" clearable placeholder="请选择行业">
          <el-option
            v-for="item in tradeList"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="doQuery" :loading="isLoading">查询</el-button>
      </el-form-item>
    </el-form>
    <el-tabs class="tab_box" tab-position="right">
      <el-tab-pane label="申请雷达">
        <VApply></VApply>
      </el-tab-pane>
      <el-tab-pane label="行为雷达">
        <VBehavior></VBehavior>
      </el-tab-pane>
      <el-tab-pane label="失信">
        <VDiscredit></VDiscredit>
      </el-tab-pane>
      <el-tab-pane label="被执行">
        <VExcuted></VExcuted>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VApply from './Apply'
import VExcuted from './Excuted'
import VDiscredit from './Discredit'
import VBehavior from './Behavior'

export default {
  name: 'VCreditQuery',
  data() {
    return {
      searchData: {
        name: '',
        idcardNum: '',
        tradeType: ''
      },
      tradeList: [
        'IT', '农业'
      ],
      isLoading: false
    }
  },
  components: {
    VApply, VExcuted, VDiscredit, VBehavior
  },
  methods: {
    doQuery() {
      this.isLoading = true;
    }
  }
}
</script>

<style lang="scss">

</style>