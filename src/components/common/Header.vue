<!--
 * @FilePath: Header.vue
 * @Author: Aron
 * @Date: 2023-05-30 10:15:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-31 10:14:08
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
-->
<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import Product from "@/components/Product.vue";
let timer1;
let timer2;
let timer3;
const test1 = () => {
  let brandButton = document.getElementsByClassName("brand")[0];
  let selection1 = document.getElementsByClassName("selection1")[0];
  let selection2 = document.getElementsByClassName("selection2")[0];
  brandButton.addEventListener("mouseover", () => {
    selection2.style.zIndex = "900";
    //这里必须先清除一下，否则会由于上一次定时器没结束导致此次的消失
    if (timer1) {
      clearTimeout(timer1);
    }
    if (timer3) {
      clearTimeout(timer3);
    }
    // @ts-ignore
    if (selection2.style.opacity == "1") {
      // @ts-ignore
      selection1.style.transition = "none";
    } else {
      // @ts-ignore
      selection1.style.transition = "all 2s linear";
    }
    // @ts-ignore
    selection1.style.opacity = "1";
    selection1.style.pointerEvents = "auto";
    /* TODO */
    // 获取元素的样式属性
    // @ts-ignore
    var elementStyle = selection2.style;

    // 获取元素的当前过渡属性值
    var transitionValue = elementStyle.transition;

    // 禁用过渡效果
    elementStyle.transition = "none";
    /*  */
    // @ts-ignore
    selection2.style.opacity = "0";
    selection2.style.pointerEvents = "none";
    if (timer2) {
      clearTimeout(timer2);
    }
  });
  brandButton.addEventListener("mouseout", () => {
    timer1 = setTimeout(() => {
      // 获取元素的样式属性
      // @ts-ignore
      var elementStyle = selection1.style;

      // 获取元素的当前过渡属性值
      var transitionValue = elementStyle.transition;

      // 禁用过渡效果
      elementStyle.transition = "none";

      // 执行你的操作（例如修改样式、位置等）
      // @ts-ignore
      selection1.style.opacity = "0";
      selection1.style.pointerEvents = "none";
      // // 恢复原始过渡属性值
      // elementStyle.transition = transitionValue;
    }, 2500);
  });
};
const test2 = () => {
  let productButton = document.getElementsByClassName("product")[0];
  let selection1 = document.getElementsByClassName("selection1")[0];
  let selection2 = document.getElementsByClassName("selection2")[0];
  productButton.addEventListener("mouseover", () => {
    selection2.style.zIndex = "1100";
    //这里必须先清除一下，否则会由于上一次定时器没结束导致此次的消失
    if (timer2) {
      clearTimeout(timer2);
    }
    if (timer3) {
      clearTimeout(timer3);
    }
    // @ts-ignore
    if (selection1.style.opacity == "1") {
      // @ts-ignore
      selection2.style.transition = "none";
    } else {
      // @ts-ignore
      selection2.style.transition = "all 2s linear";
    }
    // @ts-ignore
    selection2.style.opacity = "1";
    selection2.style.pointerEvents = "auto";
    /* TODO */
    // 获取元素的样式属性
    // @ts-ignore
    var elementStyle = selection1.style;

    // 获取元素的当前过渡属性值
    var transitionValue = elementStyle.transition;

    // 禁用过渡效果
    elementStyle.transition = "none";
    /*  */
    // @ts-ignore
    selection1.style.opacity = "0";
    selection1.style.pointerEvents = "none";
    if (timer1) {
      clearTimeout(timer1);
    }
  });
  productButton.addEventListener("mouseout", () => {
    timer2 = setTimeout(() => {
      selection2.style.zIndex = "900";
      // 获取元素的样式属性
      // @ts-ignore
      var elementStyle = selection2.style;

      // 获取元素的当前过渡属性值
      var transitionValue = elementStyle.transition;

      // 禁用过渡效果
      elementStyle.transition = "none";

      // 执行你的操作（例如修改样式、位置等）
      // @ts-ignore
      selection2.style.opacity = "0";
      selection2.style.pointerEvents = "none";
      // // 恢复原始过渡属性值
      // elementStyle.transition = transitionValue;
    }, 2500);
  });
};

const test3 = () => {
  let selection1 = document.getElementsByClassName("selection1")[0];
  let selection2 = document.getElementsByClassName("selection2")[0];
  let other1 = document.getElementsByClassName("other")[0];
  let other2 = document.getElementsByClassName("other")[1];
  let other3 = document.getElementsByClassName("other")[2];

  other1.addEventListener("mouseover", () => {
    selection2.style.zIndex = "900";
    // @ts-ignore
    selection1.style.transition = "none";
    // @ts-ignore
    selection1.style.opacity = "0";
    selection1.style.pointerEvents = "none";
    // @ts-ignore
    selection2.style.transition = "none";
    // @ts-ignore
    selection2.style.opacity = "0";
    selection2.style.pointerEvents = "none";
  });
  other2.addEventListener("mouseover", () => {
    selection2.style.zIndex = "900";
    // @ts-ignore
    selection1.style.transition = "none";
    // @ts-ignore
    selection1.style.opacity = "0";
    selection1.style.pointerEvents = "none";
    // @ts-ignore
    selection2.style.transition = "none";
    // @ts-ignore
    selection2.style.opacity = "0";
    selection2.style.pointerEvents = "none";
  });
  other3.addEventListener("mouseover", () => {
    selection2.style.zIndex = "900";
    // @ts-ignore
    selection1.style.transition = "none";
    // @ts-ignore
    selection1.style.opacity = "0";
    selection1.style.pointerEvents = "none";
    // @ts-ignore
    selection2.style.transition = "none";
    // @ts-ignore
    selection2.style.opacity = "0";
    selection2.style.pointerEvents = "none";
  });
};
const test4 = () => {
  let selection1 = document.getElementsByClassName("selection1")[0];
  let selection2 = document.getElementsByClassName("selection2")[0];
  // @ts-ignore
  if (selection1.style.opacity == "1") {
    // @ts-ignore
    if (timer1) {
      clearTimeout(timer1);
    }
    // @ts-ignore
    if (selection2 && selection2.style.opacity == "1") {
      // @ts-ignore
      selection1.style.transition = "none";
    } else {
      // @ts-ignore
      selection1.style.transition = "all 2s linear";
    }
    // @ts-ignore
    selection1.style.opacity = "1";
    selection1.style.pointerEvents = "auto";
  }
};
const test5 = () => {
  let selection1 = document.getElementsByClassName("selection1")[0];
  let selection2 = document.getElementsByClassName("selection2")[0];
  // @ts-ignore
  if (selection2.style.opacity == "1") {
    // @ts-ignore
    if (timer2) {
      clearTimeout(timer2);
    }
    // @ts-ignore
    if (selection1 && selection1.style.opacity == "1") {
      // @ts-ignore
      selection2.style.transition = "none";
    } else {
      // @ts-ignore
      selection2.style.transition = "all 2s linear";
    }
    // @ts-ignore
    selection2.style.opacity = "1";
    selection2.style.pointerEvents = "auto";
  }
};
const test6 = () => {
  // @ts-ignore
  if (timer1) {
    clearTimeout(timer1);
  }
  // @ts-ignore
  if (timer2) {
    clearTimeout(timer2);
  }
  let selection1 = document.getElementsByClassName("selection1")[0];
  let selection2 = document.getElementsByClassName("selection2")[0];
  timer3 = setTimeout(() => {
    // 获取元素的样式属性
    // @ts-ignore
    var elementStyle = selection1.style;

    // 获取元素的当前过渡属性值
    var transitionValue = elementStyle.transition;

    // 禁用过渡效果
    elementStyle.transition = "none";

    // 执行你的操作（例如修改样式、位置等）
    // @ts-ignore
    selection1.style.opacity = "0";
    selection1.style.pointerEvents = "none";
    // // 恢复原始过渡属性值
    // elementStyle.transition = transitionValue;
    // 获取元素的样式属性
    // @ts-ignore
    var elementStyle2 = selection2.style;

    // 获取元素的当前过渡属性值
    var transitionValue2 = elementStyle.transition;

    // 禁用过渡效果
    elementStyle2.transition = "none";

    // 执行你的操作（例如修改样式、位置等）
    // @ts-ignore
    selection2.style.opacity = "0";
    selection2.style.pointerEvents = "none";
    // // 恢复原始过渡属性值
    // elementStyle.transition = transitionValue;
  }, 2500);
};
onMounted(() => {
  test1();
  test2();
  test3();
  test6();
});
</script>

<template>
  <div class="header-wapper" @mouseleave="test6">
    <div class="header-container">
      <div class="header-left">
        <a class="header-logo" href="http://www.songshucloud.com.cn/">
          <img src="@/assets/img/logo.png" />
        </a>
      </div>
      <ul class="header-right">
        <li class="brand">品牌介绍</li>
        <li class="product">产品介绍</li>
        <li class="other">项目介绍</li>
        <li class="other">联系合作</li>
        <li class="other">松鼠商城</li>
      </ul>
    </div>
    <div class="selection1" @mouseover="test4">
      <div class="body">
        <div><img src="@/assets/img/icon1.png" />关于我们</div>
        <div><img src="@/assets/img/icon2.png" />活动影像</div>
      </div>
    </div>
    <Product @mouseover="test5"></Product>
  </div>
</template>

<style lang="scss" scoped>
.header-wapper {
  width: 100%;
  height: 64px;
  // border: 1px #e8604c solid;
  background-color: #2f2f2f;
  position: fixed;
  top: 0;
  z-index: 10000;
  .header-container {
    width: 80%;
    height: 64px;
    // border: 1px #e8604c solid;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    .header-left {
      width: 20%;
      // border: 1px #e8604c solid;
      display: flex;
      justify-content: start;
      align-items: center;
      .header-logo {
        width: 94px;
        height: 26px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .header-right {
      width: 80%;
      // border: 1px #e8604c solid;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      li {
        font-size: 14px;
        color: #ffffff;
        cursor: pointer;
        height: 3em;
        line-height: 3em;
        &:first-child {
          color: #58abf6;
        }
        &:hover {
          color: #58abf6;
        }
      }
      // li:first-child {
      //   color: #58abf6;
      // }
      // li:hover {
      //   color: #58abf6;
      // }
    }
  }
}
.selection1 {
  width: 100%;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.8);
  // border: 1px #e8604c solid;
  box-shadow: 0 2px 27px 6px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  transition: all 2s linear;
  opacity: 0;
  position: absolute;
  z-index: 1000;
  .body {
    width: 60%;
    height: 120px;
    // border: 1px #e8604c solid;
    display: flex;
    justify-content: start;
    div {
      width: 120px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2f2f2f;
      font-size: 14px;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.3s linear;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
