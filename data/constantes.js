import dotenv from 'dotenv'

dotenv.config()

export const URLS = {

    URL: process.env.URLSAUCEDEMO,
}

export const CREDENCIALES = {

    VALID_CREDENTIALS: {

        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,

    },

    INVALID_CREDENTIALS: {
        INVALID_USER: 'user',
        INVALID_PASSWORD: 'wrong pass'
    }
}

export const ERROR_MESSAGES = {
    ERROR_MESSAGE1: 'Epic sadface: Username and password do not match any user in this service',
    ERROR_MESSAGE2: 'Epic sadface: Username is required',
    ERROR_MESSAGE3: 'Epic sadface: Password is required',
}
