<template>
  <div class="v_operator__consumption_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近三个月消费总额">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="近六个月消费总额">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="近三个月充值次数">
        <span>3509383</span>
      </el-form-item>
      <el-form-item label="近六个月充值次数">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="近三个月单次充值最大金额">
        <span>100</span>
      </el-form-item>
      <el-form-item label="近六个月单次充值最大金额">
        <span>高端套餐</span>
      </el-form-item>
      <el-form-item label="账单最新认证时间">
        <span>正常</span>
      </el-form-item>
      <el-form-item label="近一个月流量消费金额">
        <span>五星</span>
      </el-form-item>
      <el-form-item label="近三个月流量消费金额">
        <span>电信</span>
      </el-form-item>
      <el-form-item label="近六个月流量消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月月均流量消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月月均流量消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近一个月短信消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月短信消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月短信消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月短信月均消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月短信月均消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近一个月通话消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月通话消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月通话消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月月均通话消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月月均通话消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近一个月增值业务消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月增值业务消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月增值业务消费金额">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月增值业务月均消费金">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月增值业务月均消费金额">
        <span>上海</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorConsumption',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../../../../assets/css/vars.scss';

.v_operator__consumption_container {
  height: 100%;
  overflow-y: auto;
  .highlight {
    color: $ent-color-danger;
  }

  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      width: 180px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
}
</style>
