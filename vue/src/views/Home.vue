<template>
  <div class="home">
    <h2>Dashboard</h2>
    <GuestList :checksin="checksin" v-on:onCheckout="onCheckout()"/>
    <ChecksinLog :checksinLog="checksinLog"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GuestList from '@/components/GuestList.vue';
import ChecksinLog from '@/components/ChecksinLog.vue';
import {CheckinModel} from '@/models/checkin.model';
import {CheckinlogModel} from '@/models/checkinlog.model';
import {apiGetChecksin, apiGetChecksinLog} from '@/libs/receptionApi.lib'; // @ is an alias to /src

@Component({
  components: {
    ChecksinLog,
    GuestList,
  },
})
export default class Home extends Vue {
  public checksin: CheckinModel[];
  public checksinLog: CheckinlogModel[];
  constructor() {
    super();

    this.checksin = [];
    this.checksinLog = [];
  }

  public mounted() {
   this.refreshData();
  }

  public onCheckout() {
    this.refreshData();
  }

  public refreshData() {
    apiGetChecksin()
            .then((data) => this.checksin = data);
    apiGetChecksinLog()
            .then((data) => this.checksinLog = data);
  }
}
</script>
