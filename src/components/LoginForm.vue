<script lang="ts">
import instace from '@/api/axiosInstance'

export default {
    name: 'LoginForm',
    props: {
        formType: String,
    },
    data: function () {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        emitChangeForm: function (e: Event) {
            e.preventDefault()
            this.$emit('change-forms')
        },
        fetchData: async function () {
            const response = await instace.post('/users/login', {
                email: this.email,
                password: this.password,
            })

            if (response.data == 'user' || response.data == 'admin') this.$router.push('/')
        },
    },
}
</script>

<template>
    <div class="form-container">
        <div class="greetings">
            <h2>Olá!</h2>
            <p>Faça Login na plataforma.</p>
        </div>
        <form class="form" action="">
            <input
                v-model="email"
                type="email"
                name="login_email"
                id="login_email"
                placeholder="email:"
            />
            <input
                v-model="password"
                type="password"
                name="login_password"
                id="login_password"
                placeholder="senha:"
            />

            <button type="button" @click="fetchData">entrar</button>
        </form>
        <div class="change-form">
            <p>não tem uma conta?</p>
            <a href="#" @click="(e) => emitChangeForm(e)">cadastrar</a>
        </div>
    </div>
</template>

<script lang="scss"></script>
