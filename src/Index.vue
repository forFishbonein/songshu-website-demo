<!--
 * @FilePath: Index.vue
 * @Author: Aron
 * @Date: 2023-05-29 14:10:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-30 10:33:43
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
-->
<script setup lang="ts">
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
</script>

<template>
  <div class="main-container">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  // height: 600px;
  // background-color: rgba(0, 0, 0, 0.1);
  // overflow: hidden;
}
</style>
