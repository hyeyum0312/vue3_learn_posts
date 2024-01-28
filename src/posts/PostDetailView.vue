<template>
  <div>
    <h2>제목</h2>
    <p>내용</p>
    <p class="text-muted">2024-01-28</p>
    <hr class="my-4" />
    <div class="row">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
    </div>

    {{ $route.params }}
    {{ $route.query.searchText }}
    {{ $route.hash }}
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
