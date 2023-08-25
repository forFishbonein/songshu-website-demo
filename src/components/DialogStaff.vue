<script setup lang="ts">
const props = withDefaults(
  //使用withDefaults
  defineProps<{
    showDialogPics: boolean; //是否展示播放器轮播容器
    curDataIndex: number; //当前展示的容器
    curLen: number; //总视频个数
  }>(),
  {
    showDialogPics: false, //这里设置了
    curDataIndex: 1,
    curLen: 1,
  }
);
const emit = defineEmits(["closeDialog", "prev", "next"]);
const closeDialog = () => {
  emit("closeDialog");
};
const prev = () => {
  emit("prev");
};
const next = () => {
  emit("next");
};
</script>

<template>
  <div class="dialog-container" v-if="showDialogPics">
    <!-- .self阻止子元素事件触发父元素事件（写在父元素上面） -->
    <div class="cont" @click.self="closeDialog">
      <!-- .stop阻止子元素事件触发父元素事件（写在子元素上面，阻止事件冒泡） -->
      <div
        class="dg dg-left"
        :class="{ disabled: curDataIndex == 1 }"
        @click.stop="prev"
      >
        <img src="@/assets/img/videos/prev.png" alt="" />
      </div>
      <div class="dg dg-center">
        <div class="inner">
          <!-- 外面传入的内容会放到这个，用slot插槽：是因为不同产品视频链接、个数等可能不同，需要外面传入才可以统一 -->
          <slot></slot>
        </div>
        <div class="close" @click="closeDialog">
          <img src="@/assets/img/videos/close.png" alt="" />
        </div>
      </div>
      <div
        class="dg dg-right"
        :class="{ disabled: curDataIndex >= curLen }"
        @click.stop="next"
      >
        <img src="@/assets/img/videos/next.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  background: rgba(23, 23, 23, 0.6);
  .cont {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 70px 0;
    box-sizing: border-box;
    img {
      display: block;
      width: 100%;
    }
    .dg-left {
      width: 11vw;
      margin-right: 3vw;
      img {
        height: 4vw;
        width: 3vw;
        margin: 0 auto;
        cursor: pointer;
      }
      &.disabled {
        opacity: 0.3;
        img {
          cursor: default;
        }
      }
    }
    .dg-center {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 100%;
      // margin: 0 50px;
      overflow: hidden;
      .inner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
          display: block;
          width: 100%;
          outline: 0;
        }
        video {
          width: 100%;
        }
      }
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        opacity: 0.8;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
    .dg-right {
      width: 11vw;
      margin-left: 3vw;
      img {
        height: 4vw;
        width: 3vw;
        margin: 0 auto;
        cursor: pointer;
      }
      &.disabled {
        opacity: 0.3;
        img {
          cursor: default;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.dialog-container {
  .cont {
    .dg-center {
      .inner {
        img {
          display: block;
          width: 100%;
          min-width: 940px;
        }
        video {
          width: 100%;
          min-width: 940px;
        }
      }
    }
  }
}
</style>
