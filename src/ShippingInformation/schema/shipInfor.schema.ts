import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ShippingInformationDocument =  HydratedDocument<ShippingInformation>;

@Schema()
export class ShippingInformation {
    @Prop({required: true})
    tinh_VC: string;
    @Prop({required: true})
    gia_VC: number;
    @Prop({required: true})
    giaVuotMuc_VC: number;
    @Prop({required: true})
    mucVuot_VC: number;
    @Prop({default: () => new Date()})
    thoiGian_VC: Date;
}

export const ShippingInformationSchema = SchemaFactory.createForClass(ShippingInformation);