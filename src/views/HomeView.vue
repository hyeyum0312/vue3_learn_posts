<template>
  <main>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </main>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
console.log("route", route.path);
const router = useRouter();

function goAboutPage() {
  router.push({ name: "About" });
}
</script>

<style lang="scss" scoped></style>
