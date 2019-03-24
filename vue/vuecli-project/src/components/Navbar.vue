<template>
    <header>
        <h1>Creepy Artist Theater Congress Center</h1>
        <div id="nav">
            <router-link class="navbar-link" to="/">Dashboard</router-link>
            <router-link class="navbar-link" v-for="(val) in rooms" :to="{name: 'room', params: {roomId: val.id}}">{{val.name}}</router-link>
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Axios from 'axios';
    import {Room} from '@/models/room.model';

    @Component
    export default class Navbar extends Vue {

        public rooms: Array<Room>;

        constructor(props) {
            super(props);
            this.rooms = [];
        }

        mounted() {
            Axios.get('http://localhost:3000/room')
                .then(response => (this.rooms = response.data as Array<Room>))
        }
    }
</script>

<style lang="scss">
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }

        .navbar-link {
            padding-left: 5px;
            padding-right: 5px;
        }
    }
</style>
