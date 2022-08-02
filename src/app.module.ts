import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { ProductDB, ProductSchema } from './schema/product.schema';

@Module({
  imports: [ProductModule, MongooseModule.forRoot("mongodb+srv://ritik:ritik@cluster1st.47kvq64.mongodb.net/?retryWrites=true&w=majority"),MongooseModule.forFeature([{name:ProductDB.name,schema:ProductSchema}])],
  controllers: [AppController, ProductController],
  providers: [AppService,ProductService],
})
export class AppModule {}
