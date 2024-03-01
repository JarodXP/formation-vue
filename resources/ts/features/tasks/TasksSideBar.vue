<script setup lang="ts">
import { useTasksStore } from './tasksStore';
import { storeToRefs } from 'pinia';

const { selectedId } = storeToRefs(useTasksStore());
</script>

<template>
  <h1>TASKS SIDEBAR</h1>

  <div>{{ selectedId }}</div>

  <p></p>
</template>
