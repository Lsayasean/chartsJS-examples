const initialState = {
    monthly: [
        {
            month: 'January',
            count: 30
        },
        {
            month: 'February',
            count: 50
        },
        {
            month: 'March',
            count: 12
        }
    ]
};

const UPDATE_JAN = 'UPDATE_JAN'

export default function(state = initialState, action) {
  switch (action.type) {
    
    // case UPDATE_JAN:
    //     return{...state, monthly: action.payload}
    case UPDATE_JAN:
        return {...state, monthly: state.monthly.map(e => {
            if(e.month === 'January'){
                return{...e, count: action.payload}
            } else {
                return {...e}
            }
        })}
    default:
      return state;
  }
}

export function january(jan){
    return{
        type: UPDATE_JAN,
        payload: jan
    }
}
