<template>
  <nav>
    <div class="nav nav-tabs font-md" id="nav-tab" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="nav-link text-muted font-md"
        id="nav-order-tab"
        data-bs-toggle="tab"
        data-bs-target="#order-prosess"
        type="button"
        role="tab"
        aria-controls="order-prosess"
        aria-selected="true"
      >
        {{ tab.title }}
        <span class="badge bg-secondary ms-2"> {{ tab.number }}</span>
      </button>
    </div>
  </nav>
  <div class="tab-content mt-5 font-sm" id="nav-tabContent">
    <div
      class="tab-pane fade show"
      id="order-prosess"
      role="tabpanel"
      aria-labelledby="nav-order-tab"
    >
      <div class="orders-history">
        <!-- Current orders -->
        <!-- هنوز ننوشتم -->

        <!-- Orders delivered -->

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

        <!-- Returned orders -->

        <!-- Canceled orders -->
      </div>
    </div>
    <!-- paginations -->
    <nav
      aria-label="Page navigation example"
      class="d-flex justify-content-end mt-4"
    >
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MyOrders",
  setup() {
    const tabs = ref([
      {
        id: "1",
        title: "سفارش های جاری",
        number: 1,
      },
      {
        id: "2",
        title: " تحویل شده",
        number: 3,
      },
      {
        id: "3",
        title: "مرجوع شده",
        number: 1,
      },
      {
        title: "لغو شده",
        number: 0,
      },
    ]);
    const tabContents = ref([
      {
        code: 12345,
        title: "تی شرت زنانه",
        date: " تاریخ 15 بهمن 1401",
        picture: "order1.png",
        status: "در حال پردازش",
        details: " جزئیات بیشتر",
      },
      {
        code: 67890,
        title: "تی شرت مردانه",
        date: " تاریخ 20 اسفند 1401",
        picture: "order1.png",
        status: "در حال پردازش",
        details: " جزئیات بیشتر",
      },
    ]);
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
    return { tabs, tabContents, orderDetails };
  },
};
</script>

<style scoped lang="scss">
.nav-link.active {
  color: #e6123d !important;
  .badge {
    background: #e6123d !important;
    color: #fff !important;
  }
}

a:hover {
  color: #e6123d !important;
}
</style>