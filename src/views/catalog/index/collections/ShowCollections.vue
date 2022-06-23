<template>
  <!-- collectins -->
  <div class="col-6 col-md">
    <!-- Heading -->
    <div class="mb-3 font-sm fw-bold p-1 shadow-sm">مجموعه ها</div>

    <!-- Links -->
    <ul class="list-styled mb-3 font-xs">
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'collections' }"
          >همه کالکشن ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'occasionwear' }"
          >لباس های مناسبتی</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'going-out' }"
          >لباس بیرون</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'work-wear' }"
          >لباس کار</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'holiday-shop' }"
          >فروشگاه تعطیلات</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'jean-fit-guide' }"
          >راهنمای ژان فیت</router-link
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