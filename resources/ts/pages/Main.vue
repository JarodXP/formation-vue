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

  <main>
    <aside>
      <router-view name="aside" />
    </aside>
    <div>
      <router-view />
    </div>
  </main>
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

main {
  display: grid;
  grid-template-columns: 20% 80%;
}

aside {
  height: 100vh;
  background-color: #24f739;
  padding: 10px;
}
</style>
