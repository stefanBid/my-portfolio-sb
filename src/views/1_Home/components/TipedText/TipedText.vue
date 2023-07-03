<template>
  <div class="w-fit">
    <h1> {{ typedText }}_</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

//Interface for props
export interface TipedTextProps {
  words: string[];
  writeSpeed?: number;
  deleteSpeed?: number;
  pauseSpeed?: number;
}

//props
const props = withDefaults(defineProps<TipedTextProps>(), {
  writeSpeed: 100,
  deleteSpeed: 50,
  pauseSpeed: 1000,
});

//Data
const typedText = ref('');
const currentIndex = ref(0);

//Methods

// Function to type a word letter by letter
const typeWord = (word: string, callback: () => void) => {
  let index = 0;

  const typingInterval = setInterval(() => {
    typedText.value += word[index];
    index++;

    if (index === word.length) {
      clearInterval(typingInterval);
      callback();
    }
  }, props.writeSpeed);
};

// Function to delete a word letter by letter
const deleteWord = (callback: () => void) => {
  let index = typedText.value.length - 1;

  const deletingInterval = setInterval(() => {
    typedText.value = typedText.value.slice(0, index);
    index--;

    if (index === -1) {
      clearInterval(deletingInterval);
      callback();
    }
  }, props.deleteSpeed);
};

// Function to type a word, delete it and then type the next word
const typeEffect = () => {
  const currentWord = props.words[currentIndex.value];

  typeWord(currentWord, () => {
    setTimeout(() => {
      deleteWord(() => {
        currentIndex.value = (currentIndex.value + 1) % props.words.length;
        typeEffect();
      });
    }, props.pauseSpeed);
  });
};

//Lifecycle hooks
onMounted(() => {
  typeEffect();
});

</script>