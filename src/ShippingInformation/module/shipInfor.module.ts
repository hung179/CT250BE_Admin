import { Module } from "@nestjs/common";
import { ShippingInformation, ShippingInformationSchema } from "../schema/shipInfor.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ShippingInformationController } from "../controller/shipInfor.controller";
import { ShippingInformationService } from "../service/shipInfor.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ShippingInformation.name, schema: ShippingInformationSchema}
        ])
    ],
    controllers: [ShippingInformationController],
    providers: [ShippingInformationService]
})

export class ShippingInformationModule{}
