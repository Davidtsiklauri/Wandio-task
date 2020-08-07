export interface Book {
    id:string;
    title:string;
    description:string;
    thumbnail:string;
}

export interface Books {
    books:Book[]
    total:number;
}