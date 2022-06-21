<template>
  <section class="py-3 my-3">
    <div class="container px-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-6">
          <!-- Heading -->
          <h4 class="mb-4 text-center">فروشندگان برتر ماه</h4>

          <!-- Nav -->
          <div class="nav justify-content-center mb-4">
            <a
              class="nav-link active font-sm text-dark"
              href="#topSellersTab"
              data-bs-toggle="tab"
              >زنانه</a
            >
            <a
              class="nav-link font-sm text-dark"
              href="#topSellersTab"
              data-bs-toggle="tab"
              >مردانه</a
            >
            <a
              class="nav-link font-sm text-dark"
              href="#topSellersTab"
              data-bs-toggle="tab"
              >بچه گانه</a
            >
          </div>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="topSellersTab">
          <div class="row gy-4">
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card">
                <!-- Badge -->
                <span
                  class="
                    position-absolute
                    bg-success
                    text-white
                    new-alert
                    translate-middle
                    p-2
                    bg-success
                    border border-light
                    rounded-circle
                  "
                >
                  <span class="font-sm">جدید</span>
                </span>
                <!-- Image -->
                <div class="card-img hover item-fade">
                  <!-- Image -->
                  <a class="card-img-hover" href="product.html">
                    <img
                      class="card-img-top card-img-back"
                      :src="require('@/assets/img/top-seller/product-1.jpg')"
                      alt="..."
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions d-flex justify-content-center">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                       <i class="bi bi-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="bi bi-cart2"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white"
                        data-toggle="button"
                      >
                        <i class="bi bi-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html">تاپ </a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold font-sm">
                    <a class="text-body" href="product.html">
                      یقه گل چنبه ای
                    </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold text-success font-sm mt-2">
                    100.000 تومان
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a class="card-img-hover" href="product.html">
                    <img
                      class="card-img-top card-img-back"
                      :src="require('@/assets/img/top-seller/product-2.jpg')"
                      alt="..."
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html">کفش کتانی</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold font-sm">
                    <a class="text-body" href="product.html"> چرمی </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold text-success font-sm mt-2">
                    500.000 تومان
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Badge -->
                <span
                  class="
                    position-absolute
                    bg-success
                    text-white
                    new-alert
                    translate-middle
                    p-2
                    bg-success
                    border border-light
                    rounded-circle
                  "
                >
                  <span class="font-sm">فروش</span>
                </span>

                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a class="card-img-hover" href="product.html">
                    <img
                      class="card-img-top card-img-back"
                      :src="require('@/assets/img/top-seller/product-3.jpg')"
                      alt="..."
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html">پیراهن </a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold font-sm">
                    <a class="text-body" href="product.html"> نخی گلدار </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold font-sm mt-2">
                    <span
                      class="
                        fs-xs
                        text-gray-350 text-decoration-line-through text-danger
                        me-2
                      "
                      >250.000 تومان</span
                    >
                    <span class="text-success">200.000 تومان</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a href="#!">
                    <img
                      class="card-img-top card-img-front"
                      :src="require('@/assets/img/top-seller/product-4.jpg')"
                      alt="..."
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html"> صندل مدل x1</a>
                  </div>

                  <!-- Title -->
                  <div class="font-sm -bold">
                    <a class="text-body" href="product.html">
                      جنس : چرم طبیعی
                    </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold font-sm mt-2 text-success">
                    1.000.000 تومان
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a href="#!">
                    <img
                      class="card-img-top card-img-front"
                      :src="require('@/assets/img/top-seller/product-5.jpg')"
                      alt="..."
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html"> کفش مجلسی</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold font-sm">
                    <a class="text-body" href="product.html">
                      جنس : چرم صنعتی
                    </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold text-success font-sm mt-2">
                    800.000 تومان
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Badge -->
                <span
                  class="
                    position-absolute
                    bg-success
                    text-white
                    new-alert
                    translate-middle
                    p-2
                    bg-success
                    border border-light
                    rounded-circle
                  "
                >
                  <span class="font-sm">فروش</span>
                </span>

                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a class="card-img-hover" href="product.html">
                    <img
                      class="card-img-top card-img-back"
                      :src="require('@/assets/img/top-seller/product-6.jpg')"
                      alt="..."
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html">دامن مجلسی</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold font-sm">
                    <a class="text-body" href="product.html"> جنس : کتان </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold font-sm mt-2">
                    <span
                      class="
                        fs-xs
                        text-gray-350 text-decoration-line-through text-danger
                        me-2
                      "
                      >300.000 تومان</span
                    >
                    <span class="text-success">200.000 تومان</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a class="card-img-hover" href="product.html">
                    <img
                      class="card-img-top card-img-back"
                      :src="require('@/assets/img/top-seller/product-7.jpg')"
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html">کیف اسپرت</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold font-sm">
                    <a class="text-body" href="product.html">
                      جنس : پارچه ای
                    </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold font-sm mt-2 text-success">
                    150.000 تومان
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <!-- Card -->
              <div class="card mb-7">
                <!-- Badge -->

                <span
                  class="
                    position-absolute
                    translate-middle
                    p-2
                    bg-success
                    text-white
                    new-alert
                    border border-light
                    rounded-circle
                  "
                >
                  <span class="font-sm">جدید</span>
                </span>

                <!-- Image -->
                <div class="card-img">
                  <!-- Image -->
                  <a href="#!">
                    <img
                      class="card-img-top card-img-front"
                      :src="require('@/assets/img/top-seller/product-8.jpg')"
                      alt="..."
                    />
                  </a>

                  <!-- Actions -->
                  <div class="card-actions">
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProduct"
                      >
                        <i class="fe fe-eye"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-shopping-cart"></i>
                      </button>
                    </span>
                    <span class="card-action">
                      <button
                        class="btn btn-xs btn-circle btn-white-primary"
                        data-toggle="button"
                      >
                        <i class="fe fe-heart"></i>
                      </button>
                    </span>
                  </div>
                </div>

                <!-- Body -->
                <div class="card-body pt-0 px-4 text-center">
                  <!-- Category -->
                  <div class="font-md">
                    <a class="text-muted" href="shop.html">پیراهن راحتی</a>
                  </div>

                  <!-- Title -->
                  <div class="fw-bold font-sm">
                    <a class="text-body" href="product.html">
                      جنس : نخی و خنک
                    </a>
                  </div>

                  <!-- Price -->
                  <div class="fw-bold text-success font-sm mt-2">
                    180.000 تومان
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- Link  -->
          <div class="mt-5 text-center font-md">
            <a class="link-underline more" href="#!">نمایش بیشتر ...</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TopsellersView",
};
</script>

<style>
.nav-link.active {
  border-bottom: 1px solid red;
}
.more:hover {
  color: red;
}
.new-alert {
  top: 29px !important;
  right: 35px !important;
  cursor: pointer;
}
.hover:hover {
  opacity: 0.2;
}

.item-fade {
  background: black;
  opacity: 0.8;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}
</style>