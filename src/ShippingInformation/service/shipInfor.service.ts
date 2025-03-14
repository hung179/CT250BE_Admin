import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId, Types } from "mongoose";
import { ShippingInformation, ShippingInformationDocument } from "../schema/shipInfor.schema";
import { ShippingInformationDto } from "../dto/shipInfor.dto";

@Injectable() 
export class ShippingInformationService {
    constructor(
        @InjectModel(ShippingInformation.name)
        private readonly ShippingInformationModel: Model<ShippingInformationDocument>
    ){}
        async create( ShippingInformation: ShippingInformationDto) {
            try{
            const newShippingInformation = await this.ShippingInformationModel.create(ShippingInformation); 
            return {success: true, data: newShippingInformation}
            }catch(error){
                return {success: false, error: error}
            }
        }
    
        async findById(id: string) {
            try{
            const result = await this.ShippingInformationModel.findById({_id: new Types.ObjectId(id)}).exec();
            return {success: true, data: result}
        }catch(error){
            return {success: false, error: error}
        }
        }
    
        async update(ShippingInformation: ShippingInformationDto, id: string) {
            try{
            const result = await this.ShippingInformationModel.findByIdAndUpdate({_id: new Types.ObjectId(id)}, { $set: ShippingInformation} ).exec();
            return {success: true, data: result}
        }catch(error){
            return {success: false, error: error}
        }
        }
        
        async delete(id: string) {
            try{
            const result = this.ShippingInformationModel.findByIdAndDelete({_id: new Types.ObjectId(id)}).exec();
            return {success: true, data: result}
        }catch(error){
            return {success: false, error: error}
        }
    }
}    