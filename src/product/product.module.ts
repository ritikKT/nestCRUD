import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseError } from 'mongoose';
import { ProductDB, ProductSchema } from 'src/schema/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
    imports:[MongooseModule.forFeature([{name:ProductDB.name,schema:ProductSchema}])],
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductModule {

}
