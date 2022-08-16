import { createRouter, createWebHistory } from "vue-router";
// Home
import HomeView from "../views/site/HomeView.vue";
// Catalog
import TemplateCatalog from "../views/site/catalog/TemplateCatalog.vue";
// import ShowClothing from "../views/site/catalog/index/clothing/ShowClothing.vue";
// import ShowShoes from "../views/site/catalog/index/shoes/ShowShoes.vue";
// import ShowBags from "../views/site/catalog/index/bags/ShowBags.vue";
// import ShowCollections from "../views/site/catalog/index/collections/ShowCollections.vue";
// import ShopSweaters from "../views/site/catalog/index/shopsweaters/ShopSweaters.vue";
// Store
import TemplateStore from "../views/site/store/TemplateStore.vue";
import ShowShop from "../views/site/store/index/shop/ShowShop.vue";
import ShowProduct from "../views/site/store/index/product/ShowProduct.vue";
import ShowSupport from "../views/site/store/index/support/ShowSupport.vue";
import ShowAccount from "../views/site/store/index/account/ShowAccount.vue";
import ShowModals from "../views/site/store/index/modals/ShowModals.vue";
// Pages
import ShowPages from "../views/site/pages/ShowPages.vue";
// Weblog
import WeblogView from "../views/site/ShowWeblog.vue";
// Document
import DocumentView from "../views/site/ShowDocument.vue";
//UserAccount
import UserAccount from "../views/panel/user/UserAccount.vue";
import MyOrders from "../components/panel/user/orders/MyOrders.vue";
import OrderDetails from "../components/panel/user/orders/OrderDetails.vue";
import OrderFactor from "../components/panel/user/orders/OrderFactor.vue";
import MyWidhlist from "../components/panel/user/MyWidhlist.vue";
import PersonalInfo from "../components/panel/user/information/PersonalInfo.vue";
import EditInfo from "../components/panel/user/information/EditInfo.vue";
import AddressesList from "../components/panel/user/address/AddressesList.vue";
// import NewAddress from "../components/panel/user/address/NewAddress.vue";
import EditAddress from "../components/panel/user/address/EditAddress.vue";
import UserComments from "../components/panel/user/comments/UserComments.vue";
import LayoutAccount from "../components/panel/user/LayoutAccount.vue";
import ProductsPage from "../views/site/products/ProductsPage.vue";

const routes = [
  // Header | Meno 
  // home
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // catalog
  {
    path: "/catalog",
    name: "catalog",
    component: TemplateCatalog,
    children: [
      {
        path: "clothing",
        name: "clothing",
        component: "ShowClothing",
        children: [
          {
            path: "shirts",
            name: "shirts",
            component: "ShowClothing",
          },
          {
            path: "jackets",
            name: "jackets",
            component: "ShowClothing",
          },
          {
            path: "dresses",
            name: "dresses",
            component: "ShowClothing",
          },
          {
            path: "hoodies",
            name: "hoodies",
            component: "ShowClothing",
          },
          {
            path: "jeans",
            name: "jeans",
            component: "ShowClothing",
          },
          {
            path: "legs",
            name: "legs",
            component: "ShowClothing",
          },
        ]
      },

      {
        path: "shoes",
        name: "shoes",
        component: "ShowShoes",
        children: [
          {
            path: "branded",
            name: "branded",
            component: "ShowShoes",
          },
          {
            path: "boots",
            name: "boots",
            component: "ShowShoes",
          },
          {
            path: "sports",
            name: "sports",
            component: "ShowShoes",
          },
          {
            path: "sandals",
            name: "sandals",
            component: "ShowShoes",
          },
          {
            path: "majlis",
            name: "majlis",
            component: "ShowShoes",
          },
        ]
      },
      {
        path: "bags",
        name: "bags",
        component: "ShowBags",
        children: [
          {
            path: "accessories",
            name: "accessories",
            component: "ShowBags",
          },
          {
            path: "wallet",
            name: "wallet",
            component: "ShowBags",
          },
          {
            path: "baggage",
            name: "baggage",
            component: "ShowBags",
          },
          {
            path: "belt",
            name: "belt",
            component: "ShowBags",
          },
          {
            path: "hats",
            name: "hats",
            component: "ShowBags",
          },
          {
            path: "hair-accessories",
            name: "hair-accessories",
            component: "ShowBags",
          },
          {
            path: "jewelry",
            name: "jewelry",
            component: "ShowBags",
          },
          {
            path: "travel-accessories",
            name: "travel-accessories",
            component: "ShowBags",
          },

        ]
      },
      {
        path: "collections",
        name: "collections",
        component: "ShowCollections",
        children: [
          {
            path: "occasionwear",
            name: "occasionwear",
            component: "ShowCollections",
          },
          {
            path: "going-out",
            name: "going-out",
            component: "ShowCollections",
          },
          {
            path: "work-wear",
            name: "work-wear",
            component: "ShowCollections",
          },
          {
            path: "holiday-shop",
            name: "holiday-shop",
            component: "ShowCollections",
          },
          {
            path: "jean-fit-guide",
            name: "jean-fit-guide",
            component: "ShowCollections",
          },
        ]
      },
      {
        path: "shop-sweaters",
        name: "shop-sweaters",
        component: "ShopSweaters",
      }
    ]
  },

  // store
  {
    path: "/store",
    name: "store",
    component: TemplateStore,
    children: [
      // shop
      {
        path: "shop",
        name: "shop",
        component: ShowShop,
      },
      {
        path: "shop-topbar",
        name: "shop-topbar",
        component: ShowShop,
      },
      {
        path: "shop-collapse",
        name: "shop-collapse",
        component: ShowShop,
      },
      {
        path: "shop-simple",
        name: "shop-simple",
        component: ShowShop,
      },
      {
        path: "shop-masonry",
        name: "shop-masonry",
        component: ShowShop,
      },
      // product
      {
        path: "product",
        name: "product",
        component: ShowProduct,
        children: [
          {
            path: "product-images-left",
            name: "product-images-left",
            component: ShowProduct,
          },
          {
            path: "product-image-grid",
            name: "product-image-grid",
            component: ShowProduct,
          },
          {
            path: "product-image-slider",
            name: "product-image-slider",
            component: ShowProduct,
          },
          {
            path: "product-images-stacked",
            name: "product-images-stacked",
            component: ShowProduct,
          },
        ]
      },
      // support
      {
        path: "shopping-cart",
        name: "shopping-cart",
        component: ShowSupport,
      },
      {
        path: "checkout",
        name: "checkout",
        component: ShowSupport,
      },
      {
        path: "order-completed",
        name: "order-completed",
        component: ShowSupport,
      },
      {
        path: "shipping-and-returns",
        name: "shipping-and-returns",
        component: ShowSupport,
      },
      // account
      {
        path: "account-order",
        name: "account-order",
        component: ShowAccount,
      },
      {
        path: "account-orders",
        name: "account-orders",
        component: ShowAccount,
      },
      {
        path: "account-wishlist",
        name: "account-wishlist",
        component: ShowAccount,
      },
      {
        path: "account-personal-info",
        name: "account-personal-info",
        component: ShowAccount,
      },
      {
        path: "account-address",
        name: "account-address",
        component: ShowAccount,
      },
      {
        path: "account-address-edit",
        name: "account-address-edit",
        component: ShowAccount,
      },
      {
        path: "account-payment",
        name: "account-payment",
        component: ShowAccount,
      },
      {
        path: "account-payment-edit",
        name: "account-payment-edit",
        component: ShowAccount,
      },
      {
        path: "account-payment-choose",
        name: "account-payment-choose",
        component: ShowAccount,
      },
      {
        path: "auth",
        name: "auth",
        component: ShowAccount,
      },
      // modals
      {
        path: "modal-newsletter-horizontal",
        name: "modal-newsletter-horizontal",
        component: ShowModals,
      },
      {
        path: "modal-newsletter-vertical",
        name: "modal-newsletter-vertical",
        component: ShowModals,
      },
      {
        path: "modal-product",
        name: "modal-product",
        component: ShowModals,
      },
      {
        path: "modal-search",
        name: "modal-search",
        component: ShowModals,
      },
      {
        path: "modal-shopping-cart",
        name: "modal-shopping-cart",
        component: ShowModals,
      },
      {
        path: "modal-size-chart",
        name: "modal-size-chart",
        component: ShowModals,
      },
      {
        path: "modal-wait-list",
        name: "modal-wait-list",
        component: ShowModals,
      },
    ]
  },
  // pages
  {
    path: "/pages",
    name: "pages",
    component: ShowPages,
    children: [
      {
        path: "about",
        name: "about",
        component: ShowPages
      },
      {
        path: "contact-us",
        name: "contact-us",
        component: ShowPages
      },
      {
        path: "store-locator",
        name: "store-locator",
        component: ShowPages
      },
      {
        path: "faq",
        name: "faq",
        component: ShowPages
      },
      {
        path: "coming-soon",
        name: "coming-soon",
        component: ShowPages
      },
      {
        path: "404",
        name: "404",
        component: ShowPages
      },
    ]
  },
  // weblog
  {
    path: "/weblog",
    name: "weblog",
    component: WeblogView,
  },
  // document
  {
    path: "/document",
    name: "document",
    component: DocumentView,
  },
  {
    path: "/user-account",
    name: "user-account",
    component: UserAccount,
    children: [
      {
        path: "my-orders",
        name: "my-orders",
        component: MyOrders,
      },
      {
        path: "order-details",
        name: "order-details",
        component: OrderDetails,
      },
      {
        path: "my-widhlist",
        name: "my-widhlist",
        component: MyWidhlist,
      },
      {
        path: "personal-info",
        name: "personal-info",
        component: PersonalInfo,
        children: [
          {
            path: "edit/:param",
            name: "edit-info",
            component: EditInfo
          }
        ]
      },
      {
        path: "addresses-list",
        name: "addresses-list",
        component: AddressesList,
        children :[
          // {
          //   path: "new-address",
          //   name: "new-address",
          //   component: NewAddress,
          // },
          {
            path: "edit/:id",
            name: "edit-address",
            component: EditAddress,
          },
        ]
      },
      {
        path: "user-comments",
        name: "user-comments",
        component: UserComments,
      },
      {
        path: "layout-account",
        name: "layout-account",
        component: LayoutAccount,
      },
    ]
  },
  {
    path: "/order-factor",
    name: "order-factor",
    component: OrderFactor,
  },
  // products
  {
    path: "/products-page",
    name: "products-page",
    component: ProductsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
