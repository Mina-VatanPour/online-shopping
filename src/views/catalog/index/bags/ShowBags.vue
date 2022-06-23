<template>
  <!-- bags -->
  <div class="col-6 col-md">
    <!-- Heading -->
    <div class="mb-3 font-sm fw-bold p-1 shadow-sm">کیف ها و اکسسوری ها</div>

    <!-- Links -->
    <ul class="list-styled mb-3 font-xs ">
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'bags' }"
          >همه کیف ها و اکسسوری ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'accessories' }"
          >اکسسوری ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'wallet' }"
          >کیف پول ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'baggage' }"
          >چمدان</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'belt' }"
          >کمربند</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'hats' }"
          >کلاه ها</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'hair-accessories' }"
          >اکسسوری های مو</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link class="list-styled-link" :to="{ name: 'jewelry' }"
          >زیور آلات</router-link
        >
      </li>
      <li class="list-styled-item">
        <router-link
          class="list-styled-link"
          :to="{ name: 'travel-accessories' }"
          >لوازم جانبی سفر</router-link
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