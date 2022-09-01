<template>
    <HeaderView />
    <hr>
    <div class="container">
        <!-- Breadcrumb -->
        <div class="row">
            <div class="col-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb font-sm">
                        <li class="breadcrumb-item"><a href="#">آنلاین شاپ</a></li>
                        <li class="breadcrumb-item"><a href="#">زنانه</a></li>
                        <li class="breadcrumb-item active" aria-current="page"> کیف مجلسی
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row mb-4 d-flex flex-nowrap">
            <!-- picture -->
            <div class="col-md-4 product-img p-4">
                <div class="big-img row">
                    <div class="col-md-2">
                        <p><i class="bi bi-heart"></i></p>
                        <p><i class="bi bi-share"></i></p>
                        <p><i class="bi bi-bell"></i></p>
                        <p><i class="bi bi-graph-up-arrow"></i></p>
                        <p><i class="bi bi-laptop"></i></p>
                        <p><i class="bi bi-file-earmark-plus"></i></p>
                    </div>
                    <div class="col-md-10">
                        <img :src="require('@/assets/img/product/bag.jpg')" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="little-img row d-flex flex-nowrap justify-content-center align-items-center">
                    <div class="col-md-2 border rounded me-1 p-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img :src="require('@/assets/img/product/bag1.jpg')" class="img-fluid" alt="">
                        </a>
                    </div>
                    <div class="col-md-2 border rounded me-1 p-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img :src="require('@/assets/img/product/bag2.jpg')" class="img-fluid" alt=""></a>
                    </div>
                    <div class="col-md-2 border rounded me-1 p-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img :src="require('@/assets/img/product/bag.jpg')" class="img-fluid" alt=""></a>
                    </div>
                    <div class="col-md-2 border rounded me-1 p-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img :src="require('@/assets/img/product/bag3.jpg')" class="img-fluid" alt=""></a>
                    </div>
                    <div class="col-md-2 border rounded me-1 p-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <img :src="require('@/assets/img/product/bag.jpg')" class="img-fluid" alt=""></a>
                    </div>
                </div>
                <!-- Modal -->
                <ModalDetails />

                <p class="text-muted text-center font-xs my-3">
                    <i class="bi bi-info-circle me-1"></i>
                    گزارش نادرستی مشخصات محصول با شناسه ABCD12EF
                </p>

            </div>
            <!-- details -->
            <div class="col-md-5 product-description border-start mx-1 py-4 px-5">
                <h6 class="fw-bold">کیف دستی زنانه مدل :</h6>
                <hr class="text-muted">
                <p class="d-inline-block font-sm">
                    <i class="bi bi-star-fill text-warning me-1"></i>
                    3.9
                    <label class="text-muted">(3265)</label>
                    <a href="#comments" class="ms-3 text-info">
                        123 دیدگاه
                    </a>
                    <a href="#requests" class="ms-3 text-info">
                        25 پرسش
                    </a>
                </p>
                <p class="d-inline-block font-sm ">
                    <i class="bi bi-hand-thumbs-up-fill text-success me-2"></i>
                    <label class="text-muted"> 74% (32) نفر خرید این محصول را پیشنهاد کرده اند :)</label>
                </p>
                <h6 class="fw-bold my-3">رنگ : مشکی</h6>
                <div class="row">
                    <span class="circle-color bg-dark d-flex justify-content-center align-items-center">
                        <i class="bi bi-check2 text-light"></i>
                    </span>
                    <span class="circle-color bg-danger"></span>
                    <span class="circle-color bg-warning"></span>
                </div>
                <h6 class="fw-bold my-4">ویژگی ها</h6>
                <p class="font-sm">
                    <label class="text-muted">بند و دستگیره : </label>
                    <label class="text-muted fw-bold">بند بلند، بند کوتاه </label>
                </p>
                <p class="font-sm">
                    <label class="text-muted">مورد استفاده : </label>
                    <label class="text-muted fw-bold">روزمره </label>
                </p>
                <p class="font-sm">
                    <label class="text-muted">کشور تولید کننده: </label>
                    <label class="text-muted fw-bold">ایران </label>
                </p>
                <hr class="text-muted">
                <div class="row p-2 border rounded shadow-sm">
                    <div class="col-md-8">
                        <h6 class="fw-bold mt-2"> ارسال رایگان</h6>
                        <p class="text-muted font-sm my-3">برای خرید بالای 200 هزار تومان</p>
                    </div>
                    <div class="col-md-4">
                        <img :src="require('@/assets/img/post-car.png')" class="img-fluid">
                    </div>
                </div>
            </div>
            <!-- seller -->
            <div class="col-md-3 seller-description ">
                <div class="border rounded bg-light p-4">
                    <p class="d-flex justify-content-between">
                        <label class="fw-bold">فروشنده</label>
                        <a href="#moreSeller" class=" text-info font-sm">فروشندگان دیگر</a>
                    </p>
                    <p class="d-inline-block text-muted">
                        <i class="bi bi-shop font-md me-2"></i>
                        فروشگاه دیبا
                    </p>
                    <p class="font-sm ms-4 text-muted">
                        <label class="text-success">81%</label>
                        رضایت از کالا
                        |
                        عملکرد
                        <label class="text-warning">خیلی خوب</label>
                    </p>
                    <hr class="text-muted">
                    <p class="font-sm">
                        <i class="bi bi-shield-check font-md me-2"></i>
                        گارانتی اصالت و سلامت فیزیکی کالا
                    </p>
                    <hr class="text-muted">
                    <p class="d-flex justify-content-between align-items-center">
                        <label class=" text-muted">
                            <i class="bi bi-journal-check font-md  me-2 text-info"></i>
                            موجود در انبار شاپ
                        </label>
                        <i class="bi bi-chevron-left font-md" type="button" data-bs-toggle="modal"
                            data-bs-target="#exampleModal"></i>
                    </p>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog ">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="exampleModalLabel">جزئیات ارسال </h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body p-4">
                                    <h6 class="mb-3"> ارسال آنلاین شاپ</h6>
                                    <p class="font-sm text-muted">
                                        این کالا در انبار آنلاین شاپ موجود و آماده پردازش است و توسط پیک آنلاین شاپ در
                                        بازه
                                        انتخابی ارسال خواهد شد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p class="font-xs ms-4">
                        <i class="bi bi-truck text-danger me-2 font-sm"></i>
                        ارسال آنلاین شاپ
                    </p>
                    <hr class="text-muted">
                    <p class="d-flex justify-content-between align-items-center">
                        <label class="text-muted font-sm ">
                            <i class="bi bi-info-circle me-2"></i>
                            قیمت فروشنده
                        </label>
                        <label class="fw-bold">
                            92.500
                            <label class="font-xs ms-2">تومان</label>
                        </label>
                    </p>
                    <div class="row d-flex justify-content-center">
                        <button type="button" class="col-md-10 btn btn-color-green">افزودن به سبد خرید</button>
                    </div>
                </div>
                <p class="text-muted font-xs text-end my-3" type="button" data-bs-toggle="modal"
                    data-bs-target="#exampleModal2">
                    قیمت بهتری سراغ دارید؟
                    <i class="bi bi-tag ms-2"></i>
                </p>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h6 class="modal-title fw-bold" id="exampleModalLabel2">گزارش قیمت مناسب‌تر
                                    <br>
                                    <p class="font-sm text-muted my-2">کیف دستی زنانه کد : 123</p>
                                </h6>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body p-4 font-sm">
                                <label class="my-3 ">این کالا را با چه قیمتی دیده‌اید؟</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control font-sm" placeholder="مثلا 35000"
                                        aria-label="Username" aria-describedby="basic-addon1">
                                    <span class="input-group-text fw-bold font-sm" id="basic-addon1">تومان</span>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        در فروشگاه اینترنت دیده ام.
                                    </label>
                                </div>
                                <label class="my-3">نام فروشگاه</label>
                                <input type="text" class="form-control font-sm" placeholder="مثلا آنلاین شاپ"
                                    aria-label="Username" aria-describedby="basic-addon1">

                                <label class="my-3">محل فروشگاه</label>
                                <select class="form-select font-sm" aria-label="Default select example">
                                    <option selected>مکان فروشگاه را انتخاب کنید</option>
                                    <option value="1">استان تهران</option>
                                    <option value="2">استان خراسان</option>
                                    <option value="3">استان اصفهان</option>
                                </select>
                            </div>
                            <div class="modal-footer row d-flex justify-content-center">
                                <button type="button" class="col-md-8 btn btn-info text-white">ارسال</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FeaturesView -->
        <div class="row shadow-sm border-top rounded my-5">
            <FeaturesView />
        </div>
        <!-- Seller of this product -->
        <h6 class="fw-bold mb-4 c-red">فروشندگان این کالا </h6>
        <div class="row shadow-sm my-4 p-2 d-flex align-items-center" v-for="(seller, index) in sellers" :key="index">
            <div class="col-md-3">
                <p class="d-inline-block text-muted">
                    <i class="bi bi-shop font-md me-2"></i>
                    {{ seller.storeName }}
                </p>
                <p class="font-sm ms-4 text-muted">
                    <label :class="addColorClass(seller.persent, seller.status)">{{ seller.persent }}%</label>
                    رضایت از کالا
                    |
                    عملکرد
                    <label :class="addColorClass(seller.persent, seller.status)">{{ seller.status }}</label>
                </p>
            </div>
            <div class="col-md-2 font-sm text-muted">
                <p>
                    <i class="bi bi-truck text-danger me-2 font-md"></i>
                    ارسال آنلاین شاپ
                </p>
                <p v-if="seller.sellerPost == true">
                    <i class="bi bi-person text-warning me-2 font-md"></i>
                    ارسال فروشنده
                </p>
                <p v-else>
                    _____
                </p>
            </div>
            <div class="col-md-3">
                <p>
                    <i class="bi bi-shield-check font-md me-2"></i>
                    گارانتی اصالت و سلامت فیزیکی کالا
                </p>
            </div>
            <div class="col-md-2 font-lg text-end">
                {{ seller.price }}
                <label class="font-xs ms-2">تومان</label>
            </div>
            <div class="col-md-2 text-end">
                <button class="btn btn-color-green">افزودن به سبد</button>
            </div>
            <div class="row my-2 p-2 spetial text-muted rounded" v-if="seller.spetialService == true">
                <p class="mb-0 col-md-6">
                    <label class="font-sm fw-bold ">
                        *
                        خدمات ویژه</label>
                    <label class="font-xs ms-2">(امکان ارسال فوری در مشهد)</label>
                </p>
            </div>

        </div>

        <!-- Slider for Similar products -->
        <div class="container border rounded p-3 my-3">
            <!-- Heading -->
            <h6 class="fw-bold c-red" data-v-1bea3260="">کالاهای مشابه </h6>

            <div class="row">
                <!-- Slider -->
                <flickity class="carosel my-4 align-items-center" ref="flickity" :options="flickityOptions">
                    <div v-for="(card, index) in  cards" :key="index"
                        class="carousel-cell col-2 text-center border-end mx-1">
                        <!-- Card -->
                        <img :src="require('@/assets/img/product/' + card.srcImg)" class="img-fluid img-size shadow">
                        <div class="">
                            <h6 class="fw-bold my-4">{{ card.title }}</h6>
                            <p class="font-xs text-success" v-if="card.status == true && card.count > 3">
                                <i class="bi bi-journal-check me-1 text-success font-md"></i>
                                موجود در انبار
                                آنلاین شاپ
                            </p>
                            <p class="card-text font-xs text-danger" v-else-if="card.count <= 3">تنها
                                {{ card.count }} عدد در انبار موجود است.</p>
                            <p class="card-text font-xs text-secondary" v-else>
                                <i class="bi bi-person text-warning me-1 font-md"></i>
                                ارسال از طریق فروشنده
                            </p>

                            <p v-if="card.discount != ''" class="fw-bold text-muted ">

                                <span class="badge bg-color me-5">{{ card.discount }}%</span>
                                {{ card.priceAfterDiscount }}
                                <label class="ms-1 font-xs text-muted"> تومان</label>
                                <br>
                                <label class="font-sm text-decoration-line-through text-secondary text-end">{{
                                        card.price
                                }}</label>
                            </p>
                            <p v-else class="fw-bold text-muted">{{ card.price }}
                                <label class="ms-1 font-xs text-muted"> تومان</label>
                            </p>

                        </div>
                    </div>
                </flickity>
            </div>
        </div>
        <!-- Specifications : مشخصات -->
        <h6 class="fw-bold my-4 c-red">مشخصات ، دیدگاه ها ، پرسش و پاسخ ها</h6>
        <div class="accordion mt-4 mb-5" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        مشخصات محصول :
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body py-4 px-5">
                        <div class="row" v-for="(specification, index ) in specifications" :key="index">
                            <div class="col-md-2 text-muted">
                                {{ specification.item }} :
                            </div>
                            <div class="col-md-10">{{ specification.val }}
                                <hr class="text-muted mt-3">
                            </div>
                        </div>
                        <p>متن ناقص <span id="dots">...</span><span id="more">متن کامل شد :)</span></p>
                        <a @click="readMore()" id="myBtn" class="text-info font-sm" role="button">مشاهده بیشتر
                            <i class="bi bi-chevron-left ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        دیدگاه ها درباره این محصول :
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body py-4 px-5">
                        <div class="row">
                            <div class="col-md-3">

                                <h6 class="fw-bold mb-0">
                                    3.9
                                    <p class="font-xs ms-1 d-inline-block text-muted mb-0">از 5 </p>
                                </h6>
                                <!-- rating -->
                                <p class="d-inline-block">
                                    <vue3-star-ratings v-model="rating" :starSize="16" :showControl="false"
                                        :disableClick="true" />
                                    <label class="text-muted font-xs mb-0">از مجموع 123 امتیاز</label>
                                </p>
                                <hr class="text-muted">
                                <label class="font-sm my-2">کیفیت ساخت</label>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 75%;"
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">خیلی خوب</div>
                                </div>
                                <label class="font-sm my-2">طراحی </label>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 50%;"
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> خوب</div>
                                </div>
                                <label class="font-sm my-2">ارزش خرید </label>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 25%;"
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">ضعیف</div>
                                </div>
                                <label class="font-sm my-2">میزان کاربرد </label>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 75%;"
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">خیلی خوب </div>
                                </div>
                                <p class="my-3 font-sm text-muted">شما هم درباره این محصول دیدگاه ثبت کنید.</p>
                                <button type="button" class="col-md-12 btn btn-outline-danger font-sm fw-bold"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="bi bi-chat me-2"></i>
                                    ثبت دیدگاه
                                </button>
                                <!-- اینجا باید  مدالی که تو قسمت commentwating هست رو قرار بدم -->

                            </div>
                            <div class="col-md-9 ps-5">
                                <div class="row">
                                    <div class="col-md-1"><img :src="require('@/assets/img/product/product-1.jpg')"
                                            class="img-fluid rounded" alt=""></div>
                                    <div class="col-md-1"><img :src="require('@/assets/img/product/product-1.jpg')"
                                            class="img-fluid" alt=""></div>
                                    <div class="col-md-1"><img :src="require('@/assets/img/product/product-1.jpg')"
                                            class="img-fluid" alt=""></div>
                                </div>
                                <p class="my-2"><a href="#" class="text-info font-sm">مشاهده همه
                                        <i class="bi bi-chevron-left ms-1"></i>
                                    </a></p>
                                <hr class="text-muted">
                                <div class="row d-flex align-items-center my-3 font-xs fw-bold text-muted">
                                    <label>
                                        <i class="bi bi-card-checklist font-md me-1"></i>
                                        مرتب سازی بر اساس :
                                        <label><a href="#" class="new mx-3">جدید ترین</a>
                                        </label>
                                        <label><a href="#" class="helpfull mx-3">مفید ترین</a></label>
                                    </label>
                                </div>
                                <!-- اینجا کامپوننت CommentRegisterd  رو قرار میدیم -->
                                <CommentRegisterd />
                                <a @click="readMore()" id="myBtn" class="text-info font-sm" role="button">مشاهده
                                    دیدگاه
                                    های بیشتر
                                    <i class="bi bi-chevron-down ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        پرسش و پاسخ ها درباره این محصول :
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body py-4 px-5">
                        <div class="row">
                            <div class="col-md-3">
                                <p class="my-3 font-sm text-muted text-center">شما هم درباره این محصول دیدگاه ثبت کنید.
                                </p>
                                <button type="button" class="col-md-12 btn btn-outline-danger font-sm fw-bold"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="bi bi-chat me-2"></i>
                                    ثبت پرسش
                                </button>
                                <!-- اینجا مدال مربوط به ثبت پرسش باید ایجاد بشه بصورت کامپوننت چون شاید جاهای دیگه هم بخواد استفاده بشه -->
                            </div>
                            <div class="col-md-9 ps-5">
                                <div class="row d-flex align-items-center my-3 font-xs fw-bold text-muted">
                                    <label>
                                        <i class="bi bi-card-checklist font-md me-1"></i>
                                        مرتب سازی بر اساس :
                                        <label><a href="#" class="new mx-3">جدید ترین</a>
                                        </label>
                                        <label><a href="#" class="helpfull mx-3">مفید ترین</a></label>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterView />
</template>

<script >
import HeaderView from "@/components/site/HeaderView.vue";
import FooterView from "@/components/site/FooterView.vue";
import ModalDetails from "./ModalDetails.vue";
import FeaturesView from "@/views/site/index/FeaturesView.vue";
import CommentRegisterd from "@/components/panel/user/comments/CommentRegisterd.vue";

// for slider
import Flickity from "vue-flickity";
// for star rating
import vue3StarRatings from "vue3-star-ratings";
import { ref } from "vue";
export default {
    components: {
        HeaderView,
        ModalDetails,
        FeaturesView,
        FooterView,
        CommentRegisterd,
        Flickity,
        vue3StarRatings,
    },
    setup() {
        const sellers = ref([
            {
                id: '1',
                storeName: ' 1 فروشگاه آنلاین شاپ',
                digiPost: true,
                sellerPost: false,
                persent: '90',
                status: 'عالی',
                price: '125.000',
                spetialService: false,
            },
            {
                id: '2',
                storeName: ' 2 فروشگاه آنلاین شاپ',
                digiPost: true,
                sellerPost: true,
                persent: '75',
                status: 'خوب',
                price: '120.000',
                spetialService: true,
            },
            {
                id: '3',
                storeName: ' 3 فروشگاه آنلاین شاپ',
                digiPost: false,
                sellerPost: true,
                persent: '38',
                status: 'ضعیف',
                price: '127.500',
                spetialService: false,
            },
        ]);
        const cards = ref([
            {
                id: '1',
                title: 'کیف زنانه مدل x',
                srcImg: 'product-1.jpg',
                price: '100.000',
                discount: '25',
                status: true,
                count: '4',
                priceAfterDiscount: '75.000',
            },
            {
                id: '2',
                title: 'کیف زنانه مدل y',
                srcImg: 'product-2.jpg',
                price: '200.000',
                discount: '25',
                status: false,
                count: '6',
                priceAfterDiscount: '150.000',
            },
            {
                id: '3',
                title: 'کیف زنانه مدل y',
                srcImg: 'product-2.jpg',
                price: '200.000',
                discount: '25',
                status: false,
                count: '6',
                priceAfterDiscount: '150.000',
            },
            {
                id: '4',
                title: 'کیف زنانه مدل zm',
                srcImg: 'product-3.jpg',
                price: '250.000',
                discount: '',
                status: true,
                count: '10',
                priceAfterDiscount: '',
            },
            {
                id: '5',
                title: 'کیف زنانه مدل huu',
                srcImg: 'product-3.jpg',
                price: '250.000',
                discount: '',
                status: true,
                count: '3',
                priceAfterDiscount: '',
            },
            {
                id: '6',
                title: 'کیف زنانه مدل dse',
                srcImg: 'product-3.jpg',
                price: '250.000',
                discount: '',
                status: false,
                count: '10',
                priceAfterDiscount: '',
            },
            {
                id: '7',
                title: 'کیف زنانه مدل lo',
                srcImg: 'product-3.jpg',
                price: '250.000',
                discount: '',
                status: true,
                count: '1',
                priceAfterDiscount: '',
            },
            {
                id: '8',
                title: 'کیف زنانه مدل lo;;;',
                srcImg: 'product-3.jpg',
                price: '250.000',
                discount: '',
                status: true,
                count: '1',
                priceAfterDiscount: '',
            },
            {
                id: '9',
                title: 'کیف زنانه مدل jhy',
                srcImg: 'product-3.jpg',
                price: '250.000',
                discount: '',
                status: true,
                count: '1',
                priceAfterDiscount: '',
            },
            {
                id: '10',
                title: 'کیف زنانه مدل dft',
                srcImg: 'product-3.jpg',
                price: '250.000',
                discount: '',
                status: true,
                count: '1',
                priceAfterDiscount: '',
            },
        ])

        const specifications = ref([
            {
                item: 'جنس',
                val: 'چرم مصنوعی',
            },
            {
                item: 'طرح',
                val: ' طرح دار',
            },
            {
                item: 'بند و دستگیره',
                val: 'دو دسته',
            },
            {
                item: 'نحوه بسته شدن',
                val: ' زیپ و دکمه ',
            },
            {
                item: 'ابعاد',
                val: ' 20 * 35 * 15 سانتی متر ',
            },
        ])

        let counter = 0;

        function addColorClass(persent, status) {
            if (persent >= 80 && status == 'عالی') {
                return 'text-success fw-bold';
            }
            else if (50 < persent < 80 && status == 'خوب') {
                return 'text-warning fw-bold';
            }
            else if (persent <= 50, status == 'ضعیف') {
                return 'text-danger fw-bold';
            }
        }
        function readMore() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "مشاهده بیشتر";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "بستن";
                moreText.style.display = "inline";
            }
        }
        return {
            sellers, cards, specifications, counter, addColorClass, readMore, flickityOptions: {
                initialIndex: 6,
                prevNextButtons: true,
                pageDots: false,
                wrapAround: false,
                autoPlay: false,
                imagesLoaded: true,
                fade: true,
                rightToLeft: true,
                contain: true,
                cellAlign: 'left',
                // any options from Flickity can be used
            },
        };
    }
}
</script>

<style scoped>
.circle-color {
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0.25rem;
}

.c-red {
    color: #e6123d;
    /* color: #EC685C; */
}

.spetial {
    color: #c02d76 !important;
    background: linear-gradient(270deg, rgba(215, 168, 204, .2), hsla(0, 0%, 100%, 0))
}

/* for slider */

/* .flickity-page-dots {
    bottom: 0;
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    width: 100%;
} */

/* .flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background-color: #ff6f61;
    border-radius: 50%;
    opacity: 0.25;
    cursor: pointer;
} */

/* 
:deep description :
With Scoped CSS (i.e., from <style scoped>),
the styles are applied only to the current component and not its children. If you want to stick with scoped CSS,
you can target the dynamic children with :deep() (::v-deep in Vue 2) around your selectors,
as shown below. */

:deep(.flickity-button) {
    /* background: #333; */
    background: rgb(230, 228, 228);
}

:deep(.flickity-button:hover) {
    /* background: #F90; */
    background: #f8887e;
    border: 1px solid #ac655d;
}

:deep(.flickity-prev-next-button) {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

:deep(.flickity-button-icon) {
    fill: white;
}

/* :deep(.flickity-prev-next-button.previous) {
    left: -40px;
}

:deep(.flickity-prev-next-button.next) {
    right: -40px;
} */

.img-size {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.bg-color {
    background: #EC685C;
}

.btn-color-green {
    background: rgb(99, 172, 99);
    color: #fff;
}

.accordion-button.collapsed {
    background: linear-gradient(270deg, rgba(218, 161, 204, 0.2), rgba(187, 161, 221, 0));
}

.accordion-button:not(.collapsed) {
    color: rgb(37, 37, 37);
    background: linear-gradient(#eee, #fff);
    font-weight: bold;
}

#more {
    display: none;
}

.vue3-star-ratings button {
    /* width: 16px !important;
  height: 16px !important; */
    display: none !important;
    ;
}

.new,
.helpfull .active {
    color: #EC685C;
}
</style>