<template>
  <HeaderView />
  <hr />
  <div class="container p-4 mt-2 mb-5 mx-0 mx-md-5">
    <div class="row">
      <div class="col-12">
        <!-- Breadcrumb -->
        <nav
          style="--bs-breadcrumb-divider: '>'"
          aria-label="breadcrumb"
          class="ps-4 mb-2 ms-2"
        >
          <ol class="breadcrumb font-sm">
            <li class="breadcrumb-item">
              <router-link :to="{ name: 'home' }">خانه</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              حساب کاربری مینا وطن پور
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 sidebar border rounded p-4">
        <ul class="ps-0">
          <!-- روی هر گزینه از منو کلیک شه -->
          <li v-for="(menu, index) in Menus" :key="index" class="my-1 font-md">
            <router-link :to="{ name: menu.link }"
              >{{ menu.title }}
              <i class="bi bi-caret-left"></i>
            </router-link>
            <hr class="w-100" />
          </li>
        </ul>
      </div>
      <div class="col-md-9 content">
        <div class="container rounded">
          <div class="row">
            <!-- اینجا کامپوننت مربوطه اش باز میشه :) -->
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <FooterView /> -->
</template>

<script>
import HeaderView from "@/components/site/HeaderView.vue";
import FooterView from "@/components/site/FooterView.vue";
import { ref } from "vue";
export default {
  name: "UserAccount",
  components: {
    HeaderView,
    FooterView,
  },
  setup() {
    const Menus = ref([
      {
        title: "سفارشات من",
        link: "my-orders",
      },
      {
        title: "لیست علاقه مندی ها",
        link: "my-widhlist",
      },
      {
        title: "اطلاعات شخصی",
        link: "personal-info",
      },
      {
        title: "آدرس ها",
        link: "addresses-list",
      },
      {
        title: "دیدگاه ها",
        link: "user-comments",
      },
      {
        title: "خروج از حساب کاربری",
        link: "layout-account",
      },
    ]);
    return { Menus };
  },
};
</script>

<style lang="scss" scoped>
li a:hover {
  color: #e6123d !important;
}
.breadcrumb-item .active {
  color: green;
}
.sidebar li a {
  display: flex;
  justify-content: space-between;
}

.content .container {
  border: 1px solid #eee;
  padding: 2rem 4rem;
}
</style>