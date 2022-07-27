<template>
 <div
          class="row border shadow rounded my-3 py-3 px-1"
          v-for="(orderDetail, index) in orderDetails"
          :key="index"
        >
          <div class="col-6 right font-md text-start">
            <i class="bi bi-check-circle-fill text-success me-2"></i>
            تحویل شده
          </div>
          <div class="col-6 left font-md text-end">
            <router-link
              :to="{ name: 'order-details' }"
              :tab-contents="tabContents"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title=" مشاهده جزئیات"
            >
              <i class="bi bi-arrow-left-square"></i>
            </router-link>
          </div>
          <div class="row">
            <ul class="my-2">
              <li>
                <label class="text-muted font-sm me-2"> تاریخ</label>
                {{ orderDetail.date }}
                | <label class="text-muted font-sm mx-2"> کد سفارش </label>
                {{ orderDetail.orderCode }}
                | <label class="text-muted font-sm mx-2"> مبلغ</label>
                {{ orderDetail.price }}
                | <label class="text-muted font-sm mx-2"> تخفیف</label>
                {{ orderDetail.discount }}
              </li>
            </ul>
          </div>
          <hr class="w-75 text-muted" />
          <div class="row">
            <div class="col-9 right text-start">
              <img
                class="mx-3"
                :src="require('@/assets/img/order-pic/' + orderDetail.picture1)"
                width="50"
                height="50"
                alt=""
              />
              <img
                class="mx-3"
                :src="require('@/assets/img/order-pic/' + orderDetail.picture2)"
                width="50"
                height="50"
                alt=""
              />
            </div>
            <div class="col-3 left text-end">
              <router-link :to="{ name: 'order-factor' }" class="text-info">
                <i class="bi bi-card-list"></i>
                مشاهده فاکتور
              </router-link>
            </div>
          </div>
        </div>
</template>

<script setup>
import { ref } from "vue";
 const orderDetails = ref([
      {
        date: "14 مرداد 1400",
        orderCode: 123456789,
        price: "5,087,000 ریال",
        discount: "250,000  ریال",
        picture1: "order2.jpg",
        picture2: "order1.png",
      },
      {
        date: "30 مهر 1400",
        orderCode: 123456789,
        price: "5,087,000 ریال",
        discount: "250,000  ریال",
        picture1: "order2.jpg",
        picture2: "order1.png",
      },
      {
        date: "12 دی 1400",
        orderCode: 123456789,
        price: "5,087,000 ریال",
        discount: "250,000  ریال",
        picture1: "order2.jpg",
        picture2: "order1.png",
      },
    ]);

</script>

<style></style>