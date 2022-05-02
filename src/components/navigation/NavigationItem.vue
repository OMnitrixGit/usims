<template>
  <div>
    <router-link :to="{ path }">{{ name }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["name", "path"],
};
</script>

<style></style>
