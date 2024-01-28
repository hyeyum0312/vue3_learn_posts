<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">GYM CODING</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <!-- 
                RouterLink- 페이지 이동시 <RouterLink>를 사용하여 다른페이지 링크를 만들어야한다.
                리로딩하지 않고 URL에 매핑된페이지를 렌더링할 수 있다.
               -->
              <routerLink class="nav-link active" active-class="active" to="/">
                Home
              </routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" active-class="active" to="/About">
                About
              </routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" active-class="active" to="/posts">
                게시글
              </routerLink>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-light" type="button" @click="goPage">
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goPage = () => {
  router.push({ name: "PostCreate" });
};
</script>

<style lang="scss" scoped></style>
