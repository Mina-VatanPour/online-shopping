<template>
  <BannerView />
  <HeaderView />
  <CategoriesView />
  <FeaturesView />
  <BestpicksView />
  <TopsellersView />
  <CountdownView />
  <ReviewsView />
  <BrandsView />
  <FooterView />
</template>
<script>
// @ is an alias to /src
import BannerView from "@/components/index/BannerView.vue";
import HeaderView from "@/components/HeaderView.vue";
import CategoriesView from "@/components/index/CategoriesView.vue";
import FeaturesView from "@/components/index/FeaturesView.vue";
import BestpicksView from "@/components/index/BestpicksView.vue";
import TopsellersView from "@/components/index/TopsellersView.vue";
import CountdownView from "@/components/index/CountdownView.vue";
import ReviewsView from "@/components/index/ReviewsView.vue";
import BrandsView from "@/components/index/BrandsView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    BannerView,
    HeaderView,
    CategoriesView,
    FeaturesView,
    BestpicksView,
    TopsellersView,
    CountdownView,
    ReviewsView,
    BrandsView,
    FooterView,
  },
};
</script>
