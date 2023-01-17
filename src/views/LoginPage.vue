<script lang="ts">
import RegisterForm from '@/components/RegisterForm.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
    name: 'LoginPage',
    components: {
        LoginForm,
        RegisterForm,
    },
    data: function () {
        return {
            formType: 'login',
        }
    },
    methods: {
        changeForm: function () {
            this.formType = this.formType == 'login' ? 'register' : 'login'
        },
        handleLogin: function (data: any) {
            console.log(data)
        },
    },
}
</script>

<template>
    <section class="loginContainer">
        <div class="login__item login--left">
            <h1>Delivery</h1>
        </div>
        <div class="login__item login--right">
            <LoginForm
                v-show="formType == 'login'"
                @change-forms="changeForm"
                @register="handleLogin"
            />
            <RegisterForm
                v-show="formType == 'register'"
                @change-forms="changeForm"
                @login="handleLogin"
            />
        </div>
    </section>
</template>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.loginContainer {
    display: flex;
    height: 100vh;

    .login__item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        &.login--left {
            background-color: #000000;
            color: #ffffff;

            h1 {
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        }

        &.login--right {
            background-color: #ffffff;

            .form-container {
                width: 35%;
                margin: 0px auto;

                .greetings {
                    margin-bottom: 8px;

                    h2 {
                        letter-spacing: 1px;
                    }

                    p {
                        font-weight: 500;
                    }
                }

                .form {
                    width: 100%;
                    margin: 0px auto;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;

                    input {
                        width: 100%;
                        padding: 10px;
                        border: none;
                        border-radius: 5px;
                        color: #0f0f0f;
                        background-color: #f0f0f0;
                        margin: 4px 0px;
                    }

                    button {
                        padding: 10px;
                        border: none;
                        border-radius: 5px;
                        color: #ffffff;
                        background-color: #000000;
                        cursor: pointer;
                        margin-top: 24px;

                        &:hover {
                            transform: scale(0.98);
                        }
                    }
                }

                .change-form {
                    text-align: center;
                    margin-top: 16px;

                    a {
                        color: #0c790c;
                        margin-top: 4px;
                    }
                }
            }
        }
    }
}
</style>
