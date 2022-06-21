<template>
  <section class="py-1 mb-4">
    <div class="container px-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
          <!-- Preheading -->
          <h6 class="heading-xxs mb-3 text-gray-400">کالکشن جدید</h6>

          <!-- Heading -->
          <h4 class="mb-4">بهترین انتخاب 1401</h4>

          <!-- Subheading -->
          <!-- <p class="mb-4 text-gray-500">
            از این که فروشگاه ما را برای خرید انتخاب می کنید مچکریم :)
          </p> -->
        </div>
      </div>
      <div class="row g-4">
        <div class="col-12 col-md-7 col-lg-8 d-flex flex-column">
          <!-- Card -->
          <div class="card mb-7 text-body threed" style="min-height: 400px">
            <!-- Background -->
            <div class="card-bg">
              <div class="card-bg-img bg-cover">
                <img
                  :src="require('@/assets/img/product/product-2.jpg')"
                  class="img-fluid"
                />
              </div>
            </div>

            <!-- Body -->
            <div
              class="card-body card-img-overlay my-auto px-md-10 text-center"
            >
              <!-- Circle -->
              <div
                class="
                  card-circle
                  rounded-circle
                  bg-danger
                  text-white
                  d-flex
                  justify-content-center
                  align-items-center
                  m-2
                  px-2
                "
              >
                <strong class="font-sm"> تخفیف </strong>
                <span class="fs-6 fw-bold ms-1"> 30% </span>
              </div>

              <!-- Heading -->
              <h4
                class="
                  mb-0
                  pe-5
                  pt-5
                  d-flex
                  justify-content-end
                  font-lg
                  fw-bold
                "
              >
                پیراهن مردانه چاپ شده
              </h4>

              <!-- Link -->
              <a
                class="
                  btn
                  pe-5
                  me-5
                  text-reset
                  d-flex
                  justify-content-end
                  font-sm
                "
                href="shop.html"
              >
                <i class="bi bi-arrow-right me-2"></i>
                اکنون خرید کنید
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 col-lg-4 d-flex flex-column">
          <!-- Card -->
          <div class="card mb-7 text-white threed" style="min-height: 400px">
            <!-- Background -->
            <div class="card-bg">
              <div class="card-bg-img bg-cover">
                <img
                  :src="require('@/assets/img/product/product-1.jpg')"
                  class="img-fluid"
                />
              </div>
            </div>

            <!-- Body -->
            <div class="card-body text-center card-img-overlay">
              <!-- Heading -->
              <h4 class="mb-0 font-lg fw-bold" style="margin-top: 160px">
                مجموعه کیف ها
              </h4>

              <!-- Link -->
              <a class="btn text-reset font-sm" href="shop.html">
                <i class="bi bi-arrow-right me-2"></i>
                اکنون خرید کنید
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 col-lg-4 d-flex flex-column">
          <!-- Card -->
          <div class="card text-white mb-7 threed" style="min-height: 400px">
            <!-- Background -->
            <div class="card-bg">
              <div class="card-bg-img bg-cover">
                <img
                  :src="require('@/assets/img/product/product-4.jpg')"
                  class="img-fluid"
                />
              </div>
            </div>

            <!-- Body -->
            <div class="card-body my-auto text-center card-img-overlay">
              <!-- Heading -->
              <h4
                class="mb-0 font-lg fw-bold d-flex justify-content-center"
                style="margin-top: 160px"
              >
                سویشرت ها
              </h4>

              <!-- Link -->
              <a
                class="
                  btn
                  text-center
                  font-sm
                  text-white
                  d-flex
                  justify-content-center
                "
                href="shop.html"
              >
                <i class="bi bi-arrow-right me-2"></i>
                اکنون خرید کنید
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7 col-lg-8 d-flex flex-column">
          <!-- Card -->
          <div
            class="card mb-7 mb-md-0 text-body threed"
            style="min-height: 400px"
          >
            <!-- Background -->
            <div class="card-bg">
              <div class="card-bg-img bg-cover">
                <img
                  :src="require('@/assets/img/product/product-3.jpg')"
                  class="img-fluid"
                />
              </div>
            </div>

            <!-- Body -->
            <div
              class="
                card-body
                my-auto
                px-md-10
                text-center text-md-end
                card-img-overlay
              "
            >
              <!-- Heading -->
              <h4 class="mb-0 pe-5 font-lg fw-bold" style="margin-top: 160px">
                لباس های اصلی زنانه
              </h4>

              <!-- Link -->
              <a class="btn pe-5 me-4 text-reset font-sm" href="shop.html">
                <i class="bi bi-arrow-right me-2"></i>
                اکنون خرید کنید
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import product1 from "@/assets/img/product/product-1.jpg";
import product2 from "@/assets/img/product/product-2.jpg";
import product3 from "@/assets/img/product/product-3.jpg";
import product4 from "@/assets/img/product/product-4.jpg";
export default {
  name: "BestpicksView",
  data() {
    return {
      product1,
      product2,
      product3,
      product4,
    };
  },
};
</script>

<style>
.card-circle {
  width: 90px;
  height: 90px;
}

.threed:hover {
  box-shadow: 1px 1px #aaa, 1px 1px #aaa, 1px 1px #aaa;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
</style>