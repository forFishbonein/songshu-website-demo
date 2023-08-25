import { RouteRecordRaw } from "vue-router";
import Index from "@/Index.vue";
import Home from "@/views/Home.vue";
import X1 from "@/views/product/X1.vue";

// import Note from "@/views/readTravel/note/Note.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index", //App中包裹Index
    meta: {
      title: "松鼠ai",
      keepAlive: false,
    },
    component: Index,
    redirect: "/home", //Index中包裹Home等组件
    children: [
      {
        path: "/home",
        name: "Index",
        component: Home,
        meta: { title: "首页", keepAlive: false, showTab: true },
      },
      {
        path: "/product/x1",
        name: "X1",
        component: X1,
        meta: { title: "X1产品", keepAlive: false, showTab: true },
      },
    ],
  },
];
