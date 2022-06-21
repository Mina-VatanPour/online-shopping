<template>
  <footer class="bg-dark bg-cover position-relative">
    <img :src="require('@/assets/img/footer/pattern.svg')" class="img-fluid" />
    <div
      class="border-bottom border-gray-700 card-img-overlay position-absolut"
    >
      <div class="container p-4">
        <div class="row justify-content-center p-5">
          <div class="col-12 col-md-10 col-lg-8 col-xl-6">
            <!-- Heading -->
            <h6 class="mb-4 text-center text-white">
              آیا تمایل دارید ایده هایتان را با ما در میان بگذارید ؟
            </h6>

            <!-- Form -->
            <form class="mb-11">
              <div class="row gx-5 align-items-center">
                <div class="col">
                  <input
                    type="email"
                    class="
                      form-control
                      bg-secondry
                      form-control-lg
                      font-sm
                      text-start
                    "
                    placeholder="ایمیل خود را وارد کنید"
                  />
                </div>
                <div class="col-auto p-0">
                  <button type="submit" class="btn btn-light btn-sm font-sm">
                    اشتراک گذاری
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-12 col-md-3 justify-content-center">
            <!-- Heading -->
            <img
              :src="require('@/assets/img/logo.png')"
              class="img-fluid w-50 d-flex"
              style="opacity: 0.8"
              alt=""
            />

            <!-- Social -->
            <ul class="list-unstyled list-inline mt-4 mb-md-0 d-flex">
              <li class="list-inline-item ms-1">
                <a href="#!" class="text-light">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item ms-1">
                <a href="#!" class="text-light">
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item ms-1">
                <a href="#!" class="text-light">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item ms-1">
                <a href="#!" class="text-light">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li class="list-inline-item ms-1">
                <a href="#!" class="text-light">
                  <i class="bi bi-medium"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm">
            <!-- Heading -->
            <h6 class="heading-xxs mb-4 text-white">پشتیبانی</h6>

            <!-- Links -->
            <ul class="list-unstyled mb-7 mb-sm-0 font-sm">
              <li class="mb-1">
                <a class="text-light" href="./contact-us.html">تماس با ما</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="./faq.html">پرسش و پاسخ</a>
              </li>
              <li class="mb-1">
                <a
                  class="text-light"
                  data-bs-toggle="modal"
                  href="#modalSizeChart"
                  >راهنمای سایز</a
                >
              </li>
              <li>
                <a class="text-light" href="./shipping-and-returns.html"
                  >ارسال و بازگردانی</a
                >
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm">
            <!-- Heading -->
            <h6 class="heading-xxs mb-4 text-white">فروشگاه</h6>

            <!-- Links -->
            <ul class="list-unstyled mb-7 mb-sm-0 font-sm">
              <li class="mb-1">
                <a class="text-light" href="./shop.html">مردانه</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="./shop.html">زنانه</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="./shop.html">بچه گانه</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="./shop.html">تخفیف ها</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm">
            <!-- Heading -->
            <h6 class="heading-xxs mb-4 text-white">شرکت</h6>

            <!-- Links -->
            <ul class="list-unstyled mb-0 font-sm">
              <li class="mb-1">
                <a class="text-light" href="./about.html">درباره ما</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="#!">مشاغل</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="#!">شرایط و ضوابط</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="#!"
                  >سیاست حفظ حریم خصوصی و کوکی ها</a
                >
              </li>
            </ul>
          </div>
          <div class="col-6 col-sm">
            <!-- Heading -->
            <h6 class="heading-xxs mb-4 text-white">راه های ارتباطی</h6>

            <!-- Links -->
            <ul class="list-unstyled mb- font-sm">
              <li class="mb-1">
                <a class="text-light" href="#!">1-202-555-0105</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="#!">1-202-555-0106</a>
              </li>
              <li class="mb-1">
                <a class="text-light" href="#!">Mijad2018@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolut card-img-overlay align-items-end">
      <div class="container">
        <div class="row">
          <div class="col">
            <!-- Copyright -->
            <p class="mb-3 mb-md-0 font-sm text-muted">
              برای استفاده از مطالب سایت، داشتن «هدف غیرتجاری» و ذکر «منبع»
              کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت میجاد است.
            </p>
          </div>
          <div class="col-auto gx-2">
            <!-- Payment methods -->
            <img
              class="footer-payment mx-1"
              :src="require('@/assets/img/payment/mastercard.svg')"
              alt="..."
            />
            <img
              class="footer-payment mx-1"
              :src="require('@/assets/img/payment/visa.svg')"
              alt="..."
            />
            <img
              class="footer-payment mx-1"
              :src="require('@/assets/img/payment/amex.svg')"
              alt="..."
            />
            <img
              class="footer-payment mx-1"
              :src="require('@/assets/img/payment/paypal.svg')"
              alt="..."
            />
            <img
              class="footer-payment mx-1"
              :src="require('@/assets/img/payment/maestro.svg')"
              alt="..."
            />
            <img
              class="footer-payment mx-1"
              :src="require('@/assets/img/payment/klarna.svg')"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style scoped>
.text-light {
  opacity: 0.5;
}
.text-light:hover {
  opacity: 1;
  color: #fff;
}
</style>
