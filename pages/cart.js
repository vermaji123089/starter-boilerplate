import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wraper from "@/components/Wraper";
import CartItem from "@/components/CartItem";
const Cart = () => {
  return (
    <div className=" w-full md:py-20 ">
      <Wraper>
        {/* Heading */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
            Shopping Cart
          </div>
        </div>
        {/* Heading */}

        {/* cart content */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
          <div className="text-lg font-bold" > Cart Item</div>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          </div>
          {/* cart summery */}
          <div className="flex-[1]"  >
          <div className="text-lg font-bold" > Summery</div>
<div className="p-5 bg-black/[0.05] rounded-xl ">
  <div className="flex justify-between">
    <div className=" uppercase text-md md:text-lg font-medium text-black" >Subtotal</div>
    <div className="text-md md:text-lg font-medium text-black" > $ 19.23</div>
  </div>
  <div className="text-sm md:text-md py-5 border-t mt-5"  >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, architecto quod incidunt a distinctio totam vero! Odit ullam eaque fuga veniam harum voluptatibus saepe natus sint, explicabo ut non voluptas?
  </div>
</div>
<button className='mt-5 hover:opacity-70  w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 ' >
CheckOut
                </button>
          </div>
        </div>
        {/* empty screen */}
        {/* cart content */}
        {/* <div className=" flex-col flex flex-[2] items-center pb-[50px] md:-mt-14 ">
          <Image src='/empty-cart.jpg' width={300} height={300} className="w-[300px] md:w-[400px] " />
          <span className="text-xl font-bold" >
            Your Cart is Empty
          </span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories
          </span>
          <Link href="/" className=" py-4 px-8 rounded-full  bg-black text-white text-lg font-medium transition-transform active:scale-95 mt-8 " >
          Continue Shopping
          </Link>
        </div> */}
      </Wraper>
    </div>
  );
};

export default Cart;
