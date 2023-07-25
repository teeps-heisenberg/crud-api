/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller('book')
export class BookController{
    constructor(private bookService:BookService){}

    @Get('/findAll')
    getAllBooks(): Book[] {
        return this.bookService.findAllBooksService();
    }

    @Put('/update')
    updateBook(@Body() book:Book) : string {  
        return this.bookService.updateBookService(book);
    }

    @Post('/update')
    addBook(@Body() book:Book) : string {  
        return this.bookService.addBookService(book);
    }

    @Delete('delete/:id')
    deleteBook(@Param('id') boodId:string) : string {
        return this.bookService.deleteBookService(boodId);
    }

}