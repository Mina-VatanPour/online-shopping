<template>
  <div
    class="
      row
      comment
      border
      rounded
      shadow-sm
      mb-4
      p-3
      font-sm
      d-flex
      align-items-center
    "
  >
    <div class="col-md-1">
      <img
        :src="require('@/assets/img/comment.png')"
        alt=""
        class="img-fluid"
      />
    </div>
    <div class="col-md-11">
      <h6>از این کالاها راضی هستید؟</h6>
      <p class="mb-0">
        با ثبت دیدگاه برای هر کالا ، ما را در خدمت رسانی بهتر یاری کنید :)
      </p>
    </div>
  </div>
  <div class="row d-flex flex-wrap justify-content-evenly">
    <div
      class="col-md-5 border rounded shadow-sm p-4 mb-4"
      v-for="(waitingComment, index) in waitingComments"
      :key="index"
    >
      <div class="row d-flex flex-nowrap align-items-center">
        <div class="col-md-3 me-2">
          <img
            :src="require('@/assets/img/product/' + waitingComment.picture)"
            class="img-fluid rounded-circle"
          />
        </div>
        <div class="col-md-9 font-sm fw-bold">{{ waitingComment.title }}</div>
      </div>
      <div class="row d-flex justify-content-center">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="col-md-8 btn btn-outline-danger mt-4 font-sm fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="bi bi-chat me-2"></i>
          ثبت دیدگاه
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header text-start">
                <h6 class="modal-title fw-bold" id="exampleModalLabel">
                  دیدگاه شما
                  <p class="text-muted font-sm my-1">
                    در مورد
                    {{ waitingComment.title }}
                  </p>
                </h6>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body p-4">
                <div class="row">
                  <div class="col-md-6 right p-3">
                    <div class="top">
                      <label for="customRange2" class="form-label">
                        <span class="text-danger">*</span>
                        امتیاز دهید :
                      </label>
                      <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="5"
                        id="customRange2"
                      />
                    </div>
                    <hr class="text-muted" />
                    <p class="font-sm fw-bold">
                      خرید این محصول را به دیگران ...
                    </p>
                    <div
                      class="
                        row
                        text-muted text-center
                        d-flex
                        justify-content-evenly
                      "
                    >
                      <div
                        class="
                          col-md-3
                          border border-success
                          text-success
                          rounded
                          p-3
                          pointer
                        "
                      >
                        <i class="bi bi-hand-thumbs-up"></i>
                        <br />
                        <p class="font-xs mb-0">پیشنهاد میکنم</p>
                      </div>
                      <div
                        class="
                          col-md-3
                          border border-warning
                          text-warning
                          rounded
                          p-3
                          pointer
                        "
                      >
                        <i class="bi bi-question"></i>
                        <i class="bi bi-exclamation"></i>
                        <br />
                        <p class="font-xs mb-0">مطمئن نیستم</p>
                      </div>
                      <div
                        class="
                          col-md-3
                          border border-danger
                          text-danger
                          rounded
                          p-3
                          pointer
                        "
                      >
                        <i class="bi bi-hand-thumbs-down"></i>
                        <br />
                        <p class="font-xs mb-0">پیشنهاد نمیکنم</p>
                      </div>
                    </div>
                    <hr class="text-muted my-4" />
                    <h6 class="fw-bold my-3">دیدگاه خود را شرح دهید</h6>
                    <p class="my-2">عنوان نظر</p>
                    <input type="text" class="form-control mb-2 font-sm" />
                    <p class="my-2">نکات مثبت</p>
                    <input type="text" class="form-control mb-2 font-sm" />
                    <p class="my-2">نکات منفی</p>
                    <input type="text" class="form-control mb-2 font-sm" />
                  </div>
                  <div class="col-md-6 left border rounded p-3">
                    <h6 class="mb-3 fw-bold lh-lg">
                      دیگران را با نوشتن نظرات خود، برای انتخاب این محصول
                      راهنمایی کنید.
                    </h6>
                    <p class="fw-bold text-primary">
                      لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
                    </p>
                    <p>
                      لازم است محتوای ارسالی منطبق برعرف و شئونات جامعه و با
                      بیانی رسمی و عاری از لحن تند، تمسخرو توهین باشد.
                    </p>
                    <p>
                      از ارسال لینک‌ سایت‌های دیگر و ارایه‌ی اطلاعات شخصی نظیر
                      شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.
                    </p>
                    <p class="fw-bold">
                      در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا
                      ارائه‌ی اطلاعات مشخص و مفید برای راهنمایی سایر کاربران در
                      فرآیند انتخاب و خرید یک محصول است.
                    </p>
                    <p>
                      با توجه به ساختار بخش نظرات، از پرسیدن سوال یا درخواست
                      راهنمایی در این بخش خودداری کرده و سوالات خود را در بخش
                      «پرسش و پاسخ» مطرح کنید.
                    </p>
                    <p class="fw-bold text-danger">
                      افزودن عکس و ویدیو به نظرات:
                    </p>
                    <p>
                      با مطالعه‌ی
                      <a href="#" class="link-primary text-decoration-underline"
                        >این لینک</a
                      >
                      می‌توانید مفید‌ترین الگوی عکاسی از کالایی که خریداری
                      کرده‌اید را مشاهده کنید.
                    </p>
                    <p>
                      پیشنهاد می‌شود قوانین کامل ثبت نظر را در
                      <a href="#" class="link-primary text-decoration-underline"
                        >این صفحه</a
                      >
                      مطالعه کنید.
                    </p>
                    <p>
                      هرگونه نقد و نظر در خصوص سایت دیجی‌کالا، مشکلات دریافت
                      خدمات و درخواست کالا و نیز گزارش تخلف فروش (نظیر گزارش
                      کالای غیراصل یا مغایر) را با ایمیل
                      <a href="#" class="link-primary">Mijad2018@gma</a>
                      یا با شماره‌ی
                      <a href="#" class="link-primary">021 - 5333333333 </a>
                      در میان بگذارید و از نوشتن آن‌ها در بخش نظرات خودداری
                      کنید.
                    </p>
                  </div>
                </div>
                <div class="row p-3">
                  <p class="my-2">
                    متن نظر
                    <span class="text-danger">*</span>
                  </p>
                  <textarea
                    class="form-control text-start font-sm"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  >
                  </textarea>
                </div>
                <div class="row px-3">
                  <h6 class="fw-bold my-2">ارسال محتوا</h6>

                  <p class="text-muted font-sm">
                    حداکثر ۵ عکس ۵ مگابایت و ۳ ویدیو با فرمت MP4 تا ۱۰۰ مگابایت
                  </p>
                  <div class="mb-3">
                    <div class="file">
                      <label for="inputTag ">
                        انتخاب فایل <br />
                        <i class="bi bi-plus-circle"></i>
                        <input
                          type="file"
                          id="inputTag"
                          accept="image/png, image/jpg, image/gif, image/jpeg"
                          multiple
                        />
                        <br />
                        <span id="imageName"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="row w-100 d-flex align-items-center">
                  <button type="button" class="btn btn-success col-md-5">
                    ثبت دیدگاه
                  </button>

                  <p class="col-md-6 offset-md-1 font-sm mb-0">
                    ثبت دیدگاه به معنی موافقت باقوانین انتشار
                    <a href="#" class="link-primary">آنلاین شاپ</a>
                    است.
                  </p>
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
import { ref } from "@vue/reactivity";
export default {
  name: "CommentWaiting",
  setup() {
    const waitingComments = ref([
      {
        id: "1",
        title: " کیف زنانه مدل سرخ پوستی برند XYZXCFGH",
        picture: "product-1.jpg",
      },
      {
        id: "2",
        title: "سویشرت مدل صورتی کتونی",
        picture: "product-4.jpg",
      },
      {
        id: "3",
        title: "سویشرت مدل صورتی کتونی",
        picture: "product-4.jpg",
      },
      {
        id: "4",
        title: " کیف زنانه مدل سرخ پوستی برند XYZXCFGH",
        picture: "product-1.jpg",
      },
    ]);
    return { waitingComments };
  },
  // mounted() {
  //    let recaptchaScript = document.createElement('script')
  //     recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
  //     document.head.appendChild(recaptchaScript)

  //   let input = document.getElementById("inputTag");
  //   let imageName = document.getElementById("imageName");

  //   input.addEventListener("change", () => {
  //     let inputImage = document.querySelector("input[type=file]").files[0];

  //     imageName.innerText = inputImage.name;
  //   });
  // },
};
</script>

<style lang="scss">
.comment {
  background: #eff9fc;
}
.left p {
  font-size: 9pt !important;
  margin-bottom: 0;
  line-height: 1.75rem;
}
.pointer {
  cursor: pointer;
}
.file {
  text-align: center;
  padding: 3%;
  border: thin solid black;

  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
  #imageName {
    color: green;
  }
}
</style>