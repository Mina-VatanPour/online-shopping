<template>
  <!-- Heading -->
  <div class="mb-3 font-sm fw-bold shadow-sm p-1">فروشگاه</div>

  <!-- Links -->
  <ul class="list-styled mb-3 font-xs">
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'shop' }"
        >|پیش فرض</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'shop-topbar' }"
        >نوار بالا</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'shop-collapse' }"
        >ریزشی</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'shop-simple' }"
        >ساده</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'shop-masonry' }"
        >سنگ تراشی</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>