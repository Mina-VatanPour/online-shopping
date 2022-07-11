<template>
    <!-- Heading -->
                            <div class="mb-3 font-sm fw-bold shadow-sm p-1">
                              پشتیبانی
                            </div>

                            <!-- Links -->
                            <ul class="list-styled mb-3 font-xs">
                              <li class="list-styled-item">
                                <router-link
                                  class="list-styled-link"
                                  :to="{name:'shopping-cart'}"
                                  >کارت خرید</router-link
                                >
                              </li>
                              <li class="list-styled-item">
                                <router-link
                                  class="list-styled-link"
                                   :to="{name:'checkout'}"
                                  >کنترل نهایی</router-link
                                >
                              </li>
                              <li class="list-styled-item">
                                <router-link
                                  class="list-styled-link"
                                   :to="{name:'order-completed'}"
                                  >تکمیل سفارشات</router-link
                                >
                              </li>
                              <li class="list-styled-item">
                                <router-link
                                  class="list-styled-link"
                                   :to="{name:'shipping-and-returns'}"
                                  >حمل و نقل و برگشت</router-link
                                >
                              </li>
                            </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>