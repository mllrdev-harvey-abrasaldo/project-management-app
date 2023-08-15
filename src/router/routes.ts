import type  {RouteRecordRaw}  from 'vue-router'
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: RouteName.HOME,
    component: () => import("../views/home-view.vue"),
  },
  {
    path: "/worker",
    name: RouteName.WORKER,
    component: () => import("../views/worker-view.vue"),
  },
  {
    path: "/editproject/:id",
    name: RouteName.EDITPROJECT,
    component: () => import("../views/edit-project-view.vue"),
  },
  {
    path: "/addproject",
    name: RouteName.ADDPROJECT,
    component: () => import("../views/new-project-view.vue"),
  },
  {
    path: "/addworker",
    name: RouteName.ADDWORKER,
    component: () => import("../views/new-worker-view.vue"),
  },
  {
    path: "/editworker/:id",
    name: RouteName.EDITWORKER,
    component: () => import("../views/edit-worker-view.vue"),
  }
  
];

export default routes;