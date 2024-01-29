<template>
  <div class="container py-4">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <!-- history가 남는다. -->
        <!-- <RouterLink to="/nested/one" class="nav-link" active-class="active">
          Nested1
        </RouterLink> -->
        <!-- <RouterLink to="/nested/two" class="nav-link" active-class="active">
          Nested2
        </RouterLink> -->

        <!-- 
            route.replace
            history가 남지 않는다.
            route.push와 같은 역할을 하지만 유일한 차이는 새로운 히스토리 항목에 추가하지 않고 탐색한다는 것 이다.
            이름에서 알 수 있든이 현재 항목을 대체한다.
            -->
        <RouterLink
          :to="{ name: 'NestedOne', replace: true }"
          class="nav-link"
          active-class="active"
        >
          Nested1
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
          :to="{ name: 'NestedTwo', replace: true }"
          class="nav-link"
          active-class="active"
        >
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
