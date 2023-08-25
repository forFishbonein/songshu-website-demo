<script setup lang="ts"></script>

<template>
  <div class="selection2">
    <div class="body">
      <div><img src="@/assets/img/product/V12@2x.png" />V12</div>
      <div><img src="@/assets/img/product/V11plus@2x.png" />V11Plus</div>
      <div><img src="@/assets/img/product/Y1@2x.png" />Y1</div>
      <div>
        <router-link to="/product/x1"
          ><dl>
            <dd><img src="@/assets/img/product/X1@2x.png" /></dd>
            <dd>X1</dd>
          </dl>
        </router-link>
      </div>
      <div><img src="@/assets/img/product/N10@2x.png" />N10</div>
      <div><img src="@/assets/img/product/G40@2x.png" />G40</div>
      <div><img src="@/assets/img/product/G10@2x.png" />G10</div>
      <div><img src="@/assets/img/product/peijian@2x.png" />配件</div>
      <div><img src="@/assets/img/product/ruanjian@2x.png" />产品特色</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selection2 {
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
  z-index: 900;
  .body {
    width: 90%;
    height: 120px;
    // border: 1px #e8604c solid;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
    }
    div {
      width: 180px;
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
      dl {
        dd {
          display: flex;
          justify-content: center;
          color: #2f2f2f;
        }
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
