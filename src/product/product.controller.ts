import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { response } from 'express';
import { CreateProductDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService)
    {

    }
    @Post()
    async createProduct(@Body() param:CreateProductDto)
    {
        try{
            const newProduct=await this.productService.create(param);
            console.log(param);
            return newProduct;
        }catch(error)
        {
            console.log(error);
        }
        
    }
    @Get(':id')
    async getProduct(@Param('id') id:string)
    {
        try{
            const newProduct=await this.productService.get(id);
            
            if(newProduct!=null) return newProduct; else return { error: "product not found" };
        }catch(error)
        {
            console.log(error);
        }
        
    }
    @Put(":id")
    async update(@Body() body:CreateProductDto,@Param('id') id:string)
    {
        try{
            const newProduct=await this.productService.update(body,id);
            
            if(newProduct!=null) return newProduct; else return { error: "product does'nt exists" };
        }catch(error)
        {
            console.log(error);
        }
    }
    @Delete(':id')
    async delete(@Param('id') id:string)
    {
        const product= this.productService.delete(id);
        if(product!=null)
        return product;
        else return {
            error:" does'nt exist",
        }
    }
}
