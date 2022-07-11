<template>
  <div class="container-fluid">
    <div class="row">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white align-items-center"
      >
        <!-- Brand -->
        <div class="row w-100">
          <div class="col-3 col-md-2 ms-4">
            <router-link
              class="
                navbar-brand
                d-flex
                align-items-center
                justify-content-center
                pt-0
              "
              :to="{ name: 'home' }"
            >
              <img
                :src="require('@/assets/img/logo.png')"
                class="img-fluid w-50 d-flex"
                alt=""
              />
            </router-link>
          </div>
          <!-- Toggler -->
          <button
            class="
              navbar-toggler
              collapsed
              justify-content-between
              align-items-center
              col-1
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Collapse -->
          <div
            class="
              col-md-7
              d-flex
              justify-content-center
              align-items-center
              mx-4
            "
          >
            <div class="navbar-collapse collapse" id="navbarCollapse" style="">
              <!-- Nav -->
              <ul
                class="navbar-nav mx-auto d-flex align-items-center text-dark"
              >
                <!-- home -->
                <li class="nav-item b-bottom">
                  <router-link class="nav-link" :to="{ name: 'home' }">
                    <i class="bi bi-house-door me-1"></i>
                    خانه</router-link
                  >
                </li>
                <!-- catalog -->
                <li
                  class="
                    nav-item
                    dropdown
                    position-static
                    hovered
                    mx-2
                    b-bottom
                  "
                >
                  <!-- Toggle -->
                  <router-link
                    class="nav-link"
                    data-bs-toggle="dropdown"
                    :to="{ name: 'catalog' }"
                    aria-expanded="false"
                  >
                    <i class="bi bi-tags me-1"></i>
                    کاتالوگ</router-link
                  >

                  <!-- Menu -->
                  <div class="dropdown-menu w-100 bg-light py-0 shadow">
                    <!-- Tabs -->
                    <div class="mb-2 mb-lg-0">
                      <div class="container">
                        <div class="row">
                          <div class="col-12">
                            <!-- Nav -->
                            <nav
                              class="
                                nav nav-tabs nav-overflow
                                font-md
                                border-bottom border-bottom-lg-0
                              "
                            >
                              <a
                                class="nav-link text-uppercase active"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                زنانه
                              </a>
                              <a
                                class="nav-link text-uppercase"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                مردانه
                              </a>
                              <a
                                class="nav-link text-uppercase"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                بچه گانه
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Tab content read from ../view/catalog/index/clothing/ShowClothing.vue -->
                    <div class="card card-lg">
                      <div class="card-body">
                        <div class="tab-content">
                          <div class="tab-pane fade show active" id="navTab">
                            <div class="container">
                              <div class="row">
                                <ShowClothing />
                                <ShowShoes />
                                <ShowBags />
                                <ShowCollections />
                                <ShopSweaters />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- store -->
                <li
                  class="
                    nav-item
                    dropdown
                    hovered
                    position-static
                    mx-2
                    b-bottom
                  "
                >
                  <!-- Toggle -->
                  <router-link
                    class="nav-link"
                    data-bs-toggle="dropdown"
                    :to="{ name: 'store' }"
                    aria-expanded="false"
                  >
                    <i class="bi bi-shop me-1"></i>
                    فروشگاه</router-link
                  >

                  <!-- Menu -->
                  <div class="dropdown-menu shadow w-100 py-0">
                    <div class="card card-lg">
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <ShowShop />
                            <ShowProduct />
                          </div>
                          <div class="col">
                            <ShowSupport />
                            <ShowModals />
                          </div>
                          <div class="col">
                            <ShowAccount />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- pages -->
                <li class="nav-item dropdown hovered mx-2 b-bottom">
                  <!-- Toggle -->
                  <router-link
                    class="nav-link"
                    data-bs-toggle="dropdown"
                    :to="{ name: 'pages' }"
                    aria-expanded="false"
                  >
                    <i class="bi bi-file-break me-1"></i>
                    صفحات</router-link
                  >

                  <!-- Menu -->
                  <div class="dropdown-menu py-0 shadow">
                    <div class="card card-lg">
                      <div class="card-body">
                        <ShowPages />
                      </div>
                    </div>
                  </div>
                </li>
                <!-- weblog -->
                <li class="nav-item b-bottom">
                  <router-link class="nav-link" :to="{ name: 'weblog' }">
                    <i class="bi bi-layout-text-window me-1"></i>
                    وبلاگ</router-link
                  >
                </li>
                <!-- document -->
                <li class="nav-item b-bottom">
                  <router-link class="nav-link" :to="{ name: 'document' }">
                    <i class="bi bi-file-earmark-bar-graph me-1"></i>
                    داکیومنت ها</router-link
                  >
                </li>
              </ul>

              <!-- Nav -->
            </div>
          </div>

          <div class="col-md-2 d-flex justify-content-end align-items-center">
            <ul class="navbar-nav flex-row">
              <li class="nav-item b-bottom">
                <a
                  class="nav-link"
                  data-bs-toggle="offcanvas"
                  href="#modalSearch"
                >
                  <i class="bi bi-search"></i>
                </a>
              </li>
              <li class="nav-item ms-lg-n4 b-bottom">
                <a class="nav-link" href="./account-orders.html">
                  <i class="bi bi-person"></i>
                </a>
              </li>
              <li class="nav-item ms-lg-n4 b-bottom">
                <a class="nav-link" href="./account-wishlist.html">
                  <i class="bi bi-heart"></i>
                </a>
              </li>
              <li class="nav-item ms-lg-n4 b-bottom">
                <a
                  class="nav-link"
                  data-bs-toggle="offcanvas"
                  href="#modalShoppingCart"
                >
                  <span data-cart-items="2">
                    <i class="bi bi-cart2"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// catalog
import ShowClothing from "@/views/site/catalog/index/clothing/ShowClothing.vue";
import ShowShoes from "@/views/site/catalog/index/shoes/ShowShoes.vue";
import ShowBags from "@/views/site/catalog/index/bags/ShowBags.vue";
import ShowCollections from "@/views/site/catalog/index/collections/ShowCollections.vue";
import ShopSweaters from "@/views/site/catalog/index/shopsweaters/ShopSweaters.vue";
// shop
import ShowShop from "@/views/site/store/index/shop/ShowShop.vue";
import ShowProduct from "@/views/site/store/index/product/ShowProduct.vue";
import ShowSupport from "@/views/site/store/index/support/ShowSupport.vue";
import ShowAccount from "@/views/site/store/index/account/ShowAccount.vue";
import ShowModals from "@/views/site/store/index/modals/ShowModals.vue";
import ShowPages from "@/views/site/pages/ShowPages.vue";

// pages
export default {
  name: "HeaderView",
  components: {
    // catalog
    ShowClothing,
    ShowShoes,
    ShowBags,
    ShowCollections,
    ShopSweaters,
    // shop
    ShowShop,
    ShowProduct,
    ShowSupport,
    ShowAccount,
    ShowModals,
    ShowPages,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-bottom:hover {
  border-bottom: 1px solid red;
}
.list-styled-link:hover {
  color: red;
}
// .nav-link.active {
//   color: red;
// }
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .show > .nav-link {
  color: red;
  border-bottom: 1px dotted red;
}
</style>
