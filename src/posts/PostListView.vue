<template>
  <div>
    <h2>게시글 목록</h2>

    <hr class="my-4" />
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>

        <div class="col-3">
          <select class="form-select" v-model="params._limit">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>

    <hr class="my-4" />
    <div class="row g-3">
      <div class="col-4" v-for="item in posts" :key="item">
        <PostItem
          :title="item.title"
          :content="item.content"
          :createdAt="item.createdAt"
          @click="goPage(item.id)"
        >
        </PostItem>
      </div>
    </div>

    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: params._page > 1 }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="params._page > 1 ? --params._page : 1"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li
          class="page-item"
          v-for="page in pageCount"
          :key="page"
          :class="{ active: params._page === page }"
        >
          <a class="page-link" href="#" @click.prevent="params._page = page">{{
            page
          }}</a>
        </li>

        <li
          class="page-item"
          :class="{ disabled: !(params._page < pageCount) }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="
              params._page < pageCount ? ++params._page : pageCount
            "
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "./PostDetailView.vue";
import AppCard from "@/components/AppCard.vue";
import { ref, watchEffect } from "vue";
import { getPosts } from "@/api/posts";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";

const router = useRouter();
const posts = ref([]);

const params = ref({
  _sort: "createdAt",
  _order: "desc",
  _limit: 3,
  _page: 1,
  title_like: "",
});

//pagenation
const totalCount = ref(0);
const pageCount = computed(() =>
  // eslint-disable-next-line prettier/prettier
  Math.ceil(totalCount.value / params.value._limit)
);
console.log("params.value._limit", pageCount.value / params.value._limit);
console.log("pageCount computed", pageCount.value);

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers["x-total-count"];
    console.log("dd", headers["x-total-count"]);
  } catch (error) {
    console.error(error);
  }

  // async/await
  // ({ data: posts.value } = await getPosts());

  // promise방식
  // getPosts().then((response) => {
  //   console.log("response", response);
  //   posts.value = response.data;
  // });

  // async/await과 promise의 차이
  // async/await은 기능은 같으나 문법적 추가, 좀더 읽기 쉽게.
};

//초기 한번 바로 실행함.
watchEffect(fetchPosts);

console.log("pageCount", pageCount);

// eslint-disable-next-line prettier/prettier
const goPage = (id) => {
  console.log("id>>>>>", id);
  //   router.push(`/posts/${id}`);
  //문자 뿐만아니라 라우터 객체도 입력할 수 있다.
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
    // query: {
    //   searchText: "hello",
    // },
    // hash: "#world",
  });

  //문자열, 객체, 이름지정해서 이동 가능하다 , 쿼리나 해시도 객체 파라미터로 넣을 수 있음
};
console.log("posts", posts);
</script>

<style lang="scss" scoped></style>
