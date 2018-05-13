<template>
  <div class="v_operator__activedegree_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近三个月通话活跃天数">
        <span>{{data.call_day_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月通话活跃天数">
        <span>{{data.dial_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近三个月主叫次数">
        <span>{{data.dialed_num_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月主叫次数">
        <span>{{data.dial_duration_3m}}</span>
      </el-form-item>
      <el-form-item label="近三个月被叫次数">
        <span>{{data.dialed_duration_3m}}</span>
      </el-form-item>
      <el-form-item label="近六个月被叫次数">
        <span>{{data.call_day_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月主叫时长">
        <span>{{data.dial_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近六个月主叫时长">
        <span>{{data.dialed_num_6m}}</span>
      </el-form-item>
      <el-form-item label="近三个月被叫时长">
        <span>{{data.dial_duration_6m}}</span>
      </el-form-item>
      <el-form-item label="近六个月被叫时长">
        <span>{{data.dialed_duration_6m}}</span>
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
