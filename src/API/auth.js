const API_URL = 'https://api.prooflift.com'

export async function login (email, password){
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
        throw new Error('Error en la autenticación')
    }

    return response.json()
}

export async function signup (name, email, password) {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email, password })
    })

    if (!response.ok) {
        throw new Error('Error en el registro')
    }

    return response.json()
}