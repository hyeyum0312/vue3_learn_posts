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
              <routerLink class="nav-link active" active-class="active" to="/"
                >Home</routerLink
              >
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" active-class="active" to="/About"
                >About</routerLink
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
