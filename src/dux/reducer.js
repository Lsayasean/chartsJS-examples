const initialState = {
    monthly: [
        {
            month: 'January',
            count: 100
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

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
