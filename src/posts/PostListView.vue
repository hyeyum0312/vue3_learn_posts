<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row">
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
import { ref } from "vue";
import { getPosts } from "@/api/posts";
import { useRouter } from "vue-router";

const router = useRouter();
const posts = ref([]);

const params = ref({
  _sort: "createdAt",
  _order: "desc",
});

const fetchPosts = async () => {
  try {
    const { data } = await getPosts(params.value);
    posts.value = data;
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

fetchPosts();

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
