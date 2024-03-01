<script setup lang="ts">
import SimpleTask from './SimpleTask.vue';
import { useTasksStore } from './tasksStore';
import { storeToRefs } from 'pinia';

// TODO: Rationnaliser le type utilisé dans d'autres composants en le déplaçant dans un fichier à part
type Task = { id: number; name: string };

// On définit de façon statique des données pour les tâches

// DEMO: typer la variable et modifier un élément pour voir l'erreur
// IMPORTANT: pour les calls AJAX, utiliser Axios et regarder la library Tanstack Query.

const tasks = [
  { id: 1, name: 'Faire les courses', selected: false },
  { id: 2, name: 'Acheter du pain', selected: false },
  { id: 3, name: 'Acheter du lait', selected: false },
  { id: 4, name: 'Acheter du beurre', selected: false },
  { id: 5, name: 'Acheter du fromage', selected: false },
  { id: 6, name: 'Acheter du jambon', selected: false },
  { id: 7, name: 'Acheter des oeufs', selected: false },
  { id: 8, name: 'Acheter des fruits', selected: false },
  { id: 9, name: 'Acheter des légumes', selected: false },
  { id: 10, name: 'Acheter de la viande', selected: false },
  { id: 11, name: 'Acheter du poisson', selected: false },
  { id: 12, name: 'Acheter des pâtes', selected: false },
  { id: 13, name: 'Acheter du riz', selected: false },
  { id: 14, name: 'Acheter des pommes de terre', selected: false },
  { id: 15, name: 'Acheter des oignons', selected: false },
  { id: 16, name: "Acheter de l'ail", selected: false },
  { id: 17, name: "Acheter de l'huile", selected: false },
  { id: 18, name: 'Acheter du vinaigre', selected: false },
  { id: 19, name: 'Acheter du sel', selected: false },
  { id: 20, name: 'Acheter du poivre', selected: false },
  { id: 21, name: 'Acheter du sucre', selected: false },
  { id: 22, name: 'Acheter de la farine', selected: false },
  { id: 23, name: 'Acheter de la levure', selected: false },
  { id: 24, name: 'Acheter du lait', selected: false },
  { id: 25, name: 'Acheter du beurre', selected: false },
  { id: 26, name: 'Acheter du fromage', selected: false },
  { id: 27, name: 'Acheter du jambon', selected: false },
];

// On type la variable car elle est undefined, et typescript ne saura pas ce qu'on veut mettre dedans.
// BONNE PRATIQUE: utiliser le type Task['id'] au lieu de number: le résultat est le même mais si on change
// d'avis pour que l'id soit un string (ex: utilisation d'uuid), il n'y aura rien a retoucher de ce côté.

// DEMO: changer le type Task['id'] par Task['name'] pour voir l'erreur

const { selectedId } = storeToRefs(useTasksStore());

const selectTask = (taskId: Task['id']) => {
  selectedId.value = taskId;
};
</script>

<template>
  <div>
    <h1>TASK LIST</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <!-- L'event listener passe automatiquement le paramètre de l'event à la fonction appelée -->
        <!-- La Ref est automatiquement "depaquetée", pas besoin d'utiliser .value -->
        <SimpleTask
          :id="task.id"
          :name="task.name"
          :selected="task.id === selectedId"
          @select="selectTask"
        />
      </li>
    </ul>
  </div>
</template>
