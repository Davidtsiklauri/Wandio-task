export interface Favourite {
    count?:number;
    ids?:string[];
}

export interface AppState {
    book?:Favourite
}