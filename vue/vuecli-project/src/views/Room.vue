<template>
  <div class="room">
    <GuestList checksin="checksin"/>
    <ChecksinLog checksinLog="checksinLog"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import GuestList from '@/components/GuestList.vue';
  import {CheckinModel} from '@/models/checkin.model';
  import {CheckinlogModel} from '@/models/checkinlog.model';
  import ChecksinLog from '@/components/ChecksinLog.vue';
  import Axios from 'axios';
  import {convertCheckinLog} from '@/utils/apiConverter';

  const APIURL = 'http://localhost:3000';

  @Component({
    components: {
      ChecksinLog,
      GuestList,
    }
  })
  export default class Home extends Vue {
    private checksin: Array<CheckinModel>;
    private checksinLog: Array<CheckinlogModel>;
    constructor() {
      super();

      this.checksin = [];
      this.checksinLog = [];
    }

    public mounted() {
      const roomId = parseInt(this.$route.params['roomId']);
      Axios.get(`${APIURL}/checkin`, {params: {room: roomId}})
              .then((response) => (this.checksin = response.data as CheckinModel[]));
      Axios.get(`${APIURL}/checkinlog`, {params: {room: roomId}})
              .then((response) => (this.checksin = response.data.map(convertCheckinLog) as CheckinModel[]));
    }
  }
</script>
