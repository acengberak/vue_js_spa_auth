<template>
  <div class="flex flex-wrap w-full justify-center items-center pt-56">
    <div class="flex flex-wrap max-w-xl">
      <div class="p-2 text-2xl text-gray-800 font-semibold">
        <h1>Register an account</h1>
      </div>
      <!-- Name -->
      <div class="p-2 w-full">
        <label for="name" class="w-full">Name</label>
        <span class="w-full text-red-500" v-if="errors.name">{{errors.name[0]}}</span>
        <input
          type="text"
          class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none"
          placeholder="Name"
          v-model="form.name"
        />
      </div>
      <!-- Email -->
      <div class="p-2 w-full">
        <label for="email" class="w-full">Your e-mail</label>
        <input
          type="email"
          class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none"
          placeholder="Email"
          v-model="form.email"
        />
      </div>
      <!-- Password -->
      <div class="p-2 w-full">
        <label for="password" class="w-full">Password</label>
        <!-- <span class="w-full text-red-500" v-if="errors.name">{{errors.name[0]}}</span> -->
        <input
          type="password"
          class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Password"
          v-model="form.password"
          name="password"
        />
      </div>
      <div class="p-2 w-full">
        <label for="confirm_password" class="w-full">Confirm Password</label>
        <input
          type="password"
          class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
          placeholder="Confirm Password"
          v-model="form.password_confirmation"
          name="password_confirmation"
        />
      </div>
      <div class="p-2 w-full mt-4">
        <button
          @click.prevent="saveForm"
          type="submit"
          class="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  methods: {
    saveForm() {
      axios
        .post("api/registeraccount", this.form)
        .then(() => {
          console.log("saved");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style>
</style>