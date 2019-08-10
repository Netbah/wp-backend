export declare class ProductDto {
    id?: number;
    name?: string;
    slug?: string;
    permalink?: string;
    date_created?: Date;
    date_modified?: Date;
    type?: string;
    status?: string;
    featured?: boolean;
    catalog_visibility?: string;
    description?: string;
    short_description?: string;
    sku?: string;
    price?: string;
    regular_price?: string;
    sale_price?: string;
    date_on_sale_from?: string;
    date_on_sale_to?: string;
    price_html?: string;
    on_sale?: boolean;
    purchasable?: boolean;
    total_sales?: number;
    virtual?: boolean;
    downloadable?: boolean;
    downloads?: any[];
    download_limit?: number;
    download_expiry?: number;
    download_type?: string;
    external_url?: string;
    button_text?: string;
    tax_status?: string;
    tax_class?: string;
    manage_stock?: boolean;
    stock_quantity?: any;
    in_stock?: boolean;
    backorders?: string;
    backorders_allowed?: boolean;
    backordered?: boolean;
    sold_individually?: boolean;
    weight?: string;
    dimensions?: Dimensions;
    shipping_required?: boolean;
    shipping_taxable?: boolean;
    shipping_class?: string;
    shipping_class_id?: number;
    reviews_allowed?: boolean;
    average_rating?: string;
    rating_count?: number;
    related_ids?: number[];
    upsell_ids?: any[];
    cross_sell_ids?: any[];
    parent_id?: number;
    purchase_note?: string;
    categories?: Category[];
    tags?: any[];
    images?: Image[];
    attributes?: any[];
    default_attributes?: any[];
    variations?: any[];
    grouped_products?: any[];
    menu_order?: number;
}
export interface Dimensions {
    length?: string;
    width?: string;
    height?: string;
}
export interface Category {
    id?: number;
    name?: string;
    slug?: string;
}
export interface Image {
    id?: number;
    date_created?: Date;
    date_modified?: Date;
    src?: string;
    name?: string;
    alt?: string;
    position?: number;
}
