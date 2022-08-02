import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type ProductDocument=Document&ProductDB;
@Schema()
export class ProductDB
{
    @Prop()
    id:number;
    @Prop()
    _quantity:number;
    @Prop()
    name:string;
   
}
export const ProductSchema=SchemaFactory.createForClass(ProductDB);