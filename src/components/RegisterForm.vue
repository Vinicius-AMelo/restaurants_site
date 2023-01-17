<script lang="ts">
import instance from '../api/axiosInstance'

export default {
    name: 'RegisterForm',
    props: {
        formType: String,
    },
    data: function () {
        return {
            name: '',
            email: '',
            password: '',
            role: '',
        }
    },

    methods: {
        emitChangeForm: function (e: Event) {
            e.preventDefault()
            this.$emit('change-forms')
        },

        fetchData: async function () {
            const response = await instance.post('/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                role: this.role,
            })
            console.log(response.data)
        },
    },
}
</script>

<template>
    <div class="form-container">
        <div class="greetings">
            <h2>Olá!</h2>
            <p>Registre-se na plataforma.</p>
        </div>
        <form class="form" action="">
            <input
                v-model="name"
                type="name"
                name="register_name"
                id="register_name"
                placeholder="nome:"
            />
            <input
                v-model="email"
                type="email"
                name="register_email"
                id="register_email"
                placeholder="email:"
            />
            <input
                v-model="password"
                type="password"
                name="register_password"
                id="register_password"
                placeholder="senha:"
            />

            <select v-model="role" name="register_role" id="register_role">
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
            </select>
            <button type="button" @click="fetchData">cadastrar</button>
        </form>
        <div class="change-form">
            <p>já tem uma conta?</p>
            <a href="#" @click="(e) => emitChangeForm(e)">faça login</a>
        </div>
    </div>
</template>

<script lang="scss"></script>
