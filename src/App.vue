<script setup lang="ts">
import model from './assets/NeilArmstrong.glb?url';
import poster from './assets/NeilArmstrong.webp';
import environment from './assets/moon_1k.hdr?url';
</script>

<template>
  <model-viewer
    alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
    :src="model"
    ar
    ar-modes="webxr scene-viewer quick-look"
    :environment-image="environment"
    :poster="poster"
    seamless-poster
    shadow-intensity="1"
    camera-controls
    class="model-viewer"
  ></model-viewer>
</template>

<style>
#app .model-viewer {
  width: 100vw;
  height: 100vh;
}
</style>
