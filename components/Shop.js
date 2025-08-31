import { useState, useEffect } from 'react';
import CarCard from './CarCard'; // Ensure this component exists
import { useRouter } from "next/navigation";

const YourComponent = () => { 
  const router = useRouter();
 
 
  return (
    <div className="container ProvidersIfSelectedProductMatchesFilter mt-10">
      <content-block slug="product-page-wssb">
        <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL">
          
            <>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center;}",
                }}
              />

          
              <div className="flex justify-center items-center mt-6">
                <button
                  id="mybbtn"
                  className="myGray"
                  onClick={() => router.push("/shop")}
                >
                  Shop All
                </button>
              </div>
            </>
  
        </div>
      </content-block>
    </div>
  );
};

export default YourComponent;
