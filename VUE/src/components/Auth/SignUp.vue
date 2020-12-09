<template>
  <div class="col">
    <form class="form-signup" @submit.prevent="signupUser">
      <label class="label">
        <h1 class="h3 mb-3">Sign up</h1>
      </label>
      <label for="inputEmail" class="label sr-only">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control mb-2"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputEmail" class="label sr-only">Re-enter Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control mb-2"
        placeholder="Re-enter Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="label sr-only">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="form-control mb-2"
        placeholder="Password"
        required
      />
      <label for="inputPassword" class="label sr-only">Re-enter Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Re-enter Password"
        required
      />
      <div class="checkbox mb-3">
        <label class="label">
          <input type="checkbox" value="remember-me" /> Agree with our terms & conditions
        </label>
      </div>
      <button
        class="label btn btn-lg btn-outline-light btn-block"
        type="submit"
        @click="signupUser"
      >Sign up</button>
      <p class="mt-2 text-muted">
        Sudah punya akun? Klik
        <router-link :to="{ name:'SignIn' }">
          <a href="#" @click="signup">disini</a>
        </router-link>
      </p>
      <p class="mt-3 mb-3 text-muted">Tentang Kopi © 2020</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  props: {
    msg: String
  },
  data() {
    return {
      register: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signupUser() {
      this.$http.post("http://localhost:8081/user", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
.form-signup {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: 65px;
}

.form-signup .h3 {
  font-size: 3rem;
  font-weight: 10;
}

.form-signup .checkbox {
  font-weight: 400;
}

.form-signup .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  border-color: whitesmoke;
  background-color: rgb(0, 0, 0, 0.3);
  border-left: black;
  border-right: black;
  border-top: black;
  border-bottom: black;
}

.form-signup .form-control:focus {
  z-index: 2;
  border-color: black;
  background-color: rgb(0, 0, 0, 0.6);
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.9);
}

.form-signup input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>