<template>
  <section class="container-fluid my-5 bg-cover position-relative">
    <img :src="require('@/assets/img/cover-4.jpg')" class="img-fluid" />
    <div class="container">
      <div
        class="
          row
          justify-content-center
          position-absolute
          card-img-overlay
          d-flex
          align-items-center
        "
      >
        <div class="col-12 col-md-8 col-lg-6">
          <!-- Heading -->
          <h3 class="mb-4 ms-2">
            <strong>50 % تخفیف </strong>
            <br />
            در کالکشن تابستانه
          </h3>

          <!-- Counter -->
          <!-- <div
            class="d-flex my-4"
            data-countdown=""
            data-date="Dec 31, 2025 00:00:00"
          >
            <div class="text-center">
              <div
                class="seconds fs-1 fw-bolder text-color-light-red"
                data-seconds=""
              >
                20
              </div>
              <div class="heading-xxs text-muted">ثانیه</div>
            </div>
            <div class="px-1 px-md-4">
              <div class="fs-2 fw-bolder text-color-light-red">:</div>
            </div>
            <div class="text-center">
              <div
                class="minutes fs-1 fw-bolder text-color-light-red"
                data-minutes=""
              >
                27
              </div>
              <div class="heading-xxs text-muted">دقیقه</div>
            </div>
            <div class="px-1 px-md-4">
              <div class="fs-2 fw-bolder text-color-light-red">:</div>
            </div>
            <div class="text-center">
              <div
                class="hours fs-1 fw-bolder text-color-light-red"
                data-hours=""
              >
                09
              </div>
              <div class="heading-xxs text-muted">ساعت</div>
            </div>
            <div class="px-1 px-md-4">
              <div class="fs-2 fw-bolder text-color-light-red">:</div>
            </div>
            <div class="text-center">
              <div
                class="days fs-1 fw-bolder text-color-light-red"
                data-days=""
              >
                31
              </div>
              <div class="heading-xxs text-muted">روز</div>
            </div>
          </div> -->
          <vue3-flip-countdown dir="ltr"
            :labels="{
              days: 'روز',
              hours: 'ساعت',
              minutes: 'دقیقه',
              seconds: 'ثانیه',
            }"
          />

          <!-- Button -->
          <a class="btn btn-secondary font-sm mt-4 ms-1" href="shop.html">
            اکنون خرید کنید
            <i class="bi bi-arrow-left-short"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountdownView",
};
</script>

<style lang="scss" scoped>
.text-color-light-red {
  color: #ff6f61;
}
.flip-clock {
  display: flex;
  justify-content: end;
  margin-right: 0;
}
</style>
