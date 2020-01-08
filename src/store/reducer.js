const initialState = {
    weather: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HOT':
            return {
                ...state,
                weather: state.weather + "hot"
            }
        case 'COLD':
            return {
                ...state,
                weather: state.weather + "cold"
        }
        default:
            return state;
    }
};

export default reducer;



    
