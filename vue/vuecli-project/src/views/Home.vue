<template>
  <div class="home">
    <GuestList checksin="checksin"/>
    <ChecksinLog checksinLog="checksinLog"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GuestList from '@/components/GuestList.vue';
import ChecksinLog from '@/components/ChecksinLog.vue';
import {CheckinModel} from '@/models/checkin.model';
import {CheckinlogModel} from '@/models/checkinlog.model';
import Axios from 'axios';
import {convertCheckinLog} from '@/utils/apiConverter'; // @ is an alias to /src

const APIURL = 'http://localhost:3000';

@Component({
  components: {
    ChecksinLog,
    GuestList,
  },
})
export default class Home extends Vue {
  private checksin: CheckinModel[];
  private checksinLog: CheckinlogModel[];
  constructor() {
    super();

    this.checksin = [];
    this.checksinLog = [];
  }

  public mounted() {
    Axios.get(`${APIURL}/checkin`)
            .then((response) => (this.checksin = response.data as CheckinModel[]));
    Axios.get(`${APIURL}/checkinlog`)
            .then((response) => (this.checksin = response.data.map(convertCheckinLog) as CheckinModel[]));
  }
}
</script>
