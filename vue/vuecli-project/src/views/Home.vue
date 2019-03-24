<template>
  <div class="home">
    <GuestList />
    <ChecksinLog />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GuestList from '@/components/GuestList.vue';
import ChecksinLog from '@/components/ChecksinLog.vue'; // @ is an alias to /src

@Component({
  components: {
    ChecksinLog,
    GuestList,
  },
})
export default class Home extends Vue {}
</script>
