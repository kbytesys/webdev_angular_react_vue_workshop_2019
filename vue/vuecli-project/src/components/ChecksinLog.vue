<template>
    <div class="reception-log">
        <h3>Log</h3>
        <table>
            <thead class="reception-log-header">
            <tr>
                <th>Date</th>
                <th>Event</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(val) in checksinLog" :key="val.id">
                <td>{{val.date | formatDate}}</td>
                <td>{{val.message}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {CheckinlogModel} from '@/models/checkinlog.model';

    @Component
    export default class ChecksinLog extends Vue {
        @Prop()
        public checksinLog!: CheckinlogModel[];


    }
</script>

<style lang="scss">
    .reception-log {
        text-align: center;
        width: 100%;

        table {
            min-width: 600px;
            margin: auto;
        }
    }
</style>
