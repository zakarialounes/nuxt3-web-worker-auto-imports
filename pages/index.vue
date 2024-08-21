<script setup lang="ts">
import ExampleWorker from '~/workers/example?worker';

const abc = ref(null);

const onClickShowAbcFromMainThread = () => {
  abc.value = useAbc().toUpperCase();
};

const onClickShowAbcFromViteWorker = () => {
  const worker = new ExampleWorker();

  worker.onmessage = (e) => {
    abc.value = e.data;
    worker.terminate();
  };

  worker.onerror = (e) => {
    worker.terminate();
  };

  worker.postMessage('');
};
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <button @click="onClickShowAbcFromMainThread">
      Show ABC (from main thread)
    </button>
    <button v-if="abc" @click="abc = null">
      --------------- Clear ---------------
    </button>
    <button @click="onClickShowAbcFromViteWorker">
      Show ABC (from vite worker)
    </button>
  </div>
  <p v-if="abc">Result: {{ abc }}</p>
</template>
