<template>
  <!-- clothing -->
  <div class="col-6 col-md">
    <!-- Heading -->
    <div class="mb-3 font-sm fw-bold p-1 shadow-sm">لباس ها</div>

    <!-- Links -->
    <ul class="list-styled mb-6 mb-3 font-xs">
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'clothing' }"
          >همه لباس ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'shirts' }"
          >بلوز ها و تی شرت ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'jackets' }"
          >کت و ژاکت
        </router-link>
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'dresses' }"
          >پیراهن</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'hoodies' }"
          >هودی
        </router-link>
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'jeans' }"
          >جین</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'legs' }"
          >لگ ها</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowClothing",
};
</script>

<style>
</style>