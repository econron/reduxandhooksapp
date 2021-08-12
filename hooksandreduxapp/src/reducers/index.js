// before:
// state = []
// after:
// state = [
//   {id:1, title:'title1', body:'aaaaa'},
// ]

// before
// state = [
//   {id:1, title:'title1', body:'aaaaa'},
// ]
// after
// state = [
//   {id:1, title:'title1', body:'aaaaa'},
//   {id:2, title:'title2', body:'bbbbb'},
// ]


const events = (state = [], action) => {
    switch(action.type){
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body };
            const length = state.length;
            let id;
            if(length === 0) {
                id = 1;
            } else {
                id = state[length - 1].id + 1;
            }
            // stateの残りはそのまま。idは上記で設定したもの。titleとbodyはeventを代入。
            return [...state, { id, ...event }];

        case 'DELETE_EVENT':
            return state.filter(event => event.id !== action.id);

        case 'DELETE_ALL_EVENTS':
            return [];
        default:
            return state;
    }
};

export default events;