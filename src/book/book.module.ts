/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";

@Module({
    imports:[],
    providers:[BookService],
    controllers:[BookController],
    exports:[],
})
export class BookModule{

}