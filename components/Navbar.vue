<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/"> Flight Booking </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">
                <a class="nav-link" href="#"
                  >Home <span class="sr-only">(current)</span></a
                >
              </router-link>
            </li>
          </ul>
          <div class="col-md-6">
            <div class="d-flex justify-content-end">
              <div class="header-buttons d-flex">
                <template v-if="authenticated">
                  <p class="mr-3">{{ user.username }}</p>
                  <a v-on:click="logout_user" class="red-bg"> Sign out </a>
                </template>

                <template v-else>
                  <router-link class="blue-bg" to="/login">
                    Sign in
                  </router-link>
                </template>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters({
      authenticated: 'authenticated',
      user: 'user',
    }),
  },
  methods: {
    ...mapActions({
      logOutAction: 'logOut',
      attempt: 'attempt',
    }),
    logout_user() {
      this.logOutAction().then(() => {
        this.$router.replace({
          path: '/',
        })
      })
    },
  },
  mounted() {
    this.attempt(sessionStorage.getItem('jwt'))
  },
}
</script>
