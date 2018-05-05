<template>
  <div class="v_operator__risk_container">
    <el-tag class="title_box">风险信息</el-tag>
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="入网时长">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="号码沉默度(近三个月)">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="欠费风险度(近三个月)">
        <span>3509382899328283823</span>
      </el-form-item>
      <el-form-item label="亲情网风险度">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="号码沉默度(近六个月)">
        <span>100</span>
      </el-form-item>
      <el-form-item label="欠费风险度(近六个月)">
        <span>高端套餐</span>
      </el-form-item>
      <el-form-item label="申请人姓名+身份证号码是否出现在法院黑名单">
        <span>正常</span>
      </el-form-item>
      <el-form-item label="申请人姓名+身份证号码是否出现在金融机构黑名单">
        <span>五星</span>
      </el-form-item>
      <el-form-item label="申请人姓名+手机号码是否出现在金融机构黑名单">
        <span>电信</span>
      </el-form-item>
    </el-form>
    <el-tag class="title_box">风险检测</el-tag>
    <el-table
      :data="dataList"
      stripe
      style="width: 100%"
      height="100%">
      <el-table-column
        prop="id"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="风险类别">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="近三个月通话次数">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="近六个月通话次数">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="近三个月通话时间">
      </el-table-column>
      <el-table-column
        prop="telNum"
        label="近六个月通话时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorRisk',
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
@import '../../../../../assets/css/vars.scss';

.v_operator__risk_container {
  height: 100%;
  overflow-y: scroll;
  .highlight {
    color: $ent-color-danger;
  }

  .form_list_box {
    font-size: 0;
    margin: 0 $ent-gap-base;
    width: calc(100% - 24px);
    label {
      width: 330px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
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
