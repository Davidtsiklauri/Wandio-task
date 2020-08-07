import { Action } from '@ngrx/store';

export enum BookActions {
    AddToFavourite = "[Book] Add to favourite",
    RemoveFromFavourite = "[Book] Remove from favourite",
    RemoveAll = "[Book] Remove All",
}


export class AddToFavourite implements Action {
    public readonly type = BookActions.AddToFavourite;
    constructor(public payload: string) {}
}

export class RemoveFromFavourite implements Action {
    public readonly type = BookActions.RemoveFromFavourite;
    constructor(public payload: string) {}
}

export class RemoveAll implements Action {
    public readonly type = BookActions.RemoveAll;
}


export type ActionsUnion = AddToFavourite | 
                           RemoveFromFavourite |
                           RemoveAll;