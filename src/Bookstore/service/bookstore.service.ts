import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BookStore, BookStoreDocument } from '../schema/bookstore.schema';
import { BookStoreDto } from '../dto/bookstore.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BookStoreService {
  
  constructor(
    @InjectModel(BookStore.name)
    private readonly bookStoreModel: Model<BookStoreDocument>,
  ) {}

  async getInformation() {
    try{
      const result = await this.bookStoreModel.findOne().select('email_NS sdt_NS diaChi_NS gioiThieu_NS -_id').exec();
      if(result)
      return { success: true, data: result };
    }catch(error){
      return { success: false, error: error };
    }
  }
  async create(bookstore: BookStoreDto) {
    try {
      // Kiểm tra xem có trường mật khẩu không
      if (bookstore.mk_NS) {
        const saltRounds = 10;
        bookstore.mk_NS = await bcrypt.hash(bookstore.mk_NS, saltRounds);
      }
  
      // Tạo bản ghi mới sau khi mã hóa mật khẩu
      const newBookStore = await this.bookStoreModel.create(bookstore);
  
      return { success: true, data: newBookStore };
    } catch (error) {
      return { success: false, error: error.message || error };
    }
  }

  async findByUserName(username: string) {
    try {
      const result = await this.bookStoreModel.findOne({username_NS: username}).exec();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async findById(id: string) {
    try {
      const result = await this.bookStoreModel.findOne({_id: new Types.ObjectId(id)}).exec();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async update(bookstore: BookStoreDto, id: string) {
    try {
      const result = await this.bookStoreModel
        .findByIdAndUpdate({ _id: new Types.ObjectId(id) }, { $set: bookstore })
        .exec();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async delete(id: string) {
    try {
      const result = await this.bookStoreModel
        .findByIdAndDelete({ _id: new Types.ObjectId(id) })
        .exec();
      return { success: true, data: result };
    } catch (error) {
      return { success: false, error: error };
    }
  }
}
