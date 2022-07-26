<template>
  <!-- اینجا باید api  موقعیت یابی قرار بگیره -->
  <!-- Modal -->
  <div
    class="modal fade p-1"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header text-start">
          <h5 class="modal-title" id="exampleModalLabel">
            آدرس جدید
            <br />
            <p class="text-muted font-sm my-1">
              موقعیت مکانی آدرس را وارد کنید.
            </p>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="row modal-body d-flex justify-content-center">
          <div class="row input-group input-group mb-3">
            <input
              type="text"
              class="col-md-11 form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-md"
              required
            />
            <span class="col-md-1 input-group-text" id="inputGroup-sizing-md"
              ><i class="bi bi-search"></i
            ></span>
          </div>
          <img
            :src="require('@/assets/img/google-map.png')"
            alt=""
            class="row img-fluid"
          />
        </div>
        <div
          class="modal-footer d-flex justify-content-between align-items-center"
        >
          <p class="text-muted font-sm text-start">
            مرسوله های شما به این موقعیت ارسال خواهد شد.
          </p>
          <button
            type="button"
            class="btn btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            تایید و ادامه
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal2 -->
  <div
    class="modal fade"
    id="exampleModal2"
    tabindex="-1"
    aria-labelledby="exampleModalLabel2"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel2">
            <a href="#"> <i class="bi bi-arrow-right"></i></a>
            جزئیات آدرس
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body px-4 text-start">
          <p class="my-2">
            نشانی پستی
            <span class="text-danger">*</span>
          </p>
          <div class="mb-3">
            <textarea
              class="form-control text-start font-sm"
              id="exampleFormControlTextarea1"
              rows="3"
            >
آدرسی که روی نقشه انتخاب شده مثلا : 
            مشهد ، ابوطالب 25 ، پلاک 216</textarea
            >
          </div>
          <p class="text-muted font-sm">
            آدرس بالا بر اساس موقعیت انتخابی شما وارد شده است.
          </p>
          <a href="#" class="text-info font-sm">
            اصلاح موقعیت مکانی روی نقشه
            <i class="bi bi-caret-left"></i
          ></a>
          <hr class="text-muted" />
          <div class="row">
            <div class="col-md-4">
              <p class="my-2">
                استان
                <span class="text-danger">*</span>
              </p>
              <select
                class="form-select font-sm"
                aria-label="Default select example"
              >
                <option selected class="text-muted">
                  استان را انتخاب کنید
                </option>
                <option value="1">تهران</option>
                <option value="2">مشهد</option>
                <option value="3">اصفهان</option>
              </select>
            </div>
            <div class="col-md-4">
              <p class="my-2">
                شهر
                <span class="text-danger">*</span>
              </p>
              <select
                class="form-select font-sm"
                aria-label="Default select example"
              >
                <option selected class="text-muted">شهر را انتخاب کنید</option>
                <option value="1">کرج</option>
                <option value="2">تربت حیدریه</option>
                <option value="3">گلپایگان</option>
              </select>
            </div>
            <div class="col-md-4">
              <p class="my-2">
                محله
                <span class="text-danger">*</span>
              </p>
              <select
                class="form-select font-sm"
                aria-label="Default select example"
              >
                <option selected class="text-muted">محله را انتخاب کنید</option>
                <option value="1">کاشانی</option>
                <option value="2">مظفریه</option>
                <option value="3">شهرک</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-4">
              <p class="my-2">
                پلاک
                <span class="text-danger">*</span>
              </p>
              <input type="text" class="form-control mb-2 font-sm" />
            </div>
            <div class="col-md-4">
              <p class="my-2">واحد</p>
              <input type="text" class="form-control mb-2 font-sm" />
            </div>
            <div class="col-md-4">
              <p class="my-2">
                کد پستی
                <span class="text-danger">*</span>
              </p>
              <input type="text" class="form-control mb-2 font-sm" />
            </div>
          </div>
          <hr class="text-muted" />
          <div class="row">
            <!-- اگه چک باکس تیک بخوره باید اینپوت های نتم و نام خانوادگی و تلفن و موبایل پر شه مث دیجی کالا -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label font-md" for="flexCheckDefault">
                گیرنده خودم هستم
              </label>
            </div>
            <div class="row mb-3">
              <div class="col-md-3">
                <p class="my-2">
                  نام گیرنده
                  <span class="text-danger">*</span>
                </p>
                <input type="text" class="form-control mb-2 font-sm" />
              </div>
              <div class="col-md-3">
                <p class="my-2">
                  نام خانوادگی گیرنده
                  <span class="text-danger">*</span>
                </p>
                <input type="text" class="form-control mb-2 font-sm" />
              </div>
              <div class="col-md-3">
                <p class="my-2">تلفن ثابت</p>
                <input type="text" class="form-control mb-2 font-sm" />
              </div>
              <div class="col-md-3">
                <p class="my-2">
                  شماره موبایل
                  <span class="text-danger">*</span>
                </p>
                <input type="text" class="form-control mb-2 font-sm" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-danger"
              data-bs-dismiss="modal"
            >
              انصراف
            </button>
            <button type="button" class="btn btn-sm btn-success">
              ثبت اطلاعات
            </button>
          </div>
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