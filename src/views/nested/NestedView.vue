<template>
  <div class="container py-4">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink to="/nested/one" class="nav-link" active-class="active">
          Nested1
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/nested/two" class="nav-link" active-class="active">
          Nested2
        </RouterLink>
      </li>
    </ul>
    <hr />
    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
