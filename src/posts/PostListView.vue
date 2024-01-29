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
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostItem from "@/components/posts/PostItem.vue";
import { getPosts } from "@/api/posts";
import { useRouter } from "vue-router";

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
console.log("posts", posts);
fetchPosts();

// eslint-disable-next-line prettier/prettier
const goPage = (id) => {
  //   router.push(`/posts/${id}`);
  //문자 뿐만아니라 라우터 객체도 입력할 수 있다.
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
    query: {
      searchText: "hello",
    },
    hash: "#world",
  });

  //문자열, 객체, 이름지정해서 이동 가능하다 , 쿼리나 해시도 객체 파라미터로 넣을 수 있음
};
console.log("posts", posts);
</script>

<style lang="scss" scoped></style>
