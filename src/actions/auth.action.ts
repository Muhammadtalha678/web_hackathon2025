'use server'

import { ApiRoutes } from "@/constants/constant"

export const registerAction = async (formData: FormData) => {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        console.log(formData);

        const response = await fetch(ApiRoutes.register, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        })
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Registration failed");
        }
        const data = await response.json()
        return { success: data.error, message: data.message, data: data.data }

    } catch (error) {
        const err = error as Error
        return { success: false, message: "Something went wrong " + err, data: null }
    }
}