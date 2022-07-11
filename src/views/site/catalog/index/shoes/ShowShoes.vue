<template>
  <!-- shoes -->
  <div class="col-6 col-md">
    <!-- Heading -->
    <div class="mb-3 font-sm fw-bold p-1 shadow-sm">کفش ها و بوت ها</div>

    <!-- Links -->
    <ul class="list-styled mb-3 font-xs">
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'shoes' }"
          >همه کفش ها و بوت ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'branded' }"
          >کفش های برند</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'boots' }"
          >بوت ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'sports' }"
          >اسپرت</router-link
        >
      </li>

      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'sandals' }"
          >صندل ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'majlis' }"
          >مجلسی</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>