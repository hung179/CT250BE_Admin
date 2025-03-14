import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BookStore, bookStoreSchema } from "../schema/bookstore.schema";
import { BookStoreController } from "../controller/bookstore.controller";
import { BookStoreService } from "../service/bookstore.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: BookStore.name, schema: bookStoreSchema}
        ])
    ],
    controllers: [BookStoreController],
    providers: [BookStoreService]
})

export class BookStoreModule{}
