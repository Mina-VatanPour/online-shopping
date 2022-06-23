<template>
  <!-- Heading -->
  <div class="mb-3 font-sm fw-bold shadow-sm p-1">حساب کاربری</div>

  <!-- Links -->
  <ul class="list-styled font-xs mb-3">
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-order' }"
        >سفارش</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-orders' }">سفارش ها</router-link>
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-wishlist' }"
        >مورد علاقه ها</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-personal-info' }"
        >اطلاعات شخصی</router-link
      >
    </li>
    <li class="list-styled-item">
      <a class="list-styled-link" :to="{ name: 'account-address' }">آدرس ها</a>
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-address-edit' }"
        >آدرس جدید</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-payment' }">پرداخت</router-link>
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-payment-edit' }"
        >ویرایش پرداخت</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'account-payment-choose' }"
        >انتخاب نوع پرداخت</router-link
      >
    </li>
    <li class="list-styled-item">
      <router-link class="list-styled-link" :to="{ name: 'auth' }">اعتبارسنجی</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>