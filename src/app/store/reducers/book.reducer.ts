import * as BookAction from '../actions/book.actions';
import { Favourite } from 'src/app/models/favourite.interface';



function getFromLocalStorage() : Favourite {
     const FAVOURITES = localStorage.getItem('favourites');
     if(FAVOURITES) {
         
         return JSON.parse(FAVOURITES) as Favourite;
     }
     return null;
}

function setToLocalStorage(data:Favourite) : void {
    if(data) {
        localStorage.setItem('favourites' , JSON.stringify(data));
    }
}

export function initialState(): Favourite  {
    const data = getFromLocalStorage();
    
    if(data) {
        return data;
    }

    return {
        count:0,
        ids:[],
    }
};

export function reducer(
    state:Favourite = initialState(),
    action:BookAction.ActionsUnion
) : Favourite {
    switch(action.type) {
        case BookAction.BookActions.AddToFavourite:{
            const NEW_STATE : Favourite  = {
                count: state.count + 1,
                ids:[...state.ids , action.payload]
            }
            setToLocalStorage(NEW_STATE);

            return NEW_STATE;
        }
        case BookAction.BookActions.RemoveFromFavourite: {
            const NEW_STATE : Favourite = {
                count: state.count - 1,
                ids: state.ids.filter(id => id !== action.payload)
            }
            setToLocalStorage(NEW_STATE);

            return NEW_STATE;
        }
        case BookAction.BookActions.RemoveAll: {
            const NEW_STATE : Favourite = {
                count: 0,
                ids: []
            }
            setToLocalStorage(NEW_STATE);

            return NEW_STATE;
        }

        default: return state;
    }
}


