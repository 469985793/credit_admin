<template>
  <div class="v_operator__stability_container">
    <el-form class="form_list_box" label-position="left" inline>
      <el-form-item label="近一个月是否亲情网用户">
        <span>张三</span>
      </el-form-item>
      <el-form-item label="近三个月是否亲情网用户">
        <span>133344232332</span>
      </el-form-item>
      <el-form-item label="近六个月是否亲情网用户">
        <span>3509383823</span>
      </el-form-item>
      <el-form-item label="近一个月是否亲情网用户户主">
        <span>2019-3-5</span>
      </el-form-item>
      <el-form-item label="近三个月是否亲情网用户户主">
        <span>100</span>
      </el-form-item>
      <el-form-item label="近六个月是否亲情网用户户主">
        <span>高端套餐</span>
      </el-form-item>
      <el-form-item label="近一个月连续充值月数">
        <span>正常</span>
      </el-form-item>
      <el-form-item label="近三个月连续充值月数">
        <span>五星</span>
      </el-form-item>
      <el-form-item label="近六个月连续充值月数">
        <span>电信</span>
      </el-form-item>
      <el-form-item label="近一个月常联系地址是否为手机号码归属地">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月常联系地址是否为手机号码归属地">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月常联系地址是否为手机号码归属地">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近一个月通话次数小于使用月数*1次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月通话次数小于使用月数*1次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月通话次数小于使用月数*1次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近一个月通话次数大于使用月数*300次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月通话次数大于使用月数*300次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月通话次数大于使用月数*300次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近一个月连续欠费月数">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月连续欠费月数">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月连续欠费月数">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近一个月在本地是否超过使用月数*1次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近三个月在本地是否超过使用月数*1次">
        <span>上海</span>
      </el-form-item>
      <el-form-item label="近六个月在本地是否超过使用月数*1次">
        <span>上海</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { apiConfig } from '../../configs/api/apiConfig'

export default {
  name: 'VOperatorStability',
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

.v_operator__stability_container {
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
      font-size: $ent-font-size-small;
      width: 220px;
      color: #99a9bf;
    }
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 33.3%;
    }
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
