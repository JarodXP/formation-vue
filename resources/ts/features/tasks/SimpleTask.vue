<script setup lang="ts">
// DEMO: faire un type Task au lieu de séparer
type Props = {
  id: number;
  name: string;
  selected: boolean;
};

type Events = {
  (e: 'select', value: number): void;
};

// Bonne pratique!: les props définies par defineProps sont utilisables telles quelles dans le template
// Mais en leur attribuant une variable, on les identifie par rapport aux atres variables définies dans le script.
const props = defineProps<Props>();
const emit = defineEmits<Events>();
</script>

<template>
  <div
    :class="['tag', props.selected ? 'selected' : '']"
    @click="emit('select', props.id)"
  >
    <!-- 
        TIPS: emits est également définie par Vue de façon globale et peut être appelé par $emit()
        pratique pour un évènement qui n'est pas défini dans le script (ex: click)"
    -->
    <span>{{ props.name }}</span>
  </div>
</template>

<style scoped>
.tag {
  background-color: #d205a9;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tag.selected {
  background-color: #5d7fee;
}
</style>
