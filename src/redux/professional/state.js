const initialState = {
    token : '',
    professional: {
        id: null,
        id_user: null,
        username: null,
        linkToConsultation: null,
        createdAt: null,
        updatedAt: null
    },
    user : {
        id: null,
        dni: null,
        names: null,
        surnames: null,
        birthdate: null,
        createdAt: null,
        updatedAt: null
    },
    loaded: null,
    loading: null,
    error: null,
    goTo: null,
    queryError: null,
}
export default initialState;