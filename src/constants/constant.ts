import 'dotenv/config'
// const DEV_URL = `http://localhost:5000/`
const PROD_URL = process.env.PROD_URL


export const BASE_URL = PROD_URL

export const ApiRoutes = {
    login: BASE_URL + '/api/auth/login',
    register: BASE_URL + '/api/auth/register',
}