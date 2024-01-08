<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="This is warning"
      title="Warning!"
      type="danger"
      @close="alert = false"
      closable
    ></app-alert>
    <div class="cadr">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Hide" : "Show" }} alert
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert.vue";

export default {
  name: "App",
  components: { AppAlert },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: rgb(255 255 0 / 30%);
}

.container {
  margin: 0 auto;
  width: 50vw;
}

.card {
  border: 1px solid rgb(87, 87, 199);
  border-radius: 10px;
}

.card-title {
  margin-bottom: 10px;
}

.card {
  margin-bottom: 5px;
  padding: 5px 20px;
}
.centeder {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.btn {
  display: inline-block;
  min-width: 100px;
  padding: 5px;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #2756a8ad;
  color: #2756a8ad;
  cursor: pointer;
}

.danger {
  color: rgb(219, 29, 29);
  border: 1px solid red;
}

.primary,
.btn:hover {
  border: 1px solid #2756a8ad;
  background-color: #2756a8ad;
  color: white;
}

.btn:hover {
  border-color: #022950;
}

[disabled] {
  background-color: #ccc7ba;
}

.danger:hover {
  color: rgb(255 151 0);
  border: 1px solid rgb(255 151 0);
}
</style>
