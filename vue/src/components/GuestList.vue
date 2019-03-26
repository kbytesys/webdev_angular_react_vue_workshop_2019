<template>
    <div class="reception-guest-list">
        <h3>Guest list</h3>
        <div class="reception-guest-list-container">
            <table>
                <thead class="reception-guest-list-header">
                <tr>
                    <th>Room</th>
                    <th>Person</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(val) in checksin" :key="val.id">
                    <td>{{val.room.name}}</td>
                    <td>{{val.person.name}}</td>
                    <td><a href="javascript:void(0)" v-on:click="checkout(val.id)">checkout</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import {CheckinModel} from '@/models/checkin.model';
    import {apiCheckout} from "@/libs/receptionApi.lib";

    @Component
    export default class GuestList extends Vue {

        @Prop()
        public checksin!: CheckinModel[];

        @Emit('onCheckout')
        public onCheckout() {
            return;
        }

        public checkout(id: number) {
            apiCheckout(id).then(() => this.onCheckout());
        }
    }
</script>

<style lang="scss">
    .reception-guest-list {
        text-align: center;
        width: 100%;

        table {
            min-width: 400px;
            margin: auto;
        }
    }
</style>
