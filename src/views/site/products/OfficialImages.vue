<template>
    <div class="row d-flex ">
        <div class="col-md-6 border-end  pe-0 slider">
            <div id="carouselExampleFade" class="carousel slide carousel-fade " data-bs-ride="carousel">

                <div class="carousel-inner row">
                    <div class="carousel-item active col-md-8 d-flex justify-content-center">
                        <img :src="require('@/assets/img/product/bag.jpg')" class="d-block img-fluid w-75" alt="...">
                    </div>
                    <div class="carousel-item col-md-8 d-flex justify-content-center">
                        <img :src="require('@/assets/img/product/bag3.jpg')" class="d-block img-fluid w-75" alt="...">
                    </div>

                    <button class="carousel-control-prev col-md-2" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span class="bg-dark rounded-circle p-2" aria-hidden="true">
                            <i class="bi bi-caret-right"></i>
                        </span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next col-md-2" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <!-- <span class="carousel-control-next-icon bg-dark rounded-circle"
                                            aria-hidden="true"></span> -->
                        <span class="bg-dark rounded-circle p-2" aria-hidden="true">
                            <i class="bi bi-caret-left"></i>
                        </span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
            </div>
        </div>

        <div class="col-md-6 p-3 descComment">
            <div class="row d-flex justify-content-center ">
                <h6>کیف زنانه مدل : </h6>
                <div class="col-md-2 d-flex m-2 border rounded shadow-sm" v-for="(img, index) in images" :key="index">
                    <!-- با کلیک روش یه مدال دیگه باز میشه که علاوه بر عکس محصول ، متن نظر اون خریدار هم نمایش داده میشه -->
                    <!-- <a href="#" data-bs-toggle="modal" data-bs-target="#showImgComments"> -->
                    <a href="#">
                        <img :src="require('@/assets/img/product/' + img.imgSrc)" class="img-fluid" alt="">
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const images = [
    {
        id: '1',
        imgSrc: 'bag1.jpg',
        type: 'aBc78',
    },
    {
        id: '2',
        imgSrc: 'bag2.jpg',
        type: 'aBBB5',
    },
    {
        id: '3',
        imgSrc: 'bag3.jpg',
        type: 'aADBc78',
    },
    {
        id: '4',
        imgSrc: 'bag.jpg',
        type: 'RGF123',
    },
]
</script>

<style>
</style>