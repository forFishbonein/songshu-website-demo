<!--
 * @FilePath: Footer.vue
 * @Author: Aron
 * @Date: 2023-05-30 17:28:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-30 17:47:48
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
-->
<script lang="ts">
export default {
  name: "footer",
  data() {
    return {
      showFooterDelay: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showFooterDelay = true;
    }, 1000);
  },
  components: {},
  methods: {},
};
</script>

<template>
  <div class="footer-wrap">
    <div class="cont" v-if="showFooterDelay">
      <div class="left">
        <img src="@/assets/img/qrcode.png" />
        <dl>
          <dd>上海松鼠云上人工智能技术有限公司</dd>
          <dd>400-048-0618</dd>
          <dd>
            <a href="mailto: zhaoshang@songshuai.com"
              >zhaoshang@songshuai.com</a
            >
          </dd>
        </dl>
      </div>
      <div class="right">
        <!-- 用a包裹dl+dd的结构，可以较为方便地实现列表结构，等价于ul+li，ul和li都是block，看起来整体结构更好，并且相当于可以自动换行 -->
        <a
          href="https://beian.miit.gov.cn/#/Integrated/recordQuery"
          target="_blank"
        >
          <dl>
            <dd>Copyright 上海松鼠云上人工智能</dd>
            <dd>沪ICP备2022012703号-1</dd>
          </dl>
        </a>
        <dl>
          <dd class="website">松鼠Ai常用网址</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 260px;
  background: #000;
  margin-top: 38px;
  .cont {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    justify-content: space-between;
    dl {
      dd {
        margin-bottom: 10px;
      }
    }
    .left {
      display: flex;
      align-items: center;
      dl {
        margin-left: 42px;
      }
    }
    .right {
      text-align: right;
      .website {
        cursor: pointer;
        margin-right: -5px;
        &::after {
          display: inline-block;
          content: "";
          //制作三角形图标
          width: 0px;
          height: 0px;
          border: 6px solid;
          border-left-color: #fff; //只有左边有颜色，剩下的都是透明的
          border-right-color: transparent;
          border-top-color: transparent;
          border-bottom-color: transparent;
          margin-left: 5px;
        }
      }
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
