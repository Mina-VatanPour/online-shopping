<template>
  <!-- Heading -->
  <div class="mb-3 font-sm fw-bold  shadow-sm p-1">محصولات</div>

  <!-- Links -->
  <ul class="list-styled mb-3 font-xs">
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'product' }"
        >همه محصولات</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        :to="{ name: 'product-images-left' }"
        >دارای تصویر در سمت چپ</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'product-image-grid' }"
        >دارای تصویر در وسط</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        :to="{ name: 'product-image-slider' }"
        >تصاویر اسلایدری</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        :to="{ name: 'product-images-stacked' }"
        >تصاویر ذخیره شده</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>