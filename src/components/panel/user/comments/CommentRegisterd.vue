<template>
  <div class="row d-flex align-items-center justify-content-center border p-3 rounded mb-3">
    <div class="col-md-2 text-center">
      <img :src="require('@/assets/img/product/product-1.jpg')" alt="" class="img-fluid w-75 mb-3" />
      <p class="font-xs">
        <span class="badge bg-success me-2">4</span>
        امتیاز
      </p>
    </div>
    <div class="col-md-10">
      <div class="d-flex justify-content-between align-items-center">
        <p class="fw-bold d-inline-block mb-0">
          شبیه عکسش بود دقیقا
        </p>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-sm btn-outline-secondary rounded" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu text-center py-2 mt-1 font-sm me-1">
            <li class="lh-lg">
              <a href="#">
                <i class="bi bi-pencil text-success"></i>
                ویرایش دیدگاه
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-trash3 text-danger"></i>
                حذف دیدگاه
              </a>
            </li>
          </ul>
        </div>

      </div>
      <hr class="text-muted">
      <p class="font-sm text-success">
        <i class="bi bi-hand-thumbs-up"></i>
        خرید این محصول را توصیه میکنم
      </p>
      <p>
        من تو تخفیف خریدم و راضی بودم
      </p>
      <p class="font-sm mb-0 lh-lg">
        <i class="bi bi-plus-lg text-success me-2"></i>
        جنسش خوب بود
      </p>
      <p class="font-sm">
        <i class="bi bi-dash-lg text-danger me-2"></i>
        سایزش استاندارد نبود
      </p>
      <hr class="text-muted">
      <p class="font-sm text-muted text-end mb-0">
        این نظر برای 2 نفر مفید بود.
        <i class="bi bi-hand-thumbs-up ms-2"></i>
      </p>
    </div>



  </div>
</template>

<script>
export default {
  name: "CommentRegisterd",
};
</script>

<style>
</style>