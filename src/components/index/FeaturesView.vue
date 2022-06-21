<template>
  <section class="py-4">
    <div class="container">
      <div class="row pb-4 border-bottom gy-3 gy-md-0">
        <div class="col-6 col-md-3">
          <!-- Item -->
          <div class="d-flex mb-6 mb-lg-0 align-items-center">
            <!-- Icon -->
            <!-- <i class="bi bi-truck fs-lg text-primary"></i> -->
            <img
              class="me-1"
              :src="require('@/assets/img/feature-icons/truck.png')"
              alt=""
              width="32"
              height="32"
            />
            <!-- Body -->
            <div class="ms-2">
              <!-- Heading -->
              <h6 class="mb-1 fs-md">حمل و نقل رایگان</h6>
              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">
                برای سفارش های بالای 100 هزار تومان
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <!-- Item -->
          <div class="d-flex mb-6 mb-lg-0 align-items-center">
            <!-- Icon -->
            <!-- <i class="bi bi-arrow-repeat fs-lg text-primary"></i> -->
            <img
              class="me-1"
              :src="require('@/assets/img/feature-icons/arrow-repeat.png')"
              alt=""
              width="32"
              height="32"
            />
            <!-- Body -->
            <div class="ms-2">
              <!-- Heading -->
              <h6 class="mb-1 fs-md">بازده رایگان</h6>

              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">
                تا مدت 30 روز پول را برمی گرداند
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <!-- Item -->
          <div class="d-flex mb-6 mb-md-0 align-items-center">
            <!-- Icon -->
            <!-- <i class="bi bi-lock fs-lg text-primary"></i> -->
            <img
              class="me-1"
              :src="require('@/assets/img/feature-icons/lock.png')"
              alt=""
              width="32"
              height="32"
            />

            <!-- Body -->
            <div class="ms-2">
              <!-- Heading -->
              <h6 class="mb-1 fs-md">خرید ایمن</h6>

              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">در دستان امن شماست</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <!-- Item -->
          <div class="d-flex align-items-center">
            <!-- Icon -->
            <!-- <i class="bi bi-tag fs-lg text-primary"></i> -->
            <img
              class="me-1"
              :src="require('@/assets/img/feature-icons/tag.png')"
              alt=""
              width="32"
              height="32"
            />

            <!-- Body -->
            <div class="ms-2">
              <!-- Heading -->
              <h6 class="mb-1 fs-md">بیش از 10000 سبک</h6>

              <!-- Text -->
              <p class="mb-0 fs-sm text-muted">
                ما هر چه شما نیاز دارید را داریم
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesView",
};
</script>

<style>
.fs-sm {
  font-size: 8pt;
}
.fs-md {
  font-size: 10pt;
}
</style>




 