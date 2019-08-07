import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './api/product/product.controller';
import { WoocommerceService } from './services/woocommerce/woocommerce.service';
import { ConfigService } from './services/config.service';

process.env.NODE_ENV = 'dev';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [
    AppService,
    WoocommerceService, {
      provide: ConfigService,
      useValue: new ConfigService(`${process.env.NODE_ENV}.env`),
    }
  ],
  exports: [ConfigService],
})
export class AppModule { }
