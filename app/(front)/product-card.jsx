"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Link from "next/link";
   
  export function ProductCard({data}) {
    return (
      <Link href={`/${data.slug}`}>
      <Card className="flex-1 flex-col flex">
        <CardHeader shadow={false} floated={false} className="h-48">
          <img
            src={`/productImage/${data.image}`}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {data.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
          {(data.discount_price) ? " ₹"+data.discount_price :"₹"+ data.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 line-clamp-2"
          >
           {data.description.substr(0,100)}
          </Typography>
        </CardBody>
       
      </Card>
      </Link>
    );
  }
