<template>
  <div class="v_preview_container">
    <div class="img_box" v-for="(item, index) in previewList" :key="index">
      <img :src="item" />
    </div>
    <span class="add_box">
      <input class="select_img" type="file" accept="image/*" @change="fileChange">
    </span>
  </div>
</template>

<script>
import { apiConfig } from '../../../configs/api/apiConfig'

export default {
  name: 'VPreviewImg',
  data() {
    return {
      deleteIcon: apiConfig.img.deleteIcon,
      previewList: [],
      fileRawList: []
    }
  },
  props: {
    imgId: String
  },
  methods: {
    fileChange(ev) {
      let fileList = ev.target.files || ev.dataTransfer.files;
      if (fileList.length === 0) {
        return;
      } else {
        this.previewList = [];
        this.fileRawList = [];
      }

      for (let i = 0; i < fileList.length; i++) {
        // 需要保存raw数据作为文件上传, imgList是Base64数据用来预览
        this.fileRawList.push(fileList[i]);
        this.createImage(fileList[i]);
      }
    },
    createImage(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (ev) => {
        this.previewList.push(ev.target.result);
        // 发射raw数据给父组件,用于文件上传
        this.$emit('fileUpload', this.fileRawList, this.imgId);
      };
    }
  }
}
</script>

<style lang="scss">
@import '../../../assets/css/vars.scss';

.v_preview_container {
  .img_box {
    text-align: left;
    margin: $ent-gap-x-small;
    max-height: 200px;
    overflow: hidden;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  .add_box {
    position: relative;
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-left: 5px;
    .select_img {
      width: 1px;
      height: 1px;
      outline: none;
    }
    .select_img:before {
      content: '';
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background: url('../../../assets/img/addIcon.png');
      background-size: cover;
    }
  }
}
</style>



