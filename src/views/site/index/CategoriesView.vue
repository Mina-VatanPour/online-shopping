<template>
  <section>
    <div
      id="carouselExampleCaptions"
      class="carousel slide py-1"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators mt-5">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            :src="require('@/assets/img/slider1/slide5.jpg')"
            class="d-block w-100 img-fluid"
            alt="..."
          />
          <!-- <div class="carousel-caption d-none d-md-block">
            Heading
            <h1 class="mb-0 fw-bolder">Women</h1>
            Button

            <a class="btn btn-light stretched-link" href="shop.html">
              Shop Women <i class="bi bi-arrow-90deg-right"></i>
            </a>
          </div> -->
        </div>

        <div class="carousel-item">
          <img
            :src="require('@/assets/img/slider1/slide5.jpg')"
            class="d-block w-100 img-fluid"
            alt="..."
          />
          <!-- <div class="carousel-caption d-none d-md-block">
             Heading 
             <h1 class="mb-0 fw-bolder">Men</h1> 
            Button 
            <a class="btn btn-light stretched-link" href="shop.html">
              Shop Men <i class="bi bi-arrow-90deg-right"></i>
            </a>
          </div> -->
        </div>
        <div class="carousel-item">
          <img
            :src="require('@/assets/img/slider1/slide5.jpg')"
            class="d-block w-100 img-fluid"
            alt="..."
          />
          <!-- <div class="carousel-caption d-none d-md-block">
            Heading
            <h1 class="mb-0 fw-bolder">Kids</h1>
            Button
            <a class="btn btn-light stretched-link" href="shop.html">
              Shop Kids <i class="bi bi-arrow-90deg-right"></i>
            </a>
          </div> -->
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategoriesView",
};
</script>

<style>
</style>