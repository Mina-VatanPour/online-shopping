<template>
<div class="row d-flex flex-wrap">
  <div class="col-md-6 p-3 hover">
<div class="card d-flex justify-content-center">
  <img :src="require('@/assets/img/product/product-1.jpg')" class="card-img-top img-fluid" alt="...">
  <div class="card-body p-3">
    <h5 class="card-title">کیف زنانه مدل سرخ پوستی </h5>
    <p class="card-text font-xs text-danger mt-2">تنها 2 عدد در انبار باقی مانده است.</p>
    <p class="card-text text-end fw-bold">
      300,000
      <label class="font-sm ms-1">تومان</label>
    </p>
   <div class="row px-3 pb-3">
      <button type="button" class="col-md-4 btn btn-outline-secondary">
         <i class="bi bi-trash3"></i>
        حذف
      </button>
     <button type="button" class="col-md-7 offset-md-1 btn btn-outline-danger">
      <i class="bi bi-cart-plus"></i>
       اضافه به سبد
      </button>
   </div>
   
  </div>
</div>
</div>

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
</template>

<script>
export default {

}
</script>

<style>
</style>