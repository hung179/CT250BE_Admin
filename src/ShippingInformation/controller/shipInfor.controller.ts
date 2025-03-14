import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { ShippingInformationDto } from "../dto/shipInfor.dto";
import { ShippingInformationService } from "../service/shipInfor.service";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller('shipInfor')
    export class ShippingInformationController {
    
        constructor(private readonly shippingInformationService: ShippingInformationService){}

        @MessagePattern('get_shipping_information') 
        // Querry
        getShippingInformationById(@Payload() id: string) {
            return this.shippingInformationService.findById(id);
        }
        
        @MessagePattern('create_shipping_information') 
        createShippingInformation(@Payload() ShippingInformation: ShippingInformationDto) {
            return this.shippingInformationService.create(ShippingInformation);
        }

        @MessagePattern('update_shipping_information') 
        updateShippingInformation(@Payload() shippingInformation: any) {
            return this.shippingInformationService.update(shippingInformation.ShippingInformation, shippingInformation.id);
        }

        @MessagePattern('delete_shipping_information') 
        deleteShippingInformation(@Payload() id: string) {
            return this.shippingInformationService.delete(id);
        }
    }