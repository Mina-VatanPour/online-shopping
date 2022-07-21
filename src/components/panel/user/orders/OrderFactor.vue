<template>
  <div class="container mt-4 mb-4  p-2 border">
    <div class="row d-flex justify-content-between align-items-center px-4">
      <div class="right col-md-2">
        <img
          :src="require('@/assets/img/logo.png')"
          class="img-fluid w-50"
          alt=""
        />
      </div>
      <div class="left col-md-3 text-end">
        <button type="button" class="btn btn-success">دانلود | پرینت</button>
      </div>
    </div>
    <hr />
    <!-- seller Information -->
    <div class="row px-4 py-2 ms-2">
      <h5>
        <p class="fw-bold text-center">صورت حساب الکترونیکی فروش</p>
      </h5>
      <div
        class="row d-flex flex-nowrap justify-content-center align-items-center"
      >
        <div class="col-md-1 border border-dark bg-light p-3 me-2 text-center">
          <span>فروشنده</span>
        </div>
        <div class="col-md-8 border border-dark p-3 me-2">
          <ul class="row my-2 text-start ps-0">
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> فروشنده :</label>
              {{ sellerInfo.name }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> کد ملی :</label>
              {{ sellerInfo.melliCode }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> شماره ثبت :</label>
              {{ sellerInfo.recordNumber }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> شماره اقتصادی :</label>
              {{ sellerInfo.economicalNumber }}
            </li>
          </ul>

          <ul class="row my-2 text-start ps-0">
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> نشانی :</label>
              {{ sellerInfo.address }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> کد پستی :</label>
              {{ sellerInfo.codePosti }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> تلفن ثابت | همراه :</label>
              {{ sellerInfo.telephone }} |{{ sellerInfo.mobile }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> فکس :</label>
              {{ sellerInfo.fax }}
            </li>
          </ul>
        </div>
        <div class="col-md-3 border border-dark p-3">
          <p class="d-flex justify-content-between align-items-center font-sm">
            <label class="fw-bold me-2"> شماره فاکتور : </label>
            {{ sellerInfo.factorNumber }}
          </p>
          <p class="d-flex justify-content-between align-items-center font-sm">
            <label class="fw-bold me-2"> تاریخ :</label>
            {{ sellerInfo.date }}
          </p>
          <p class="d-flex justify-content-between align-items-center font-sm">
            <label class="fw-bold me-2"> پیگیری :</label>
            {{ sellerInfo.followUp }}
          </p>
        </div>
      </div>
    </div>
    <!-- buyer Information -->
    <div class="row px-4 pb-4 pt-0 ms-2">
      <div
        class="row d-flex flex-nowrap justify-content-center align-items-center"
      >
        <div class="col-md-1 border border-dark bg-light p-3 me-2 text-center">
          <span>خریدار</span>
        </div>
        <div class="col-md-8 border border-dark p-3 me-2">
          <ul class="row my-2 text-start ps-0">
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> خریدار :</label>
              {{ buyerInfo.name }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> کد ملی :</label>
              {{ buyerInfo.melliCode }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> شماره ثبت :</label>
              {{ buyerInfo.recordNumber }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> شماره اقتصادی :</label>
              {{ buyerInfo.economicalNumber }}
            </li>
          </ul>

          <ul class="row my-2 text-start ps-0">
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> نشانی :</label>
              {{ buyerInfo.address }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> کد پستی :</label>
              {{ buyerInfo.codePosti }}
            </li>
            <li class="col-md-3 font-sm">
              <label class="fw-bold me-2"> تلفن ثابت | همراه :</label>
              {{ buyerInfo.telephone }} |{{ sellerInfo.mobile }}
            </li>
          </ul>
        </div>
        <div class="col-md-3 border border-dark p-3">
          <p class="d-flex justify-content-between align-items-center font-sm">
            <label class="fw-bold me-2"> شماره مالیاتی : </label>
            {{ buyerInfo.taxNumber }}
          </p>
          <p class="d-flex justify-content-between align-items-center font-sm">
            <label class="fw-bold me-2"> سریال حافظه مالیاتی :</label>
            {{ buyerInfo.taxMemorySeries }}
          </p>
          <p class="d-flex justify-content-between align-items-center font-sm">
            <label class="fw-bold me-2"> سریال پایانه فروشگاهی :</label>
            {{ buyerInfo.shoppingTerminalSeries }}
          </p>
        </div>
      </div>
    </div>
    <!-- orders table -->
    <div class="row px-4 py-2">
      <div class="table-responsive">
        <table
          class="
            table table-bordered
            border-dark
            font-sm
            text-center
            align-middle
          "
        >
          <thead>
            <tr class="bg-light align-middle">
              <th scope="col">ردیف</th>
              <th scope="col">شناسه کالا یا خدمت</th>
              <th scope="col">شرح کالا یا خدمت</th>
              <th scope="col">آمر</th>
              <th scope="col">تعداد</th>
              <th scope="col">مبلغ واحد (ریال)</th>
              <th scope="col">مبلغ کل (ریال)</th>
              <th scope="col">تخفیف (ریال)</th>
              <th scope="col">مبلغ کل پس از تخفیف (ریال)</th>
              <th scope="col">جمع مالیات و عوارض ارزش افزوده (ریال)</th>
              <th scope="col">جمع کل پس از تخفیف و مالیات و عوارض (ریال)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(orderInfo, index) in ordersInfos" :key="index">
              <th scope="row">{{ orderInfo.row }}</th>
              <td>{{ orderInfo.productOrServiceId }}</td>
              <td>{{ orderInfo.description }}</td>
              <td>{{ orderInfo.shopper }}</td>
              <td>{{ orderInfo.count }}</td>
              <td>{{ orderInfo.unitAmount }}</td>
              <td>{{ orderInfo.totalAmount }}</td>
              <td>{{ orderInfo.discount }}</td>
              <td>{{ orderInfo.totalAmountAfterDiscount }}</td>
              <td>{{ orderInfo.totalTaxesAndValueAddedDuties }}</td>
              <td>{{ orderInfo.totalSumAfterDiscountAndTaxesAndDuties }}</td>
            </tr>
            <tr>
              <td colspan="4" class="fw-bold">جمع کل ( خریدها + هزینه پست )</td>
              <td>3</td>
              <td>۱,۰۴۲,۸۰۰</td>
              <td>۱,۰۴۲,۸۰۰</td>
              <td>۵۰۰,۰۰۰</td>
              <td>۵۴۲,۸۰۰</td>
              <td>0</td>
              <td>۵۴۲,۸۰۰</td>
            </tr>
            <tr class="bg-light">
              <td colspan="6" class="fw-bold"></td>
              <td colspan="4">
                جمع کل پس از کسر تخفیف با احتساب مالیات و عوارض (ریال):
              </td>
              <td>۵۴۲,۸۰۰</td>
            </tr>
            <!-- <tr class="bg-light">
              <td colspan="4">اعتبار مالیاتی قابل استفاده توسط خریدار</td>
              <td colspan="7"></td>
            </tr> -->
            <tr>
              <td colspan="11" class="p-3">
                <div class="flex row text-start">
                  <div class="flex-grow col-md-3">مهر و امضای فروشنده:</div>
                  <div class="flex-grow col-md-3">تاریخ و ساعت تحویل:</div>
                  <div class="flex-grow col-md-3">روش‌های پرداخت:</div>
                  <div class="flex-grow col-md-3">مهر و امضای خریدار:</div>
                </div>
                <div class="flex row text-start mt-3">
                  <div class="flex-grow col-md-3">
                    <img
                      class="img-fluid w-50"
                      :src="require('@/assets/img/factor/sellerMohr.jpg')"
                    />
                  </div>
                  <div class="flex-grow col-md-3">
                    15 شهریور 1401 ،
                    <br />
                    ساعت 9-12
                  </div>

                  <div class="flex-grow col-md-3">اعتباری : ۷۹۲,۸۰۰</div>
                  <div class="flex-grow col-md-3">
                    <img
                      class="img-fluid w-25"
                      :src="require('@/assets/img/factor/buyerMohr.jpg')"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "OrderFactor",
  setup() {
    const sellerInfo = ref({
      name: "شركت نوآوران فن‌آوازه (سهامی خاص) ",
      melliCode: "0690588119",
      recordNumber: "12345678",
      economicalNumber: "123450",
      address: "مشهد ، شرکت میجاد",
      codePosti: "1111111111",
      telephone: "05132018",
      mobile: "09395087450",
      fax: "357951",
      factorNumber: "123",
      date: "14/05/1401",
      followUp: "520",
    });
    const buyerInfo = ref({
      name: "مینا وطن پور ",
      melliCode: "0690588119",
      recordNumber: "-",
      economicalNumber: "-",
      address: " مشهد، خیابان ابوطالب، ابوطالب 25، طبقه همکف - پلاک 216",
      codePosti: "1111111111",
      telephone: "-",
      mobile: "09395087450",
      taxNumber: "123000",
      taxMemorySeries: "S05400100000100",
      shoppingTerminalSeries: "A05400100000190",
    });
    const ordersInfos = ref([
      {
        row: "1",
        productOrServiceId: "12345",
        description:
          " دفتر برنامه ریزی مستر راد طرح کاکتوس کد EXO-1512 | چند رنگ | گارانتی اصالت و سلامت فیزیکی کا",
        shopper: "آمر",
        count: "1",
        unitAmount: "۲۵۰,۰۰۰",
        totalAmount: "۲۵۰,۰۰۰ ",
        discount: "۱۱۹,۸۷۰ ",
        totalAmountAfterDiscount: "۱۳۰,۱۳۰ ",
        totalTaxesAndValueAddedDuties: "0",
        totalSumAfterDiscountAndTaxesAndDuties: "۱۳۰,۱۳۰ ",
      },
      {
        row: "2",
        productOrServiceId: "67890",
        description:
          " دفتر برنامه ریزی مستر راد طرح جدید کاکتوس مدل پالت کد 1587 | هفت رنگ | گارانتی اصالت و سلامت فیزیکی کالا",
        shopper: "آمر",
        count: "1",
        unitAmount: "۲0۰,۰۰۰",
        totalAmount: "۲0۰,۰۰۰ ",
        discount: "۹۵,۸۹۶  ",
        totalAmountAfterDiscount: "۱۰۴,۱۰۴ ",
        totalTaxesAndValueAddedDuties: "0",
        totalSumAfterDiscountAndTaxesAndDuties: "۱۰۴,۱۰۴ ",
      },
      {
        row: "*",
        productOrServiceId: "100",
        description: "خدمات بسته‌بندی، بیمه حمل و ارسال",
        shopper: "پست مرکزی",
        count: "1",
        unitAmount: "۵۹۲,۸۰۰ ",
        totalAmount: "۵۹۲,۸۰۰ ",
        discount: "۲۸۴,۲۳۴   ",
        totalAmountAfterDiscount: "۳۰۸,۵۶۶ ",
        totalTaxesAndValueAddedDuties: "0",
        totalSumAfterDiscountAndTaxesAndDuties: "۳۰۸,۵۶۶ ",
      },
    ]);
    return { sellerInfo, buyerInfo, ordersInfos };
  },
};
</script>

<style>
</style>