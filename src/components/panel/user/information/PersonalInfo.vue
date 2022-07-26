<template>
  <div
    class="
      row
      font-sm
      d-flex
      justify-content-between
      mb-2
      border border-warning
      rounded
      p-2
      shadow-sm
    "
  >
    <div class="right col-md-9 font-sm text-warning">
      <i class="bi bi-exclamation-circle-fill me-1"></i>
      برای افزایش امنیت حساب کاربری خود و جلوگیری از سوءاستفاده، لطفا هویت خود
      را تایید کنید
    </div>
    <div class="left col-md-3 text-end fw-bold">
      <router-link :to="{ name: '' }" class="text-info">
        تایید هویت
        <i class="bi bi-caret-left"></i>
      </router-link>
    </div>
  </div>
  <!-- row1 -->
  <div class="row border-bottom p-3 d-flex flex-nowrap">
    <div class="right col-md-6 border-end">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted">نام و نام خانوادگی :</label>
          </p>
          <p>{{ personalInfo.name }}</p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{ name: 'edit-info', params: { param: personalInfo.name } }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="left col-md-6 ms-2">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted"> کد ملی :</label>
          </p>
          <p>{{ personalInfo.melliCode }}</p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{
              name: 'edit-info',
              params: { param: personalInfo.melliCode },
            }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- row2 -->
  <div class="row border-bottom p-3 d-flex flex-nowrap">
    <div class="right col-md-6 border-end">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted"
              >شماره موبایل :
              <span class="badge bg-success font-xs p-2">تایید شده</span>
            </label>
          </p>
          <p>{{ personalInfo.mobile }}</p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{ name: 'edit-info', params: { param: personalInfo.mobile } }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="left col-md-6 ms-2">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted">ایمیل : </label>
          </p>
          <p>{{ personalInfo.email }}</p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{ name: 'edit-info', params: { param: personalInfo.email } }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- row3 -->
  <div class="row border-bottom p-3 d-flex flex-nowrap">
    <div class="right col-md-6 border-end">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted"> رمز عبور :</label>
          </p>
          <p>{{ personalInfo.password }}</p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{
              name: 'edit-info',
              params: { param: personalInfo.password },
            }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="left col-md-6 ms-2">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted">
              روش بازگردادن پول من :
              <span class="badge bg-success font-xs p-2">تایید شده</span>
            </label>
          </p>
          <p>
            به شبای :
            {{ personalInfo.returnMoney }}
          </p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{
              name: 'edit-info',
              params: { param: personalInfo.returnMoney },
            }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- row4 -->
  <div class="row p-3 border-bottom d-flex flex-nowrap">
    <div class="right col-md-6 border-end">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted">تاریخ تولد : </label>
          </p>
          <p>{{ personalInfo.birthday }}</p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{
              name: 'edit-info',
              params: { param: personalInfo.birthday },
            }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="left col-md-6 ms-2">
      <div class="row d-flex gustify-content-between align-items-center">
        <div class="col-md-9">
          <p>
            <label class="text-muted"> شغل : </label>
          </p>
          <p>{{ personalInfo.job }}</p>
        </div>
        <div class="col-md-3 text-center">
          <router-link
            :to="{ name: 'edit-info', params: { param: personalInfo.job } }"
          >
            <i class="bi bi-pencil-square"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- row5 -->
  <div class="row p-3 mt-3 border rounded">
    <h6 class="fw-bold px-0">اطلاعات حقوقی</h6>
    <p class="text-muted px-0 mt-2">
      این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و گواهی
      ارزش‌افزوده) دارند.
    </p>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn btn-outline-info col-md-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      ثبت اطلاعات حقوقی
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="exampleModalLabel">
              افزودن اطلاعات حقوقی
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body px-4">
            <p class="my-2">
              نام سازمان
              <span class="text-danger">*</span>
            </p>
            <input type="text" class="form-control" />
            <p class="my-2">کد اقتصادی</p>
            <input type="text" class="form-control" />
            <p class="my-2">
              شناسه ملی
              <span class="text-danger">*</span>
            </p>
            <input type="text" class="form-control" />
            <p class="my-2">
              شناسه ثبت
              <span class="text-danger">*</span>
            </p>
            <input type="text" class="form-control" />
            <p class="my-2">استان (محل دفتر مرکزی)</p>
            <select
              class="form-select font-sm"
              aria-label="Default select example"
            >
              <option selected class="text-muted">استان را انتخاب کنید</option>
              <option value="1">تهران</option>
              <option value="2">مشهد</option>
              <option value="3">اصفهان</option>
            </select>
            <p class="my-2">شهر (محل دفتر مرکزی)</p>
            <select
              class="form-select font-sm"
              aria-label="Default select example"
            >
              <option selected class="text-muted">شهر را انتخاب کنید</option>
              <option value="1">کرج</option>
              <option value="2">تربت حیدریه</option>
              <option value="3">گلپایگان</option>
            </select>

            <p class="my-2">
              شماره تلفن ثابت
              <span class="text-danger">*</span>
            </p>
            <input type="text" class="form-control mb-2" />
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
import { ref } from "vue";
export default {
  name: "PersonalInfo",
  setup() {
    const personalInfo = ref({
      name: "مینا وطن پور",
      melliCode: "0690588119",
      mobile: "09395087450",
      email: "mv.manaiger1996@gmail.com",
      password: "1234567890",
      returnMoney: "IR۴۹۰۱۸۰۰۰۰۰۰۰۰۰۹۸۲۴۹11111",
      birthday: "75/05/14",
      job: "توسعه دهنده فرانت",
    });
    return { personalInfo };
  },
};
</script>

<style>
</style>