import {
  createRouter,
  createWebHashHistory,
  // createWebHistory,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PostCreateViewVue from "@/posts/PostCreateView.vue";
import PostDetailViewVue from "@/posts/PostDetailView.vue";
import PostEditViewVue from "@/posts/PostEditView.vue";
import PostListViewVue from "@/posts/PostListView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NestedView from "@/views/nested/NestedView.vue";
import NestedOneView from "@/views/nested/NestedOneView.vue";
import NestedTwoView from "@/views/nested/NestedTwoView.vue";
import NestedHomeView from "@/views/nested/NestedHomeView.vue";

const routes = [
  {
    path: "/",
    name: "HOME",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostListViewVue,
    props: true,
  },
  {
    path: "/posts/create",
    name: "PostCreate",
    component: PostCreateViewVue,
  },
  // /user/alice
  // /user/hyeyeon ->PostDetailViewVue // 같은 컴포넌트 호출 시 , /user/:id와같이 사용가능., /user/:userId 이름은 맘대로
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetailViewVue,
    props: true,
    // eslint-disable-next-line prettier/prettier
    // props: (route) => {
    //   return { id: parseInt(route.params.id) };
    // },
  },

  {
    path: "/posts/:id/edit",
    name: "PostEdit",
    component: PostEditViewVue,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  {
    path: "/nested",
    name: "Nested",
    component: NestedView,
    children: [
      {
        path: "",
        name: "NestedHome",
        component: NestedHomeView,
      },
      {
        path: "one",
        name: "NestedOne",
        component: NestedOneView,
      },
      {
        path: "two",
        name: "NestedTwo",
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory("/"),
  history: createWebHashHistory("/"),
  routes,
});

export default router;
