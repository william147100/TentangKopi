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
    <input type="textarea" name="title" id="title" v-model="blogtitle" />
    <h1>Body</h1>
    <vue-editor v-model="blogbody" />
    <a href class="btn btn-sm btn-primary" @click="post">Publish</a>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  components: {},
  data() {
    return {
      blogtitle: "",
      blogbody: ""
    };
  },
  mounted() {
    axios.get("http://localhost:8000/blogs");
  },
  methods: {
    post() {
      axios.post("http://localhost:8000/blogs", {
        title: this.blogtitle,
        body: this.blogbody
      });
    }
  }
};
</script>

<style scoped>
[role="main"] {
  padding-top: 48px; /* Space for fixed navbar */
}
</style>