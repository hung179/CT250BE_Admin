import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { BookStoreDto } from "../dto/bookstore.dto";
import { BookStoreService } from "../service/bookstore.service";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller('bookstore')
    export class BookStoreController {
    
        constructor(private readonly bookStoreService: BookStoreService){}

        @MessagePattern('get_book_store')
        getBookStore(@Payload() id: string) {
            return this.bookStoreService.findById(id);
        }
        // Them sua xoa diachi, gioi thieu
        @MessagePattern('create_book_store')
        createBookStore(@Payload() bookstore: BookStoreDto) {
            return this.bookStoreService.create(bookstore);
        }

        @MessagePattern('update_book_store')
        updateBookStore(@Payload() bookstore: any) {
            return this.bookStoreService.update(bookstore.admin, bookstore.id);
        }

        @MessagePattern('delete_book_store')
        deleteBookStore(@Payload() id: string) {
            return this.bookStoreService.delete(id);
        }
    }