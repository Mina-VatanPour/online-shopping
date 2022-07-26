<template>
  <div class="row">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-wait-comment-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-wait-comment"
          type="button"
          role="tab"
          aria-controls="nav-wait-comment"
          aria-selected="true"
        >
          در انتظار ثبت نظر
        </button>
        <button
          class="nav-link"
          id="nav-comment-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-comment"
          type="button"
          role="tab"
          aria-controls="nav-comment"
          aria-selected="false"
        >
          دیدگاه های من
        </button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent ">
      <!-- tabContent 1 -->
      <div
        class="tab-pane fade show active mt-2 p-3"
        id="nav-wait-comment"
        role="tabpanel"
        aria-labelledby="nav-wait-comment-tab"
      >
        <CommentWaiting />
      </div>
      <!-- tabContent 2 -->
      <div
        class="tab-pane fade mt-4 p-3"
        id="nav-comment"
        role="tabpanel"
        aria-labelledby="nav-comment-tab"
      >
        <CommentRegisterd />
      </div>
    </div>
  </div>
</template>

<script>
import CommentWaiting from "./CommentWaiting.vue";
import CommentRegisterd from "./CommentRegisterd.vue";
export default {
  name: "UserComments",
  components: {
    CommentWaiting,
    CommentRegisterd,
  },
};
</script>

<style scoped lang="scss">
.nav-link,
.nav-link:hover {
  color: #6c757d !important;
}
.nav-link.active {
  color: #e6123d !important;
  /* .badge {
    background: #e6123d !important;
    color: #fff !important;
  } */
}
</style>