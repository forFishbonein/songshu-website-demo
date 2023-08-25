<script setup lang="ts">
import ProductInfo from "@/components/ProductInfo.vue";
import Card from "@/components/Card.vue";
</script>

<template>
  <ul class="x1-wapper">
    <li></li>
    <li class="video-con">
      <div>
        <video autoplay loop muted>
          <source
            src="https://img1.classba.cn/songshucloud/product/x1/x1-overall.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <p>是什么让X1如此特别？</p>
        <p>IPS 2K高清手写屏+汉王书写笔</p>
      </div>
    </li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <ProductInfo></ProductInfo>
    <Card></Card>
    <div class="intro-footer">
      <div class="parts">
        <p>配件</p>
        <div class="part-warp">
          <div class="left">
            <div class="top">
              <p>X1专属汉王写字笔</p>
              <span>书写流畅 随心畅想</span>
              <div class="pen">
                <img src="@/assets/img/x1/pen.png" />
              </div>
            </div>
            <div class="bottom">
              <img src="@/assets/img/x1/painting.png" />
            </div>
          </div>
          <div class="right">
            <div class="computer">
              <img src="@/assets/img/x1/ke.png" />
            </div>
            <div class="txt">
              <p>X1定制 可支撑保护套</p>
              <span>可支撑可保护 想你所想</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="other-product">
      <img src="@/assets/img/n10/bottomBanner.png" />
    </div>
  </ul>
</template>

<style lang="scss" scoped>
.intro-footer {
  max-width: 1366px;
  margin: 0 auto;
  background-color: #f8f8f8;
  .parts {
    width: 100%;
    margin: 72px 0 24px 0;
    .part-warp {
      display: flex;
      justify-content: space-between;
    }
    p {
      text-align: center;
      font-size: 40px;
      font-weight: 500;
      margin: 30px 0 24px 0;
    }
    img {
      display: block;
      max-width: 100%;
    }
    .left {
      max-width: 670px;
      .top {
        background: #fff;
        text-align: center;
        padding: 80px 0;
        margin-bottom: 24px;
        .pen {
          width: 380px;
          height: 24px;
          margin: 80px auto 0;
        }
      }
    }
    .right {
      background: #fff;
      padding: 80px;
      text-align: center;
      .computer {
        width: 474px;
        height: 362px;
        margin: 0 auto 80px;
      }
    }
  }
}
.other-product {
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #f8f8f8;
  .small-slogen {
    max-width: 1366px;
    margin: 100px auto 0;
    padding-bottom: 50px;
    cursor: pointer;
    img {
      display: block;
      max-width: 100%;
    }
  }
}
.x1-wapper {
  background-color: #f8f8f8;
  & > li:first-child {
    width: 100%;
    height: 100vh;
    background: url("@/assets/img/x1/banner.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  .video-con {
    width: 100%;
    // height: 100%;
    margin: 0 auto;
    overflow: hidden;
    & > div:first-child {
      width: 100%;
      height: 100%;
    }
    & > div:last-child {
      width: 100%;
      height: 538px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > p:first-child {
        font-size: 72px;
      }
      & > p:last-child {
        font-size: 40px;
      }
    }
  }
  & > li:nth-child(3) {
    width: 100%;
    height: 100vh;
    background: #000 url("@/assets/img/x1/bg-1.png") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  & > li:nth-child(4) {
    width: 100%;
    height: 100vh;
    background: #000 url("@/assets/img/x1/bg-2.png") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  & > li:nth-child(5) {
    width: 100%;
    height: 100vh;
    background: #000 url("@/assets/img/x1/bg-3.png") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  & > li:nth-child(6) {
    width: 100%;
    height: 100vh;
    background: #000 url("@/assets/img/x1/bg-4.png") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  & > li:nth-child(7) {
    width: 100%;
    height: 100vh;
    background: #000 url("@/assets/img/x1/bg-5.png") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
}
</style>
