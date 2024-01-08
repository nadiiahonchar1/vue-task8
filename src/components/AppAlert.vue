<template>
  <div class="alert" :class="type">
    <h3 class="alert-title">{{ title }}</h3>
    <p class="alert-text">{{ text }}</p>
    <button class="btn" :class="type" v-if="closable" @click="$emit('close')">
      Close
    </button>
  </div>
</template>

<script>
export default {
  emits: ["close"],
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(val) {
        return ["primary", "danger", "warning"].includes(val);
      },
    },
  },
};
</script>

<style scoped>
.alert {
  border: 2px double white;
  box-shadow: 5px 5px 30px 5px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 5px 5px 30px 5px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 5px 5px 30px 5px rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
}
.primary {
  background: linear-gradient(to right, blue, 5%, yellow, 75%, white);
  color: blue;
}
.danger {
  background: linear-gradient(to right, red, 5%, yellow, 75%, white);
  color: red;
}
.warning {
  background: linear-gradient(to right, orange, 5%, yellow, 75%, white);
  color: orange;
}
</style>
