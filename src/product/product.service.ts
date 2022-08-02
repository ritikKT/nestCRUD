import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/dto/product.dto';
import { ProductDB, ProductDocument } from 'src/schema/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(ProductDB.name) private productModel:Model<ProductDB>)
    {
    }
    async create(createProductDto:CreateProductDto):Promise<any>
    {
        //console.log(this.productModel);
        if(this.productModel.findOne({id:createProductDto.id}))
        {
            console.log("exists");
            return {
                error:"product already exists",
            };
        }
        const createdProdcut=new this.productModel(createProductDto);
        return createdProdcut.save();
        
    }
    async get(id:String):Promise<any>
    {
        //console.log(this.productModel);
        if(this.productModel.findOne({id:id})!=null)
        {
            return this.productModel.findOne({id:id});
        }else{
            return {
                error:"product not found",
            };
        }
    }
    async update(createProductDto:CreateProductDto,id:string):Promise<any>
    {
        //console.log(this.productModel);
        if(this.productModel.findOne({id:id})!=null)
        {
            const product = this.productModel.findOneAndReplace({id:id},createProductDto,{new:true});
            
            //const createdProduct=new this.productModel(createProductDto);
            console.log("created"); return product;
                           // this.productModel.updateOne()
        }else{
            return null;
        }
    }
    async delete(id:string):Promise<any>
    {
        const product= this.productModel.deleteOne({id:id});
        //console.log(product);
        return product;
    }
}
