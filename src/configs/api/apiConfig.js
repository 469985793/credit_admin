// let server = '/api';
export let apiConfig = {
  img: {
    login: {
      bgImg: require('../../assets/img/login/bgImg.png')
    }
  },
  server: {
    login: `${server}/sun/api/comlogin`,
    customerList: `${server}/sun/api/cususer/get`,
    staffList: `${server}/sun/api/comuser/get`,
    addStaff: `${server}/sun/api/comuser`,
    editStaff: `${server}/sun/api/comuser/update`,
    staffDetail: `${server}/sun/api/comuser`,
    baseInfo: `${server}/sun/api/cususer`,
    otherInfo: `${server}/sun/api/cususeradd/byCustomer`,
    waitVerifyList: `${server}/sun/api/order/get/approveFirst`,
    passFirstVerify: `${server}/sun/api/order/approveFirst`,
    verifyList: `${server}/sun/api/order/get/approveFinal`,
    passVerify: `${server}/sun/api/order/approveFinal`,
    refuseList: `${server}/sun/api/order/get/returnApply`,
    waitLoanList: `${server}/sun/api/order/get/grantFirst`,
    passLoan: `${server}/sun/api/order/grantFirst`,
    loanList: `${server}/sun/api/order/get/grantFinal`,
    repayList: `${server}/sun/api/order/get/planOverFlag`,
    doRepay: `${server}/sun/api/pay`,
    acquittList: `${server}/sun/api/order/get/overFlag`,
    overdueList: `${server}/sun/api/order/get/notOverFlag`,
    doChase: `${server}/sun/api/pay/urgePay`,
    payDetail: `${server}/sun/api/pay/getByOrder`,
    operatorReport: `${server}/sun/api/xinyan/CarrierData/carrierReportUrl`,
    operatorBill: `${server}/sun/api/xinyan/CarrierData/mobileMonthUrl`,
    alipay: `${server}/sun/api/xinyan/alipay/data`,
    aliMarket: `${server}/sun/api/xinyan/taobao/userData`,
    addressList: `${server}/sun/api/addressBook/getBookList`,
    excuteList: `${server}/sun/api/xinyan/ZhiXingData/zhixinginfoUrl`,
    applyList: `${server}/sun/api/xinyan/CreditRadar/applyRadar`,
    behaviorList: `${server}/sun/api/xinyan/CreditRadar/applyRadar`,
    discreditList: `${server}/sun/api/xinyan/CreditRadar/applyRadar`,
    resetPwd: `${server}/sun/api/comuser/updatePassword`,
    checkStaff: `${server}/sun/api/comuser/empIdCount`,
    creditQuery: {
      apply: `${server}/sun/api/xinyan/CreditRadar/applyRadar/user`,
      behavior: `${server}/sun/api/xinyan/CreditRadar/behaviorRadar/user`,
      excute: {
        order: `${server}/sun/api/xinyan/ZhiXing/taskCreateUrl/user`,
        orderStatus: `${server}/sun/api/xinyan/ZhiXing/taskStatusUrl`,
        info: `${server}/sun/api/xinyan/ZhiXingData/zhixinginfoUrl/user`
      },
      discredit: `${server}/sun/api/xinyan/CourtDishonestyExecuted/courtDishonestyExecuted/user`
    },
    dashboardList: `${server}/sun/api/dbView`,
    applyRecordList: `${server}/sun/api/order/selectByCusId`
  }
}
