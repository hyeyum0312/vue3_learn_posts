<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form action="">
      <div class="mb-3">
        <label for="title" class="form-label"> 제목 </label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label"> 내용 </label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="contents"
          rows="3"
        ></textarea>
      </div>

      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button type="button" class="btn btn-outline-primary" @click="edit">
          저장
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { getPostById, updatePost } from "@/api/posts";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const goDetailPage = () => {
  router.push({ name: "PostDetail", params: { id: id } });
};

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  const { data } = await getPostById(id);
  setForm(data);
};

fetchPost();

const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};

const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    router.push({ name: "PostDetail", params: { id } });
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
