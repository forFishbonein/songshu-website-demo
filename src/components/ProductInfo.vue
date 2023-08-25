<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
const imgSrc = ref("");
imgSrc.value = "product-1.png";
const changeImg = (src) => {
  imgSrc.value = src;
};
</script>

<template>
  <li class="wapper">
    <div class="left">
      <!-- 这里动态修改，没办法解析@，所以用/src/开头 -->
      <div class="big-img"><img :src="`/src/assets/img/x1/${imgSrc}`" /></div>
      <div class="items">
        <div class="item" @mouseover="changeImg('product-1.png')">
          <img src="@/assets/img/x1/product-1.png" />
        </div>
        <div class="item" @mouseover="changeImg('product-2.png')">
          <img src="@/assets/img/x1/product-2.png" />
        </div>
        <div class="item" @mouseover="changeImg('product-3.png')">
          <img src="@/assets/img/x1/product-3.png" />
        </div>
        <div class="item" @mouseover="changeImg('product-4.png')">
          <img src="@/assets/img/x1/product-4.png" />
        </div>
        <div class="item" @mouseover="changeImg('product-5.png')">
          <img src="@/assets/img/x1/product-5.png" />
        </div>
      </div>
    </div>
    <div class="right">
      <p>产品信息</p>
      <ul>
        <li>
          <div><img src="@/assets/img/icon/memory.png" /></div>
          <div>存储内容</div>
          <div>128GB</div>
        </li>
        <li>
          <div><img src="@/assets/img/icon/screen.png" /></div>
          <div>屏幕尺寸</div>
          <div>10.4英寸</div>
        </li>
        <li>
          <div><img src="@/assets/img/icon/camera.png" /></div>
          <div>前后置摄像头</div>
          <div>500万*1颗/1300万</div>
        </li>
        <li>
          <div><img src="@/assets/img/icon/material.png" /></div>
          <div>屏幕护眼材质</div>
          <div>高清手写屏</div>
        </li>
        <li>
          <div><img src="@/assets/img/icon/wifi.png" /></div>
          <div>网络适配</div>
          <div>Wi-Fi</div>
        </li>
      </ul>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.wapper {
  max-width: 1366px;
  // height: 526px;
  margin: 0 auto;
  height: 526px;
  display: flex;
  justify-content: space-around;
  .left {
    width: 600px;
    // border: 1px #e8604c solid;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    .big-img {
      width: 400px;
      height: 400px;
      border: 0;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .items {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 40px;
      .item {
        width: 72px;
        height: 72px;
        border: 1px solid #ccc;
        cursor: pointer;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .right {
  }
}
.right {
  width: 510px;
  //   border: 1px #e8604c solid;
  padding-top: 30px;
  p {
    height: 50px;
    font-size: 28px;
    line-height: 50px;
    /* 禁止选中 */
    -webkit-user-select: none; /* Safari/Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Standard syntax */
  }
  ul {
    list-style: none;
    margin-top: 10px;
    -webkit-user-select: none; /* Safari/Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Standard syntax */
    li {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #e4e4e4;
      div {
        width: 100px;
        margin-right: 60px;
      }
      & > div:first-child {
        margin-right: 0;
      }
    }
    > li:last-child {
      border: 0;
    }
  }
}
</style>
