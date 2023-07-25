/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class BookService{
    public books:Book[] = [];
    
    //add book
    addBookService(book:Book) : string{
        //auto generate id
        book.id  = uuidv4();
        this.books.push(book);
        return 'Book has been added successfully!';
    }
    
    //update book
    updateBookService(book:Book): string{
        const index = this.books.findIndex((currentBook) => { return currentBook.id === book.id});
        this.books[index] = book;
        return 'Book has been updated successfully';
    }

    //delete book
    deleteBookService(bookId:string) : string{
        this.books = this.books.filter((book) => { return book.id != bookId});
        return 'Book has been deleted successfully';
    }
    //findall book
    findAllBooksService(): Book[] {
        return this.books;
    }

}