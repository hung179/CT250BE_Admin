import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookStoreDocument = HydratedDocument<BookStore>

@Schema()
export class BookStore {
    @Prop({required:true})
    email_NS: string;
    @Prop({required:true})
    mk_NS: string;
    @Prop({required:true})
    sdt_NS: string;
    @Prop({required:true})
    diaChi_NS: string;
    @Prop({required:true})
    gioiThieu_NS: string;
    @Prop({default: 'admin'})
    role: string;
    // popolate, tham chiếu bằng cách dùng ObjectId tham chiếu đến một đối tượng cùng database, khác collection
}

export const bookStoreSchema = SchemaFactory.createForClass(BookStore);