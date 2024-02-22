<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <div class="pt-4">
          <button
            type="button"
            class="btn btn-outline-dark me-2"
            @click="goListPage"
          >
            목록
          </button>

          <button type="button" class="btn btn-outline-primary" @click="save">
            저장
          </button>
        </div>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPost } from "@/api/posts";
import PostForm from "@/components/posts/PostForm.vue";

const router = useRouter();

const form = ref({
  title: null,
  content: null,
});

const goListPage = () => {
  router.push({ name: "PostList" });
};

const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now(),
    });
    router.push({ name: "PostList" });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
