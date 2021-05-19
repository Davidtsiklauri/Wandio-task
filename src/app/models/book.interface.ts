export interface Book {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

export interface Books {
  books: Book[];
  total: string;
}
