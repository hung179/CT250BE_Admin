import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { BookStore, BookStoreDocument } from '../schema/bookstore.schema';
import { BookStoreDto } from '../dto/bookstore.dto';

@Injectable()
export class BookStoreService {
  constructor(
    @InjectModel(BookStore.name)
    private readonly bookStoreModel: Model<BookStoreDocument>,
  ) {}
  async create(bookstore: BookStoreDto) {
    try {
      const newBookStore = await this.bookStoreModel.create(bookstore);
      return { success: true, data: newBookStore };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  async findById(id: string) {
    try {
      const result = await this.bookStoreModel.find({_id: new Types.ObjectId(id)}).exec();
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
