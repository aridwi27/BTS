<template>
  <div class="container">
    <div class="card w-75 h-100 py-5 mx-auto" style="border-radius: 30px">
      <div class="card-body row">
        <div class="col-12 px-5">
          <form class="form" @submit.prevent="login()">
            <h3 class="text-center fonttype">Login</h3>
            <div class="form-group">
              <label for="username">Email :</label><br />
              <input
                type="text"
                id="username"
                v-model="email"
                required
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Password:</label><br />
              <input
                type="password"
                v-model="password"
                required
                name="password"
                id="password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input type="submit" value="Login" class="btn btn-info btn-md" />
            </div>
            <div id="register-link" class="text-right">
              <router-link to="/register" class="text-info"
                >Register here</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      name: 'ari',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      btnLogin: 'register/actLogin'
    }),
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.btnLogin(data).then((response) => {
        console.log(response)
      })
    }
  },
  computed: {
  }
}
</script>
