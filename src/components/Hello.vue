<template>
  <div class="hello">
    <h1>hello</h1>
    <img v-show="profile.name" :src="profilePicture" alt="profile" class="profile-picture"/>
    <h1 v-html="msg"></h1>
  </div>
</template>

<script>
export default {
  props: ['profile'],
  name: 'hello',
  computed: {
    msg () {
      if (this.profile.name) {
        return `Welcome <b><i> ${this.profile.name} </i></b> to Vue.js App`
      } else {
        return 'Login Facebook to Enjoy the App'
      }
    },
    profilePicture () {
      return (this.profile.id) ? `https://graph.facebook.com/${this.profile.id}/picture?width=300` : `/static/man.gif`
    }
  }
}
</script>