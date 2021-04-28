<template>
  <div class="container">
    <div class="card w-75 h-100 py-5 mx-auto" style="border-radius: 30px">
      <div class="card-body row">
        <div class="col-12 px-5">
          <form class="form" @submit.prevent="register()">
            <h3 class="text-center fonttype">Register</h3>
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
              <label for="username">Username :</label><br />
              <input
                type="text"
                v-model="username"
                required
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Register"
                class="btn btn-info btn-md"
              />
            </div>
            <div id="register-link" class="text-right">
              <router-link to="/" class="text-info">Login here</router-link>
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
      email: '',
      password: '',
      username: ''
    }
  },
  methods: {
    ...mapActions({
      registered: 'register/actRegister'
    }),
    register () {
      const data = {
        email: this.email,
        password: this.password,
        username: this.username
      }
      this.registered(data).then((response) => {
      })
    }
  },
  computed: {
  }
}
</script>
