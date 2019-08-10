import { Controller, Post, Req, Body } from '@nestjs/common';
import { WoocommerceService } from '../../services/woocommerce/woocommerce.service';
import { ProductDto } from '../../models/ProductDto';

@Controller('product')
export class ProductController {

    constructor(private readonly wooService: WoocommerceService) { }

    @Post()
    async create(@Body() product: ProductDto) {
        const productResponce = await this.wooService.createProduct(product);
        return productResponce;
    }
}

