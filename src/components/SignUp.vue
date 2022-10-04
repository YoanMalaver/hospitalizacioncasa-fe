<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrar Usuario</h2>
            <form v-on:submit.prevent="processSignUp">
                <input type="number" v-model="user.id" placeholder="Cedula" />
                <br />
                <input type="text" v-model="user.name" placeholder="Nombre" />
                <br />
                <input type="text" v-model="user.lastname" placeholder="Apellido" />
                <br />
                <input type="password" v-model="user.password" placeholder="Contraseña" />
                <br />
                <!-- <input type="email" v-model="user.email" placeholder="Email" />
                <br /> -->
                            
                <label for="Tipo Usuario">Tipo de Usuario:
                </label>
                <select v-model="user.tipoUser">
                    <option value="">--Escoje una opcion*--</option>
                    <option value="1">1. Auxiliar</option>
                    <option value="2">2. Medico</option>
                    <option value="3">3. Enfermero</option>
                    <option value="4">4. Paciente</option>
                    <option value="5">5. Familiar</option>
                </select>

                <br />
                <button type="submit">Registrar Usuario</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data: function () {
        return {
            user: {
                id: '',
                name: '',
                lastname: '',
                password: '',
                tipoUser: '',
            },
        };
    },
    methods: {
        processSignUp: function () {
            axios
                .post('https://app-hospitalizacioncasa-be-de.herokuapp.com/user/', this.user, {
                    headers: {},
                })
                .then((result) => {
                    let dataSignUp = {
                        id: this.user.id,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    };

                    this.$emit('completedSignUp', dataSignUp);
                })
                .catch((error) => {
                    console.log(error);

                    alert('ERROR: Fallo en el registro.');
                });
        },
    },
};
</script>
<style>
.signUp_user {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_signUp_user {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.signUp_user h2 {
    color: #17b3db;
}

.signUp_user form {
    width: 70%;
}
.signUp_user input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #17b3db;
}
.signUp_user button {
    width: 100%;
    height: 40px;
    color: #e5e7e9;
    background: #17b3db;
    border: 1px solid #e5e7e9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
}
.signUp_user button:hover {
    color: #e5e7e9;
    background: #4176b2;
    border: 1px solid #283747;
}
</style>
