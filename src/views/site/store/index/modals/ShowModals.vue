<template>
  <!-- Heading -->
  <div class="mb-3 font-sm fw-bold shadow-sm p-1">مدال ها</div>

  <!-- Links -->
  <ul class="list-styled font-xs mb-3">
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        data-bs-toggle="modal"
        :to="{ name: 'modal-newsletter-horizontal' }"
      >
        <!-- href="#modalNewsletterHorizontal" -->
        خبرنامه : افقی
      </router-link>
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        data-bs-toggle="modal"
        :to="{ name: 'modal-newsletter-vertical' }"
      >
        <!-- href="#modalNewsletterVertical" -->
        خبرنامه : عمودی
      </router-link>
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        data-bs-toggle="modal"
        :to="{ name: 'modal-product' }"
      >
        <!-- href="#modalProduct" -->
        محصولات
      </router-link>
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        data-bs-toggle="offcanvas"
        :to="{ name: 'modal-search' }"
      >
        <!-- href="#modalSearch" -->
        جست و جو
      </router-link>
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        data-bs-toggle="offcanvas"
        :to="{ name: 'modal-shopping-cart' }"
      >
        <!-- href="#modalShoppingCart" -->
        کارت خرید
      </router-link>
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        data-bs-toggle="modal"
        :to="{ name: 'modal-size-chart' }"
      >
        نمودار تعیین اندازه
        <!-- href="#modalSizeChart" -->
      </router-link>
    </li>
    <li class="list-styled-item">
      <router-link
        class="list-styled-link"
        data-bs-toggle="modal"
        :to="{ name: 'modal-wait-list' }"
      >
        <!-- href="#modalWaitList" -->
        لیست انتظار
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
</style>