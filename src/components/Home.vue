<template>
    <br />
    <br />
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Registrar signos vitales</h2>
                <form v-on:submit.prevent="processCreate">
                    <input
                        type="date"
                        class="form-control"
                        v-model="elementP.fecha"
                        placeholder="Fecha"
                    />
                    <br />
                    <input
                        type="text"
                        class="form-control"
                        v-model="elementP.oximetria"
                        placeholder="Oxiometria"
                    />
                    <br />
                    <input
                        type="text"
                        class="form-control"
                        v-model="elementP.frecuencia_respiratoria"
                        placeholder="Frecuencia Respiratoria"
                    />
                    <br />
                    <input
                        type="text"
                        class="form-control"
                        v-model="elementP.temperatura"
                        placeholder="Temperatura"
                    />
                    <br />
                    <input
                        type="text"
                        class="form-control"
                        v-model="elementP.presion_arterial"
                        placeholder="Presión Arterial"
                    />
                    <br />
                    <input
                        type="text"
                        class="form-control"
                        v-model="elementP.frecuencia_cardiaca"
                        placeholder="Frecuencia cardiaca"
                    />
                    <br />
                    <input
                        type="text"
                        class="form-control"
                        v-model="elementP.glicemia"
                        placeholder="Glicemia"
                    />
                    <br />
                    <input
                        type="number"
                        class="form-control"
                        v-model="elementP.id_familiar"
                        placeholder="Familiar"
                    />
                    <br />
                    <input
                        type="number"
                        class="form-control"
                        v-model="elementP.id_paciente"
                        placeholder="Paciente"
                    />
                    <br />

                    <button type="submit" class="btn btn-primary">Crear</button>
                </form>
            </div>
        </div>
    </div>
    <br />
    <br />
    <button class="btn btn-secondary" v-on:click="processData">Actualizar tabla</button>
    <table class="table">
        <thead>
            <tr>
                <th>fecha</th>
                <th>oximetria</th>
                <th>frecuencia_respiratoria</th>
                <th>temperatura</th>
                <th>presion_arterial</th>
                <th>frecuencia_cardiaca</th>
                <th>glicemia</th>
                <th>id_familiar</th>
                <th>id_paciente</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Signos',
    data: function () {
        return {
            // username: localStorage.getItem('username') || 'none',
            signos: [],
            elementP: {
                fecha: '',
                oximetria: '',
                frecuencia_respiratoria: 0,
                temperatura: 0,
                presion_arterial: 0,
                frecuencia_cardiaca: 0,
                glicemia: 0,
                id_familiar: 0,
                id_paciente: 0,
            },
            onlyOneP: {
                fecha: '',
                oximetria: '',
                frecuencia_respiratoria: 0,
                temperatura: 0,
                presion_arterial: 0,
                frecuencia_cardiaca: 0,
                glicemia: 0,
                id_familiar: 0,
                id_paciente: 0,
            },
        };
    },
    methods: {
        processData: function () {
            axios
                .get('https://app-hospitalizacioncasa-be-de.herokuapp.com/signos_vitales/', {
                    headers: {},
                })
                .then((result) => {
                    console.log(result.data);
                    this.products = result.data;
                })
                .catch((error) => {
                    alert(error);
                });
        },
        processCreate: function () {
            axios
                .post(
                    'https://app-hospitalizacioncasa-be-de.herokuapp.com/signos_vitales/',
                    this.elementP,
                    {
                        headers: {},
                    }
                )
                .then((result) => {
                    alert(result.status + ' Creado exitosamente..');
                })
                .catch((error) => {
                    alert(error);
                });
        },
    },
    created: function () {
        this.processData();
    },
};
</script>
<style>
h1 {
    font-size: 50px;
    color: #283747;
}
span {
    color: crimson;
    font-weight: bold;
}
</style>
