// let server = '//localhost:8080';
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
    waitVerifyList: `${server}/sun/api/order/get/approveFirst`
  }
}
