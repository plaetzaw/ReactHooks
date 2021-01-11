export const ACTIONS = {
    ADD = "Add",
    EDIT = "Edit",
    DELETE = "Delete",
}

export const initialState = {
    entries: 3,
    times:[{
        id: 1,
        text: "50 Free",
    },
    {
        id: 2,
        text: "100 Free",
    },
    {
        id: 3,
        text: "200 Free",
    }]
}

export const reducer = (state, action) => {
    switch (action.type){
        case ACTIONS.ADD:
            {
                const newEntry = state.entries + 1;
                const newTime = {
                    id: newEntry,
                    text: action.text
                };
                return {
                    entries: newEntry,
                    times: [...state, newTime]
                }
            }
        case ACTIONS.EDIT:
            {
                const idx = state.times.findIndex(t => t.id === action.id);
                const time = Object.assign({}, state.times[idx]);
                time.text = action.text;
                const times = Object.assign([], state.times);
                times.splice(idx, 1, time);
                return {
                    entries: state.entries,
                    times: times,
                }
            }
        case ACTIONS.DELETE: 
        {
                const idx = state.times.findIndex(t => t.id === action.id);
                const times = Object.assign([], state.times);
                times.splice(idx, 1);
                return {
                    entries: state.entries,
                    times: times,
                }
        }  
        default:
        return state;

    }
}