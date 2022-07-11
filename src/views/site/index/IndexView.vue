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
import BannerView from "./BannerView.vue";
import HeaderView from "@/components/site/HeaderView.vue";
import CategoriesView from "./CategoriesView.vue";
import FeaturesView from "./FeaturesView.vue";
import BestpicksView from "./BestpicksView.vue";
import TopsellersView from "./TopsellersView.vue";
import CountdownView from "./CountdownView.vue";
import ReviewsView from "./ReviewsView.vue";
import BrandsView from "./BrandsView.vue";
import FooterView from "@/components/site/FooterView.vue";

export default {
  name: "IndexView",
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
