<template>
    <!-- Modal 1 for show official and buyer images -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">

                <div class="modal-body">
                    <div class="row">
                        <nav class="d-flex justify-content-between alin-items-center">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link text-secondary active" id="nav-official-images" data-bs-toggle="tab"
                                    data-bs-target="#official-images" type="button" role="tab"
                                    aria-controls="official-images" aria-selected="true">
                                    تصاویر رسمی
                                </button>
                                <button class="nav-link text-secondary" id="nav-buyers-images" data-bs-toggle="tab"
                                    data-bs-target="#buyers-images" type="button" role="tab"
                                    aria-controls="buyers-images" aria-selected="false">
                                    تصاویر خریداران
                                </button>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </nav>
                        <div class="tab-content" id="nav-tabContent ">
                            <!-- tabContent 1 -->
                            <div class="tab-pane fade show active mt-2 p-3" id="official-images" role="tabpanel"
                                aria-labelledby="nav-official-images">
                                <!-- تصاویر رسمی این محصول -->
                                <OfficialImages />
                            </div>
                            <!-- tabContent 2 -->
                            <div class="tab-pane fade mt-4 p-3" id="buyers-images" role="tabpanel"
                                aria-labelledby="nav-buyers-images">
                                <div class="row">
                                    <div class="col-md-2 d-flex m-2 border rounded shadow-sm"
                                        v-for="(img, index) in images" :key="index">
                                        <!-- با کلیک روش یه مدال دیگه باز میشه که علاوه بر عکس محصول ، متن نظر اون خریدار هم نمایش داده میشه -->
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#showImgComments">
                                            <img :src="require('@/assets/img/product/' + img.imgSrc)" class="img-fluid"
                                                alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Modal 2 for show details of buyer images and their comments -->
    <ShowComments />
</template>

<script setup>
import ShowComments from "./ShowComments.vue";
import OfficialImages from "./OfficialImages.vue";
const images = [
    {
        id: '1',
        imgSrc: 'bag1.jpg',
    },
    {
        id: '2',
        imgSrc: 'bag2.jpg',
    },
    {
        id: '3',
        imgSrc: 'bag3.jpg',
    },
    {
        id: '4',
        imgSrc: 'bag.jpg',
    },
    {
        id: '5',
        imgSrc: 'bag1.jpg',
    },
    {
        id: '6',
        imgSrc: 'bag2.jpg',
    },
    {
        id: '7',
        imgSrc: 'bag2.jpg',
    },
    {
        id: '8',
        imgSrc: 'bag3.jpg',
    },
    {
        id: '9',
        imgSrc: 'bag.jpg',
    },
    {
        id: '10',
        imgSrc: 'bag1.jpg',
    },
    {
        id: '11',
        imgSrc: 'bag2.jpg',
    },
    {
        id: '12',
        imgSrc: 'bag.jpg',
    },
]

</script>

<style scoped>
.nav-link.active {
    color: #e6123d !important;
}
</style>