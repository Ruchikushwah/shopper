import products from '@/models/Product';
import DbConnect from '@/utils/dbConnect';
import TitleForm from './_components/TitleForm';
import DescriptionForm from './_components/DescriptionForm';
import CategoryForm from './_components/CategoryForm';
import PriceForm from './_components/PriceForm';
import DiscountPrice from './_components/DiscountPrice';
import StockForm from './_components/StockForm';
import BrandForm from './_components/BrandForm';
import BarCodeForm from './_components/BarCodeForm';
import ImageUploadForm from './_components/ImageUploadForm';
import PublishButton from './_components/publish-button';
import Category1 from '@/models/Category1';
import Products from '@/models/Product';


const page = async ({ params }) => {
  const { productid } = params;
  DbConnect();
  const category = await Category1.find({});
  const products = await Products.findById(productid).populate("category");

  const total_fields =["name","description","price","discount_price","stock","brand","barcode","category","image"];
  const filledFields= total_fields.filter((field) => products[field]!== null).length;
  const remainingFields = total_fields.filter((field) => !products[field]);
 console.log("dekha do"+remainingFields.length)

  return (
    <div className=''>
      <div className='flex flex-1  flex-col '>
       <div className='flex justify-between '> 
        <h2 className='text-xl'>Edit product</h2>
        <PublishButton  productid={productid} className={remainingFields.length ? "cursor-not-allowed" : "cursor-pointer"} isDisable={remainingFields.length}/>
        </div>
        <div className='flex flex-1 gap-3 mb-3'>
        <p>total field :{total_fields.length}</p>
        <p>filled field: {filledFields}</p>
        </div>
      </div>

      <div className='  '>
        <div className='grid grid-cols-2  gap-3'>
          <TitleForm
            label="product title"
            field={products.name}
            productid={productid}
          />
          <DescriptionForm
            label="product Description"
            field={products.description}
            productid={productid}
          />
          <CategoryForm
            label="product category"
            field={products.category?.cat_title}
            productid={productid}
            cat_id={products.category?._id}
            data={category}
          />
          <PriceForm
            label="product price"
            field={products.price}
            productid={productid}
          />
          <DiscountPrice
            label="product DiscountPrice"
            field={products.discount_price}
            productid={productid}
          />
          <StockForm
            label="Stock product"
            field={products.stock}
            productid={productid}
          />
          <BrandForm
            label="product brand"
            field={products.brand}
            productid={productid}
          />
          <BarCodeForm
            label="product barcode"
            field={products.barcode}
            productid={productid}
          />

          <ImageUploadForm 
          label="product image"
          field={products.image}
          productid={productid}
          />
        </div>
      </div>

    </div>
  )
}

export default page