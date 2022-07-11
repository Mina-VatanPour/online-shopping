<template>
  <section class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
          <!-- Preheading -->
          <h6 class="heading-xxs mb-3 text-gray-400">خریداران چه می گویند؟</h6>

          <!-- Heading -->
          <h2 class="mb-2">آخرین نظرات خریداران</h2>
        </div>
      </div>
      <div class="row">
        <!-- Slider -->
        <flickity
          class="carosel my-4 align-items-center"
          ref="flickity"
          :options="flickityOptions"
        >
          <div class="carousel-cell col-4 p-4">
            <!-- Card -->
            <div class="card-lg card border p-4">
              <div class="card-body">
                <!-- Header -->
                <div class="row align-items-center">
                  <div class="col-4">
                    <!-- Image -->
                    <img
                      :src="require('@/assets/img/review/review1.jpg')"
                      alt="..."
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-8 ms-n2">
                    <!-- Preheading -->
                    <a class="fs-xs text-muted" href="shop.html"> پیراهن </a>

                    <!-- Heading -->
                    <a class="d-block fw-bold text-body" href="product.html">
                      پیراهن نخی گلدار
                    </a>
                  </div>
                </div>

                <!-- Blockquote -->
                <blockquote class="mb-0 mt-4 text-center">
                  <p class="text-muted">
                    بسیار با کیفیت و عالی
                    <br />
                    از خریدم راضی بودم :)
                  </p>
                  <p>
                    <!-- rating -->
                    <vue3-star-ratings
                      v-model="rating"
                      :starSize="16"
                      :step="1"
                    />
                  </p>
                  <hr />
                  <footer class="font-sm text-muted">
                    مینا وطن پور |
                    <time datetime="2019-05-29">14 مرداد 1375 </time>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="carousel-cell col-4 p-4">
            <!-- Card -->
            <div class="card-lg card border p-3">
              <div class="card-body">
                <!-- Header -->
                <div class="row align-items-center">
                  <div class="col-4">
                    <!-- Image -->
                    <img
                      :src="require('@/assets/img/review/review2.jpg')"
                      alt="..."
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-8 ms-n2">
                    <!-- Preheading -->
                    <a class="fs-xs text-muted" href="shop.html"> کفش کتانی </a>

                    <!-- Heading -->
                    <a class="d-block fw-bold text-body" href="product.html">
                      اسپرت چرمی
                    </a>
                  </div>
                </div>

                <!-- Blockquote -->
                <blockquote class="mb-0 mt-4 text-center">
                  <p class="text-muted">
                    بسیار با کیفیت و عالی
                    <br />
                    از خریدم راضی بودم :)
                  </p>
                  <p>
                    <!-- rating -->
                    <vue3-star-ratings
                      v-model="rating"
                      :starSize="16"
                      :step="1"
                    />
                  </p>
                  <hr />
                  <footer class="font-sm text-muted">
                    مینا وطن پور |
                    <time datetime="2019-05-29">14 مرداد 1375 </time>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="carousel-cell col-4 p-4">
            <!-- Card -->
            <div class="card-lg card border p-3">
              <div class="card-body">
                <!-- Header -->
                <div class="row align-items-center">
                  <div class="col-4">
                    <!-- Image -->
                    <img
                      :src="require('@/assets/img/review/review3.jpg')"
                      alt="..."
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-8 ms-n2">
                    <!-- Preheading -->
                    <a class="fs-xs text-muted" href="shop.html"> تی شرت </a>

                    <!-- Heading -->
                    <a class="d-block fw-bold text-body" href="product.html">
                      مردانه
                    </a>
                  </div>
                </div>

                <!-- Blockquote -->
                <blockquote class="mb-0 mt-4 text-center">
                  <p class="text-muted">
                    بسیار با کیفیت و عالی
                    <br />
                    از خریدم راضی بودم :)
                  </p>
                  <p>
                    <!-- rating -->
                    <vue3-star-ratings
                      v-model="rating"
                      :starSize="16"
                      :step="1"
                    />
                  </p>
                  <hr />
                  <footer class="font-sm text-muted">
                    مینا وطن پور |
                    <time datetime="2019-05-29">14 مرداد 1375 </time>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="carousel-cell col-4 p-4">
            <!-- Card -->
            <div class="card-lg card border p-3">
              <div class="card-body">
                <!-- Header -->
                <div class="row align-items-center">
                  <div class="col-4">
                    <!-- Image -->
                    <img
                      :src="require('@/assets/img/review/review4.jpg')"
                      alt="..."
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-8 ms-n2">
                    <!-- Preheading -->
                    <a class="fs-xs text-muted" href="shop.html"> پیراهن </a>

                    <!-- Heading -->
                    <a class="d-block fw-bold text-body" href="product.html">
                      پیراهن نخی گلدار
                    </a>
                  </div>
                </div>

                <!-- Blockquote -->
                <blockquote class="mb-0 mt-4 text-center">
                  <p class="text-muted">
                    بسیار با کیفیت و عالی
                    <br />
                    از خریدم راضی بودم :)
                  </p>
                  <p>
                    <!-- rating -->
                    <vue3-star-ratings
                      v-model="rating"
                      :starSize="16"
                      :step="1"
                    />
                  </p>
                  <hr />
                  <footer class="font-sm text-muted">
                    مینا وطن پور |
                    <time datetime="2019-05-29">14 مرداد 1375 </time>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="carousel-cell col-4 p-4">
            <!-- Card -->
            <div class="card-lg card border p-3">
              <div class="card-body">
                <!-- Header -->
                <div class="row align-items-center">
                  <div class="col-4">
                    <!-- Image -->
                    <img
                      :src="require('@/assets/img/review/review2.jpg')"
                      alt="..."
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-8 ms-n2">
                    <!-- Preheading -->
                    <a class="fs-xs text-muted" href="shop.html"> پیراهن </a>

                    <!-- Heading -->
                    <a class="d-block fw-bold text-body" href="product.html">
                      پیراهن نخی گلدار
                    </a>
                  </div>
                </div>

                <!-- Blockquote -->
                <blockquote class="mb-0 mt-4 text-center">
                  <p class="text-muted">
                    بسیار با کیفیت و عالی
                    <br />
                    از خریدم راضی بودم :)
                  </p>
                  <p>
                    <!-- rating -->
                    <vue3-star-ratings
                      v-model="rating"
                      :starSize="16"
                      :step="1"
                    />
                  </p>
                  <hr />
                  <footer class="font-sm text-muted">
                    مینا وطن پور |
                    <time datetime="2019-05-29">14 مرداد 1375 </time>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </flickity>
      </div>
    </div>
  </section>
</template>

<script>
// for slider
import Flickity from "vue-flickity";
// for star rating
import vue3StarRatings from "vue3-star-ratings";
export default {
  name: "ReviewsView",
  components: {
    Flickity,
    vue3StarRatings,
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
        autoPlay: true,
        imagesLoaded: true,
        // any options from Flickity can be used
      },
      
    };
  },

  // methods: {
  //   next() {
  //     this.$refs.flickity.next();
  //   },

  //   previous() {
  //     this.$refs.flickity.previous();
  //   },
  // },
};
</script>

<style>
/* .carousel-image {
} */
.flickity-page-dots {
  bottom: 0;
  margin-top: 3rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
}
/* .flickity-page-dot {
  background-color: #d8d8d8;
  opacity: 1;
  transition: all 0.1s ease-in-out;
  appearance: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  overflow: hidden;
  padding: 0;
  text-indent: -9999px;
} */
.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background-color: #ff6f61;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}
.vue3-star-ratings__wrapper {
  padding: 0px !important;
  margin: 10px auto !important;
}
/* .vue3-star-ratings button {
  display: none !important;
} */
.vue3-star-ratings button {
  width: 16px !important;
  height: 16px !important;
}
.vue3-star-ratings button svg {
  width: 10px !important;
  height: 10px !important;
}
.card:hover {
  box-shadow: 1px 1px 1px #ff877c;
}
</style>