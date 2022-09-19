


export const changeFilter = (filter) => {
    return {
        type: 'CHANGE_FILTER',
        payload: filter
    }
}
export const seacrh = (string) => {
    return {
        type:'SEARCH',
        payload:string,
    }
} 

export const addCoffee = (id) => {
    return {
        type: 'ADD_COFFEE',
        payload: id
    }
}

export const removeCoffee = (id) => {
    return {
        type: 'REMOVE_COFFEE',
        payload: id
    }
}