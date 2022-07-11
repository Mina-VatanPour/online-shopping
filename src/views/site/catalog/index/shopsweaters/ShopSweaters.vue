<template>
  <!-- picture -->
  <div class="col-4 d-none d-lg-block">
    <!-- Card -->
    <div class="card">
      <!-- Image -->
      <img
        class="card-img img-fluid"
        :src="require('@/assets/img/catalog.jpg')"
        alt="..."
      />

      <!-- Overlay -->
      <div
        class="
          card-img-overlay
          bg-dark-0 bg-hover
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <div class="text-center mb-3 fw-bold bg-light ps-3 shadow-sm">
          <router-link
            class="btn btn-white stretched-link"
            :to="{ name: 'shop-sweaters' }"
          >
            فروشگاه ژاکت
             <i class="bi bi-arrow-right me-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>