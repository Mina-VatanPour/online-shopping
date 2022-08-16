<template>
    <!-- Modal 2 for show details of buyer images and their comments -->
    <div class="modal fade" id="showImgComments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="exampleModalLabel">
                        <i class="bi bi-arrow-right"></i>
                        دیدگاه خریدار
                    </h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 border-end  pe-0 slider">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">

                                <div class="carousel-inner row">
                                    <div class="carousel-item active col-md-8 d-flex justify-content-center">
                                        <img :src="require('@/assets/img/product/bag.jpg')"
                                            class="d-block img-fluid w-75" alt="...">
                                    </div>
                                    <div class="carousel-item col-md-8 d-flex justify-content-center">
                                        <img :src="require('@/assets/img/product/bag3.jpg')"
                                            class="d-block img-fluid w-75" alt="...">
                                    </div>

                                    <button class="carousel-control-prev col-md-2" type="button"
                                        data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span class="bg-dark rounded-circle p-2"
                                            aria-hidden="true">
                                           <i class="bi bi-caret-right"></i>
                                            </span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next col-md-2" type="button"
                                        data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <!-- <span class="carousel-control-next-icon bg-dark rounded-circle"
                                            aria-hidden="true"></span> -->
                                            <span class="bg-dark rounded-circle p-2"
                                            aria-hidden="true">
                                            <i class="bi bi-caret-left"></i>
                                            </span>
                                        <span class="visually-hidden">Next</span>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 px-5 py-3 descComment">
                            <div class="row d-flex justify-content-center align-items-center">
                                <span class="badge bg-success col-md-1 p-1">4.7</span>
                                <h6 class="col-md-11 mb-0 fw-bold">یک کیف کوچک و جادار</h6>
                            </div>
                            <div class="row mt-3 d-flex align-items-center font-sm">
                                <label class="col-md-4">14 مرداد 1375 </label>
                                |
                                <label class="col-md-7">مینا وطن پور
                                    <span class="badge bg-secondary p-1 ms-3 ">خریدار</span>
                                </label>

                            </div>
                            <hr class="text-muted">
                            <div class="row text-success d-flex align-items-center">
                                <i class="bi bi-hand-thumbs-up col-md-1"></i>
                                <p class="mb-0 d-inline-block col-md-11 font-sm">پیشنهاد میکنم</p>
                            </div>
                            <div class="row mt-3">
                                <p>از هر نظر عالیه ، به شدت توصیه میشه :)</p>
                                <p class="font-sm mb-0">
                                    <i class="bi bi-plus text-success me-1"></i>
                                    بسیار با کیفیت
                                </p>
                                <p class="font-sm mb-0">
                                    <i class="bi bi-dash  text-danger me-1"></i>
                                    بسیار کوچک
                                </p>
                            </div>
                            <hr class="text-muted">
                            <div class="row d-flex align-items-center font-sm">
                                <span class="col-md-6">
                                    <i class="bi bi-shop me-1"></i>
                                    آنلاین شاپ
                                </span>
                                <span class="col-md-6  d-flex align-items-center">
                                    <span class="badge rounded-circle me-1 p-2 bg-dark border border-light ">
                                        <span class="visually-hidden">Color</span>
                                    </span>
                                    مشکی
                                </span>
                            </div>
                            <div class="row text-muted mt-3 font-sm d-flex align-items-center">
                                <p class="col-md-6 d-inline-block mb-0">آیا این دیدگاه مفید بود ؟</p>
                                <div class="col-md-6">
                                    <button class="btn" @click="like++">
                                        <i class="bi bi-hand-thumbs-up text-success me-1"></i>
                                        {{ like }}
                                    </button>
                                    <button class="btn" @click="dislike++">
                                        <i class="bi bi-hand-thumbs-down text-danger me-1"></i>
                                        {{ dislike }}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    data() {
        return {
            like: 0,
            dislike: 0,
        }
    }
}

</script>

<style>
</style>