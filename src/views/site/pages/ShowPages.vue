<template>
  <ul class="list-styled font-xs text-center ps-0">
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'about' }"
        >درباره ما</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'contact-us' }"
        >تماس با ما</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'store-locator' }"
        >آدرس فروشگاه</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'faq' }"
        >پرسش و پاسخ</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'coming-soon' }"
        >به زودی می آییم</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: '404' }"
        >404</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>