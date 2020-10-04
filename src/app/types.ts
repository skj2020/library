export interface Book {
    title: string,
    isbn: string,
    price: number,
    pageCount: number,
    publishedDate: string,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    available: boolean,
    authors: Array<string>,
    categories: Array<string>
}

export interface CartItem {
    title: string,
    isbn: string,
    price: number
}