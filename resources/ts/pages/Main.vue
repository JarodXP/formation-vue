<script setup lang="ts"></script>

<template>
  <header>
    <p>FORMATION VUE</p>
    <nav>
      <!--  WITH LINK: NOT RECOMMENDED
       <router-link to="/home">HOME</router-link>
      <router-link to="/tasks">TASK LIST</router-link>
     -->
      <router-link :to="{ name: 'home' }">HOME</router-link>
      <router-link :to="{ name: 'tasks' }">TASK LIST</router-link>
    </nav>
  </header>

  <router-view />
</template>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
}

header > p {
  margin-right: 10rem;
}

header > nav {
  display: flex;
  gap: 4rem;
}
</style>
