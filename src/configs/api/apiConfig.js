let server = '/api';

export let apiConfig = {
  img: {
    login: {
      bgImg: require('../../assets/img/login/bgImg.png')
    }
  },
  server: {
    login: `${server}/sun/api/comlogin`,
    customerList: `${server}/sun/api/cususer/get`,
    baseInfo: `${server}/sun/api/cususer`,
    waitVerifyList: `${server}/sun/api/order/get/approveFirst`,
    passFirstVerify: `${server}/sun/api/order/approveFirst`,
    verifyList: `${server}/sun/api/order/get/approveFinal`,
    passVerify: `${server}/sun/api/order/approveFinal`,
    refuseList: `${server}/sun/api/order/get/returnApply`,
    waitLoanList: `${server}/sun/api/order/get/grantFirst`,
    passLoan: `${server}/sun/api/order/returnApply`,
    loanList: `${server}/sun/api/order/get/grantFinal`,
    repayList: `${server}/sun/api/order/get/grantFinal`,
    acquittList: `${server}/sun/api/order/get/overFlag`,
    overdueList: `${server}/sun/api/order/get/notOverFlag`
  }
}
