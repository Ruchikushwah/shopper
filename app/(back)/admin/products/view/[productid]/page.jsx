import products from '@/models/products';
import DbConnect from '@/utils/dbConnect';
import TitleForm from './_components/TitleForm';
import Category1 from '@/models/category1';
import DescriptionForm from './_components/DescriptionForm';
import CategoryForm from './_components/CategoryForm';
import PriceForm from './_components/PriceForm';
import DiscountPrice from './_components/DiscountPrice';
import StockForm from './_components/StockForm';
import BrandForm from './_components/BrandForm';
import BarCodeForm from './_components/BarCodeForm';


const page = async ({ params }) => {
  const { productid } = params;
  DbConnect();
  const category = await Category1.find({});
  const product = await products.findById(productid).populate("category");

  const total_fields =["name","description","price","discount_price","stock","brand","barcode","category","image"];
  const filledFields= total_fields.filter((field) => product[field]!== null).length;

  return (
    <div className=''>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-xl'>Edit product</h2>
        
        <div className='flex flex-1 gap-3 mb-3'>
        <p>total field :{total_fields.length}</p>
        <p>filled field: {filledFields}</p>
        </div>
      </div>

      <div className='  '>
        <div className='grid grid-cols-2  gap-3'>
          <TitleForm
            label="product title"
            field={product.name}
            productid={productid}
          />
          <DescriptionForm
            label="product Description"
            field={product.description}
            productid={productid}
          />
          <CategoryForm
            label="product category"
            field={product.category?.cat_title}
            productid={productid}
            cat_id={product.category?._id}
            data={category}
          />
          <PriceForm
            label="product price"
            field={product.price}
            productid={productid}
          />
          <DiscountPrice
            label="product DiscountPrice"
            field={product.discount_price}
            productid={productid}
          />
          <StockForm
            label="Stock product"
            field={product.stock}
            productid={productid}
          />
          <BrandForm
            label="product brand"
            field={product.brand}
            productid={productid}
          />
          <BarCodeForm
            label="product barcode"
            field={product.barcode}
            productid={productid}
          />
        </div>
      </div>

    </div>
  )
}

export default page