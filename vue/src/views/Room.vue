<template>
  <div class="room">
    <h2>Detail of the Room {{roomId}}</h2>
    <GuestList :checksin="checksin" v-on:onCheckout="onCheckout()"/>
    <ChecksinLog :checksinLog="checksinLog"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import GuestList from '@/components/GuestList.vue';
  import {CheckinModel} from '@/models/checkin.model';
  import {CheckinlogModel} from '@/models/checkinlog.model';
  import ChecksinLog from '@/components/ChecksinLog.vue';
  import Axios from 'axios';
  import {convertCheckinLog} from '@/utils/apiConverter';

  const APIURL = 'http://localhost:3000';
  const ROOMID_PARAM = 'roomId';

  @Component({
    components: {
      ChecksinLog,
      GuestList,
    },
  })
  export default class Room extends Vue {
    public checksin: CheckinModel[];
    public checksinLog: CheckinlogModel[];
    public roomId: number;
    constructor() {
      super();

      this.checksin = [];
      this.checksinLog = [];
      this.roomId = 1;
    }

    public mounted() {
      const roomId = parseInt(this.$route.params[ROOMID_PARAM], 10);
      this.refreshData(roomId);
    }

    public onCheckout() {
      const roomId = parseInt(this.$route.params[ROOMID_PARAM], 10);
      this.refreshData(roomId);
    }

    @Watch('$route')
    public beforeRouteUpdate(to: any) {
      this.refreshData(to.params.roomId);
    }

    public refreshData(roomId: number) {
      this.roomId = roomId;
      Axios.get(`${APIURL}/checkin`, {params: {room: roomId}})
              .then((response) => (this.checksin = response.data as CheckinModel[]));
      Axios.get(`${APIURL}/checkinlog`, {params: {room: roomId}})
              .then((response) => (this.checksinLog = response.data.map(convertCheckinLog) as CheckinlogModel[]));
    }
  }
</script>
