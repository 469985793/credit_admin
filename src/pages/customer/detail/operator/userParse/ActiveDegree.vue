<template>
  <div class="v_operator__activedegree_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近三个月通话活跃天数">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="近六个月通话活跃天数">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="近三个月主叫次数">
        <span>3509383823</span>
      </el-form-item>
      <el-form-item label="近六个月主叫次数">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="近三个月被叫次数">
        <span>100</span>
      </el-form-item>
      <el-form-item label="近六个月被叫次数">
        <span>高端套餐</span>
      </el-form-item>
      <el-form-item label="近三个月主叫时长">
        <span>正常</span>
      </el-form-item>
      <el-form-item label="近六个月主叫时长">
        <span>五星</span>
      </el-form-item>
      <el-form-item label="近三个月被叫时长">
        <span>电信</span>
      </el-form-item>
      <el-form-item label="近六个月被叫时长">
        <span>上海</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorActiveDegree',
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

.v_operator__activedegree_container {
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
      width: 150px;
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
