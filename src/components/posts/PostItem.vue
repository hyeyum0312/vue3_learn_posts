<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ content }}
    </p>
    <span>
      {{ createdAt }}
    </span>
    <!-- <a href="#" class="btn btn-primary">{{ createdAt }}</a> -->
  </AppCard>

  <!-- <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content }}q
      </p>
      <span>
        {{ createdAt }}
      </span>
      <a href="#" class="btn btn-primary">{{ createdAt }}</a>
    </div>
  </div> -->
</template>

<script setup>
import AppCard from "../AppCard.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
</script>

<style lang="scss" scoped></style>
