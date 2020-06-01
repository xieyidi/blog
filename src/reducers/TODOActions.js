const initialstate = {
    'items': [
        {
            'index': 1,
            'text': 'one'
        },
        {
            'index': 2,
            'text': 'one'
        },
        {
            'index': 3,
            'text': 'one'
        }
    ]
}

function filteritem(target, items) {
    return {'items': items.filter((i) => i.index !== target)}
}

export default function TODOActions (state=initialstate, action) {
    switch (action.type) {
        case 'DEL':
            return filteritem(action.index, state.items);
        case 'ADD':
            return {
                'items' : [
                    ...state.items,
                    {
                        'index': state.items.length + 1,
                        'text': 'new'
                    }
                ]
            }
        default:
            return state
    }
}