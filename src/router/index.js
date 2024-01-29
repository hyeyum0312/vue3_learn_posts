import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PostCreateViewVue from "@/posts/PostCreateView.vue";
import PostDetailViewVue from "@/posts/PostDetailView.vue";
import PostEditViewVue from "@/posts/PostEditView.vue";
import PostListViewVue from "@/posts/PostListView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "HOME",
    component: HomeView,
  },
  {
    path: "/about",
    name: "ABOUT",
    component: AboutView,
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostListViewVue,
  },
  {
    path: "/posts/create",
    name: "PostCreate",
    component: PostCreateViewVue,
  },
  // /user/alice
  // /user/hyeyeon ->PostDetailViewVue // 같은 컴포넌트 호출 시 , /user/:id와같이 사용가능., /user/:userId 이름은 맘대로
  // /user/taeha
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetailViewVue,
  },

  {
    path: "/posts/:id/edit",
    name: "PostEdit",
    component: PostEditViewVue,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
