<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>

    <!-- {{ $route.params }}
    {{ $route.query.searchText }}
    {{ $route.hash }} -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getPostById, deletePost } from "@/api/posts";

const router = useRouter();
const post = ref({});

const props = defineProps({
  id: String,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.error(error);
  }
};

fetchPost();

const setPost = ({ title, content, createdAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};

const goListPage = () => {
  router.push({
    name: "PostList",
  });
};

const goEditPage = () => {
  router.push({
    name: "PostEdit",
    params: { id: props.id },
  });
};

const remove = async () => {
  try {
    if (confirm("삭제하시겠습니까?") === false) {
      return; // 뎁스가 깊어지지 않도록 return
    }

    await deletePost(props.id);
    router.push({ name: "PostList" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
