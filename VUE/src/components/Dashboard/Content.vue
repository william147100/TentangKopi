<template>
  <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Dashboard</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <button class="btn btn-sm btn-outline-secondary">Share</button>
          <button class="btn btn-sm btn-outline-secondary">Export</button>
        </div>
        <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>
    <h1 class="pt-2 pb-2">Create blog</h1>
    <h1>Title</h1>
    <textarea name="title" id="title" cols rows="1"></textarea>
    <h1>Body</h1>
    <textarea name="mytextarea" id="mytextarea" cols="30" rows="18"></textarea>
    <a href class="btn btn-sm btn-primary">Publish</a>
  </main>
</template>

<script src="https://cdn.tiny.cloud/1/t2ddw7auslzfem0hcmx0huxt4svys0fyhj3ldm848t06t5qa/tinymce/5/tinymce.min.js"
    referrerpolicy="origin"></script>
<script>
export default {};
</script>

<style scoped>
[role="main"] {
  padding-top: 48px; /* Space for fixed navbar */
}
</style>