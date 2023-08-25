<!--
 * @FilePath: Home.vue
 * @Author: Aron
 * @Date: 2023-05-29 14:10:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-31 15:43:37
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
-->
<script lang="ts">
import { onMounted } from "@vue/runtime-core";
//vue3中swiper的使用：https://blog.csdn.net/work_fei/article/details/125542537?spm=1001.2014.3001.5506
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper";
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  EffectCoverflow,
]);
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
};
</script>

<template>
  <div class="swiper-con">
    <swiper
      class="swiper-container"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{ clickable: true }"
      loop
    >
      <swiper-slide><img src="@/assets/img/1.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/2.jpg" /></swiper-slide>
      <swiper-slide><img src="@/assets/img/3.jpg" /></swiper-slide>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>
  </div>
  <div class="pics-wapper">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <ul class="other-content">
    <li><img src="@/assets/img/fmzl.png" /></li>
    <li></li>
    <li></li>
    <li>
      <img class="mcm-1" src="@/assets/img/mcm.png" alt="" />
      <img class="mcm-2" src="@/assets/img/mcm_1.png" alt="" />
    </li>
    <li>
      <div class="swiper-small">
        <p>7场人机对比实验 40+媒体报道</p>
        <swiper
          class="swiper-container2"
          :autoplay="true"
          :effect="'fade'"
          :spaceBetween="30"
          loop
        >
          <swiper-slide
            ><img src="@/assets/img/small-banner-1.png"
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/img/small-banner-2.png"
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/img/small-banner-3.png"
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/img/small-banner-4.png"
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/img/small-banner-5.png"
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/img/small-banner-6.png"
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/img/small-banner-7.png"
          /></swiper-slide>
          <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        </swiper>
      </div>
    </li>
  </ul>
  <div class="rotate-swiper">
    <div class="wapper">
      <swiper
        class="swiper-container3"
        :autoplay="true"
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :coverflowEffect="{
          // rotate: 50,
          // stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :spaceBetween="0"
        :slidesPerView="4"
        :with="320"
        slideToClickedSlide
        loop
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/ddj.png" />
          <div class="dialog">
            <span class="title">Ai打地基</span
            ><span class="desp"
              >跨年级跨学段的追根溯源学习 <br />解决学习薄弱备份</span
            >
          </div> </swiper-slide
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/split.png" />
          <div class="dialog">
            <span class="title">Ai知识点细致拆分</span
            ><span class="desp">超高清精准定位<br />让知识更容易学会</span>
          </div> </swiper-slide
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/diagnose.png" />
          <div class="dialog">
            <span class="title">Ai智能诊断</span
            ><span class="desp"
              >知识漏洞诊断更精准<br />学习水平情况更全面</span
            >
          </div> </swiper-slide
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/workflow.png" />
          <div class="dialog">
            <span class="title">Ai流程式学习</span
            ><span class="desp">模仿名师教学思路<br />定制学习内容任务</span>
          </div> </swiper-slide
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/analysis.png" />
          <div class="dialog">
            <span class="title">Ai错因分析</span
            ><span class="desp"
              >大数据探寻错误原因<br />避免重复错误再出现</span
            >
          </div> </swiper-slide
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/mcm.png" />
          <div class="dialog">
            <span class="title">Ai MCM训练</span
            ><span class="desp"
              >智能诊断思想能力方法<br />可定义传授的靶向训</span
            >
          </div> </swiper-slide
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/interact.png" />
          <div class="dialog">
            <span class="title">L5级人机互动</span
            ><span class="desp"
              >L5级全自动授课Ai虚拟老师<br />沉浸式人机互动学习感受</span
            >
          </div> </swiper-slide
        ><swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/feedback.png" />
          <div class="dialog">
            <span class="title">Ai报告反馈</span
            ><span class="desp">知识学习结果导向<br />学习报告一目了然</span>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/errorbook.png" />
          <div class="dialog">
            <span class="title">Ai错题本</span
            ><span class="desp"
              >创建专属错印知识图谱<br />结合日常学习精准推荐</span
            >
          </div>
        </swiper-slide>
        <swiper-slide class="swiper__item">
          <img src="@/assets/img/ai/review.png" />
          <div class="dialog">
            <span class="title">Ai遗忘复习</span
            ><span class="desp"
              >遗忘曲线+知识点特性+学习的数据<br />结合日常学习精准推荐<br />定期复习遗忘的知识点<br />及时巩固</span
            >
          </div>
        </swiper-slide></swiper
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-con {
  .swiper-slide {
    width: 100vw;
    height: 100vh;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.pics-wapper {
  width: 100%;
  height: auto;
  & > ul {
    li {
      width: 100%; //100vw会溢出！
      height: 100vh;
      display: block;
      &:first-child {
        background: url("@/assets/img/history_1.png") no-repeat center;
        background-size: contain;
        background-attachment: fixed;
      }
      &:nth-child(2) {
        background: url("@/assets/img/qsh.jpg") no-repeat center;
        background-size: cover;
        background-attachment: fixed;
      }
      &:nth-child(3) {
        background: url("@/assets/img/history_2.png") no-repeat center;
        background-size: cover;
        background-attachment: fixed;
      }
      &:nth-child(4) {
        background: url("@/assets/img/fbh.jpg") no-repeat center;
        background-size: cover;
        background-attachment: fixed;
      }
      &:nth-child(5) {
        height: 179px; //这里专门设置一下这个高度，其他的都是100vh的！
        background: url("@/assets/img/history_3.png") no-repeat center;
        background-size: auto;
        background-attachment: fixed;
      }
      &:nth-child(6) {
        background: url("@/assets/img/summer.jpg") no-repeat center;
        background-size: cover;
        background-attachment: fixed;
      }
    }
  }
}
.other-content {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > li {
    display: block;
    &:first-child {
      img {
        display: block;
        max-width: 1376px; //设置为对应图片的真实宽度，不要超过这个，否则会变形！
        height: 100%;
      }
    }
    &:nth-child(2) {
      width: 100%;
      height: 812px;
      background: url("@/assets/img/hyhx.png") no-repeat center;
      background-size: contain;
    }
    &:nth-child(3) {
      width: 100%;
      height: 812px;
      background: url("@/assets/img/map.jpg") no-repeat center;
      background-size: cover;
    }
    &:nth-child(4) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      .mcm-1 {
        max-width: 878px;
        padding: 104px 0 90px 0;
      }
      .mcm-2 {
        max-width: 1374px;
      }
    }
    &:nth-child(5) {
      width: 100%;
      height: 812px; //这里必须要设置出一个确定的高度，否则里面的浮动元素bfc会导致父元素没高度
      background: url("@/assets/img/rjdz.jpg") no-repeat center;
      background-size: cover;
      position: relative;
      .swiper-small {
        position: absolute;
        right: 60px;
        bottom: 80px;
        width: 758px;
        height: 500px;
        p {
          height: 45px;
          color: #ffffff;
          text-align: right;
          font-size: 20px;
          line-height: 45px;
        }
        .swiper-container {
          // width: 758px;
          // height: 455px;

          .swiper-slide {
            width: 758px;
            height: 455px;
            img {
              display: block;
              width: 100%;
              height: 100%;
              border: 4px solid #004cb5;
              box-sizing: border-box; //宽度里面包括了内部宽度+padding+border
            }
          }
        }
      }
    }
  }
}
.rotate-swiper {
  // width: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  .wapper {
    max-width: 1280px;
    height: 572px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-container3 {
      padding: 20px 0;
      .swiper__item {
        width: 320px;
        height: 420px;
        // border: 1px #e8604c solid;
        // display: inline-block;
        background-color: #ffffff;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.3) !important;
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        img {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .dialog {
          width: 100%;
          background-color: rgba(0, 0, 0, 0.35);
          height: 100px;
          position: absolute;
          bottom: 0; //这里必须设置一下确定的位置，否则下面鼠标放上去升不上来！
          left: 0;
          border-bottom-left-radius: 30px;
          border-bottom-right-radius: 30px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          .title {
            display: inline-block;
            margin-top: 30px;
            font-size: 30px;
            color: #ffffff;
          }
          .desp {
            display: inline-block;
            color: #ffffff;
            margin-top: 80px;
            text-align: center;
          }
          &:hover {
            height: 100%;
            transition: height 0.2s linear;
            border-radius: 30px;
            backdrop-filter: blur(3px);
            .title {
              margin-top: 230px;
            }
            .desp {
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
