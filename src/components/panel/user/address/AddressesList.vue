<template>
  <div
    class="row d-flex flex-nowrap justify-content-between align-items-center"
  >
    <div class="right col-md-6">
      <h5>لیست آدرس ها :</h5>
    </div>
    <div class="left col-md-6 text-end px-0">
      <router-link :to="{ name: 'new-address' }">
        <button type="button" class="btn btn-outline-success font-md">
          ثبت آدرس جدید
          <i class="bi bi-geo-alt-fill"></i>
        </button>
      </router-link>
    </div>
  </div>
  <div
    class="row border-dotted mt-4 p-3 rounded"
    v-for="(address, index) in addressInfo"
    :key="index"
  >
    <div class="right col-md-7">
      <p class="fw-bold">
        آدرس :
        {{ address.location }}
      </p>
      <p class="text-muted fw-bold font-sm">
        <i class="bi bi-envelope me-2"></i>
        کد پستی :
        {{ address.postiCode }}
      </p>
      <p class="text-muted fw-bold font-sm">
        <i class="bi bi-telephone me-2"></i>
        موبایل | تلفن :
        {{ address.mobile }} | {{ address.phone }}
      </p>
      <p class="text-muted fw-bold font-sm">
        <i class="bi bi-person me-2"></i>
        گیرنده :
        {{ address.resiver }}
      </p>
    </div>
    <div class="right col-md-5 text-end">
      <img
        :src="require('@/assets/img/location.jpg')"
        alt=""
        class="img-fluid w-50"
      />
      <p class="mt-5">
        <router-link :to="{ name: 'edit-address', params: { id: address.id } }">
          <button
            type="button"
            class="btn btn-sm btn-outline-success me-2 font-xs"
          >
            <i class="bi bi-pencil"></i>
            ویرایش
          </button>
        </router-link>
        <button type="button" class="btn btn-sm btn-outline-danger font-xs">
          <i class="bi bi-trash3"></i>
          حذف
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Addresseslist",
  setup() {
    const addressInfo = ref([
      {
        id: "1",
        location: "مشهد ، خ ابوطالب ، ابوطالب 25 ،پلاک 216 ، طبقه همکف :)",
        postiCode: "121212121000",
        phone: "05132236598",
        mobile: "09395087450",
        resiver: "مینا وطن پور",
      },
      {
        id: "2",
        location: "تربت حیدریه ، خ مظفریه ، مظفریه 28 ،پلاک 9 ، طبقه دو :)",
        postiCode: "121212121000",
        phone: "05152237458",
        mobile: "09395087450",
        resiver: "سجاد نوری",
      },
    ]);
    return { addressInfo };
  },
};
</script>

<style scoped lang="scss">
.border-dotted {
  border: 2px dotted #ccc;
}
</style>