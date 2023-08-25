<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import DialogStaff from "@/components/DialogStaff.vue";

const curDataIndex = ref(1);
const showDialogPics = ref(false);
const curLen = ref(3);
const muted1 = ref(false);
const muted2 = ref(false);
const muted3 = ref(false);
const cardAction = (type) => {
  if (type == "more") {
    document.documentElement.scrollTop = 0;
    // this.$router.push({
    //   path: "/software",
    // });
  } else {
    curDataIndex.value = type;
    showDialogPics.value = true;
  }
};
// const initCardsSwiper = () => {
//   let swiper = new Swiper(".card-swiper", {
//     autoplay: false,
//     speed: 1000,
//     spaceBetween: 30,
//     slidesPerView: 3,
//     slideToClickedSlide: true,
//     // effect: 'slideIn',
//     // loop:false,//必须
//   });
//   swiper.el.onmouseover = function () {
//     //鼠标放上暂停轮播
//     swiper.autoplay.stop();
//   };
//   swiper.el.onmouseleave = function () {
//     swiper.autoplay.start();
//   };
// };
const prev = () => {
  if (curDataIndex.value == 1) return;
  if (curDataIndex.value > 1) {
    curDataIndex.value--;
  } else {
    curDataIndex.value = 1;
  }
};
const next = () => {
  if (curDataIndex.value == curLen.value) {
    curDataIndex.value = curLen.value;
  } else {
    curDataIndex.value++;
  }
};
const closeDialog = () => {
  showDialogPics.value = false;
};
const play = ref(true);
// let mySwiper;
/* 鼠标放上去停止的效果没有 */
let mySwiper;
const onSwiper = (swiper) => {
  mySwiper = swiper;
};
const stopSwiper = () => {
  console.log(mySwiper);
  mySwiper.autoplay.stop();
};
const startSwiper = () => {
  // play.value = true;
  console.log(mySwiper);
  mySwiper.autoplay.start();
};
const video1 = ref("https://img1.classba.cn/songshucloud/product/x1/x1-01.mp4");
const video2 = ref("https://img1.classba.cn/songshucloud/product/x1/x1-02.mp4");
const video3 = ref("https://img1.classba.cn/songshucloud/product/x1/x1-03.mp4");

nextTick(() => {
  //不同的产品有不同的播放要求，判断是否包含相关字符进行相关的设置
  if (video1.value.indexOf("y1-01") != -1) {
    muted1.value = true;
  }
  if (video2.value.indexOf("v11p-02") != -1) {
    muted2.value = true;
  }
  if (
    video3.value.indexOf("v12-03") != -1 ||
    video3.value.indexOf("v11p-03") != -1 ||
    video3.value.indexOf("y1-03") != -1 ||
    video3.value.indexOf("x1-03") != -1
  ) {
    muted3.value = true;
  }
  /* 初始化的效果没有：这里完全就是为了初始化的罢了 */
  // this.initCardsSwiper();
  // @ts-ignore
  // mySwiper.updateSwiper();
});
</script>

<template>
  <li class="swiper-li">
    <p>搭建松鼠Ai智适应学习系统</p>
    <div @mouseover="stopSwiper" @mouseleave="startSwiper">
      <swiper
        :spaceBetween="30"
        :slidesPerView="3"
        :autoplay="true"
        @swiper="onSwiper"
      >
        <swiper-slide
          ><img src="@/assets/img/x1/card-1.png" @click="cardAction(1)"
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/img/x1/card-2.png" @click="cardAction(2)"
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/img/x1/card-3.png" @click="cardAction(3)"
        /></swiper-slide>
        <swiper-slide
          ><img src="@/assets/img/x1/card-4.png" @click="cardAction('more')"
        /></swiper-slide>
      </swiper>
      <!-- 手写的一个轮播视频播放器 -->
      <dialogStaff
        :showDialogPics="showDialogPics"
        :curDataIndex="curDataIndex"
        :curLen="curLen"
        @closeDialog="closeDialog"
        @prev="prev"
        @next="next"
      >
        <video
          v-if="curDataIndex == 1"
          id="video1"
          autoplay
          loop
          :muted="muted1"
          :controls="true"
        >
          <source :src="video1" type="video/mp4" />
        </video>
        <video
          v-if="curDataIndex == 2"
          id="video2"
          autoplay
          loop
          :muted="muted2"
          :controls="true"
        >
          <source :src="video2" type="video/mp4" />
        </video>
        <video
          v-if="curDataIndex == 3"
          id="video3"
          autoplay
          loop
          :muted="muted3"
          :controls="true"
        >
          <source :src="video3" type="video/mp4" />
        </video>
      </dialogStaff>
    </div>
  </li>
  <DialogStaff></DialogStaff>
</template>

<style lang="scss" scoped>
.swiper-li {
  width: 100%;
  // height: 100vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 40px;
    text-align: center;
  }
  & > div {
    width: 1366px;
    .swiper-slide {
      width: 435px;
      height: 616px;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
