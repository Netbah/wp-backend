import { WoocommerceService } from '../../services/woocommerce/woocommerce.service';
import { ProductDto } from '../../models/ProductDto';
import { Request } from 'express';
export declare class ProductController {
    private readonly wooService;
    constructor(wooService: WoocommerceService);
    create(request: Request, product: ProductDto): Promise<ProductDto>;
}
