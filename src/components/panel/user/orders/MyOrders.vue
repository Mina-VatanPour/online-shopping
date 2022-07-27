<template>
  <nav>
    <div class="nav nav-tabs font-md" id="nav-tab" role="tablist">
      <!-- tab 1 : Current orders -->
       <button
        class="nav-link text-muted font-md"
        id="nav-order-tab"
        data-bs-toggle="tab"
        data-bs-target="#order-current"
        type="button"
        role="tab"
        aria-controls="order-current"
        aria-selected="true"
      >
       جاری
        <span class="badge bg-secondary ms-2">3</span>
      </button>
      <!-- tab 2 : Orders delivered  -->
      <button
        class="nav-link text-muted font-md"
        id="nav-order-tab"
        data-bs-toggle="tab"
        data-bs-target="#order-deliverd"
        type="button"
        role="tab"
        aria-controls="order-deliverd"
        aria-selected="true"
      >
       تحویل شده
        <span class="badge bg-secondary ms-2">3</span>
      </button>
       <!-- tab 3 : Returned orders -->
        <button
        class="nav-link text-muted font-md"
        id="nav-order-tab"
        data-bs-toggle="tab"
        data-bs-target="#order-returned"
        type="button"
        role="tab"
        aria-controls="order-returned"
        aria-selected="true"
      >
     مرجوع شده
        <span class="badge bg-secondary ms-2">3</span>
      </button>

        <!-- tab 4 : Canceled orders -->
         <button
        class="nav-link text-muted font-md"
        id="nav-order-tab"
        data-bs-toggle="tab"
        data-bs-target="#order-canceled"
        type="button"
        role="tab"
        aria-controls="order-canceled"
        aria-selected="true"
      >
لغو شده        <span class="badge bg-secondary ms-2">3</span>
      </button>
    </div>
  </nav>
  <div class="tab-content mt-5 font-sm" id="nav-tabContent">
      <!-- tab Content 1 : Current orders -->
       <div
      class="tab-pane fade show"
      id="order-current"
      role="tabpanel"
      aria-labelledby="nav-order-tab"
    >
       <CurrentOrders />
      </div>

    <!-- tab Content 2 : Orders delivered  -->
    <div
      class="tab-pane fade show"
      id="order-deliverd"
      role="tabpanel"
      aria-labelledby="nav-order-tab"
    >
       <DeliveredOrders />
      </div>
    
     <!-- tab Content 3 : Returned orders -->
<div
      class="tab-pane fade show"
      id="order-returned"
      role="tabpanel"
      aria-labelledby="nav-order-tab"
    >
       <ReturnedOrders />
      </div>
        <!-- tab Content 4 : Canceled orders -->
<div
      class="tab-pane fade show"
      id="order-canceled"
      role="tabpanel"
      aria-labelledby="nav-order-tab"
    >
       <CanceledOrders />
      </div>

    <!-- paginations -->
    <nav
      aria-label="Page navigation example"
      class="d-flex justify-content-end mt-4"
    >
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CurrentOrders from "./CurrentOrders.vue";
import DeliveredOrders from "./DeliveredOrders.vue";
import ReturnedOrders from "./ReturnedOrders.vue";
import CanceledOrders from "./CanceledOrders.vue";
import OrderDetails from "./OrderDetails.vue";
export default {
  name: "MyOrders",
  components:{
    CurrentOrders,
    DeliveredOrders,
    ReturnedOrders,
    CanceledOrders,
    OrderDetails,
},
};
</script>

<style scoped lang="scss">
.nav-link.active {
  color: #e6123d !important;
  .badge {
    background: #e6123d !important;
    color: #fff !important;
  }
}

a:hover {
  color: #e6123d !important;
}
</style>