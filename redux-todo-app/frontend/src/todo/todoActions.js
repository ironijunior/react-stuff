import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (e) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        //Usa a description do state, para evitar 
        //passar por parametro em todos os lugares onde search é chamado
        const description = getState().todo.description

        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({
                type: 'TODO_SEARCHED',
                payload: resp.data
        }))
    }
}

export const add = (description) => {
    //Faz o POST e somente após finalizar retorna a action
    //Após o post também chama o search, retornando a action do search
    return (dispatch) => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return (dispatch) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return (dispatch) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return (dispatch) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{
        type: 'TODO_CLEARED'
    }, search()]
}