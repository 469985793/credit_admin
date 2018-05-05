<template>
  <div class="v_insurace_baseinfo">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="地区编码">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="所属城市名称">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="姓名">
        <span>33</span>
      </el-form-item>
      <el-form-item label="用户信息Id">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="社保帐号">
        <span>100</span>
      </el-form-item>
      <el-form-item label="个人编号">
        <span>100</span>
      </el-form-item>
      <el-form-item label="民族">
        <span>100</span>
      </el-form-item>
      <el-form-item label="证件类型">
        <span>100</span>
      </el-form-item>
      <el-form-item label="证件号码">
        <span>100</span>
      </el-form-item>
      <el-form-item label="家庭住址">
        <span>100</span>
      </el-form-item>
      <el-form-item label="缴存基数">
        <span>100</span>
      </el-form-item>
      <el-form-item label="开户日期">
        <span>100</span>
      </el-form-item>
      <el-form-item label="出生日期">
        <span>100</span>
      </el-form-item>
      <el-form-item label="首次参保时间">
        <span>100</span>
      </el-form-item>
      <el-form-item label="户口性质">
        <span>100</span>
      </el-form-item>
      <el-form-item label="参保单位">
        <span>100</span>
      </el-form-item>
      <el-form-item label="参保单位编号">
        <span>100</span>
      </el-form-item>
      <el-form-item label="最新缴存日期">
        <span>100</span>
      </el-form-item>
      <el-form-item label="缴存状态">
        <span>100</span>
      </el-form-item>
      <el-form-item label="人员状态">
        <span>100</span>
      </el-form-item>
      <el-form-item label="电话">
        <span>100</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>100</span>
      </el-form-item>
      <el-form-item label="单位类型">
        <span>100</span>
      </el-form-item>
      <el-form-item label="参加工作时间">
        <span>100</span>
      </el-form-item>
      <el-form-item label="工伤保险">
        <span>100</span>
      </el-form-item>
      <el-form-item label="失业保险">
        <span>100</span>
      </el-form-item>
      <el-form-item label="医疗保险">
        <span>100</span>
      </el-form-item>
      <el-form-item label="医疗保险余额">
        <span>100</span>
      </el-form-item>
      <el-form-item label="养老保险">
        <span>100</span>
      </el-form-item>
      <el-form-item label="生育保险">
        <span>100</span>
      </el-form-item>
      <el-form-item label="采集时间">
        <span>100</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VInsuranceBaseInfo',
  data() {
    return {
      dataList: [
        {
          dkId: '1',
          userName: '张三',
          telNum: '1222929929',
          currentAddress: '上海市-普通新区-林展路411弄1501',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11101',
          reserveOne: '1',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '2',
          userName: '张三2',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11101',
          reserveOne: '1',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '3',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '4',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        },
        {
          dkId: '5',
          userName: '张三3',
          telNum: '1222929929',
          currentAddress: '上海市',
          monthIncome: '1000元',
          contactQq: '1000元',
          crtTime: '2016-06-6',
          status: '11102',
          reserveOne: '0',
          remark: '这个是个穷小子',
          modiJobno: '罗晓彬'
        }
      ],
      isLoading: false,
      pageNum: 1,
      pageSize: 10,
      totalData: 100
    }
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
  .page_box {
    text-align: right;
    margin: $ent-gap-small;
    font-size: 13px;
    font-weight: lighter;
  }
  @media screen and (max-width: 767px) {
    .edit_btn {
      margin: 2px 0;
    }
    .el-pagination {
      text-align: center;
    }
    .el-pagination__jump,
    .el-pagination__total {
      display: none !important;
    }
    .el-pagination__sizes {
      display: block !important;
      margin-bottom: $ent-gap-x-small;
    }
    .el-pager {
      max-width: calc(100% - 100px);
      overflow: scroll;
    }
  }
}
</style>
