let server = '//localhost:8080';
export let apiConfig = {
  img: {
    login: {
      bgImg: require('../../assets/img/login/bgImg.png')
    }
  },
  server: {
    formEdit: `${server}/baseinfo/addorupdate`,
    formList: `${server}/baseinfo/list`,
    formDetail: `${server}/baseinfo/info`,
    unread: `${server}/baseinfo/unread`,
    downloadImg: `${server}/baseinfo/downLoad`
  }
}
