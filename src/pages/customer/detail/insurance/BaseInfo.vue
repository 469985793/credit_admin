<template>
  <div class="v_insurace_baseinfo">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="地区编码">
        <span>{{data.area_code}}</span>
      </el-form-item>
      <el-form-item label="所属城市名称">
        <span>{{data.city}}</span>
      </el-form-item>
      <el-form-item label="姓名">
        <span>{{data.base_info.real_name}}</span>
      </el-form-item>
      <el-form-item label="用户信息Id">
        <span>{{data.base_info.user_info_id}}</span>
      </el-form-item>
      <el-form-item label="社保帐号">
        <span>{{data.base_info.social_security_no}}</span>
      </el-form-item>
      <el-form-item label="个人编号">
        <span>{{data.base_info.personal_no}}</span>
      </el-form-item>
      <el-form-item label="民族">
        <span>{{data.base_info.nation}}</span>
      </el-form-item>
      <el-form-item label="证件类型">
        <span>{{data.base_info.id_type}}</span>
      </el-form-item>
      <el-form-item label="证件号码">
        <span>{{data.base_info.id_card}}</span>
      </el-form-item>
      <el-form-item label="家庭住址">
        <span>{{data.base_info.address}}</span>
      </el-form-item>
      <el-form-item label="缴存基数">
        <span>{{data.base_info.base_number}}</span>
      </el-form-item>
      <el-form-item label="开户日期">
        <span>{{data.base_info.begin_date}}</span>
      </el-form-item>
      <el-form-item label="出生日期">
        <span>{{data.base_info.birth_day}}</span>
      </el-form-item>
      <el-form-item label="首次参保时间">
        <span>{{data.base_info.first_insured_date}}</span>
      </el-form-item>
      <el-form-item label="户口性质">
        <span>{{data.base_info.household_registration}}</span>
      </el-form-item>
      <el-form-item label="参保单位">
        <span>{{data.base_info.insured_unit}}</span>
      </el-form-item>
      <el-form-item label="参保单位编号">
        <span>{{data.base_info.insured_unit_code}}</span>
      </el-form-item>
      <el-form-item label="最新缴存日期">
        <span>{{data.base_info.last_pay_date}}</span>
      </el-form-item>
      <el-form-item label="缴存状态">
        <span>{{data.base_info.pay_status}}</span>
      </el-form-item>
      <el-form-item label="人员状态">
        <span>{{data.base_info.personnel_status}}</span>
      </el-form-item>
      <el-form-item label="电话">
        <span>{{data.base_info.phone}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{data.base_info.sex}}</span>
      </el-form-item>
      <el-form-item label="单位类型">
        <span>{{data.base_info.unit_type}}</span>
      </el-form-item>
      <el-form-item label="参加工作时间">
        <span>{{data.base_info.work_time}}</span>
      </el-form-item>
      <el-form-item label="工伤保险">
        <span>{{data.base_info.industrial_insurance}}</span>
      </el-form-item>
      <el-form-item label="失业保险">
        <span>{{data.base_info.unemployment_insurance}}</span>
      </el-form-item>
      <el-form-item label="医疗保险">
        <span>{{data.base_info.medical_insurance}}</span>
      </el-form-item>
      <el-form-item label="医疗保险余额">
        <span>{{data.base_info.medical_insurance_balance}}</span>
      </el-form-item>
      <el-form-item label="养老保险">
        <span>{{data.base_info.endowment_insurance}}</span>
      </el-form-item>
      <el-form-item label="生育保险">
        <span>{{data.base_info.maternity_insurance}}</span>
      </el-form-item>
      <el-form-item label="采集时间">
        <span>{{data.base_info.fetch_time}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VInsuranceBaseInfo',
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
@import '../../../../assets/css/vars.scss';
.v_insurace_baseinfo {
  .highlight {
    color: $ent-color-danger;
  }
  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      font-size: $ent-font-size-small;
      width: 150px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
  }
  .title_box {
    margin: $ent-gap-xx-small $ent-gap-small;
  }
}
</style>
