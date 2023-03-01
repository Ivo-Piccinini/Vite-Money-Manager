// Funcion para generar un id unico
export const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36)
    return random + date;
}

// Funcion para retornar la fecha actual
export const formatDate = date => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day:'2-digit',
    }

    return newDate.toLocaleDateString('es-ES', options)
}