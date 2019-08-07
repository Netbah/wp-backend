import { Controller, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { WoocommerceService } from '../../services/woocommerce/woocommerce.service';
import { IWooCommerceProduct } from '../../models/IWooCommerceProduct';

@Controller('product')
export class ProductController {

    constructor(private readonly wooService: WoocommerceService) { }

    @Post()
    async create(@Req() req: Request, @Body() body: Body) {
        //const inputBody: IWooCommerceProduct = body as IWooCommerceProduct;
        const data = {};
        const product = await this.wooService.createProduct(data);
        return product.data.id;
    }
}
