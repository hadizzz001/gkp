import { useState, useEffect } from 'react';
import CarCard from './CarCard'; // Ensure this component exists
import { useRouter } from "next/navigation";

const YourComponent = () => {
  const [allTemps, setAllTemps] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/products', { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        setAllTemps(data.slice(0, 4)); // first 10 items
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="container ProvidersIfSelectedProductMatchesFilter mt-4">
      <content-block slug="product-page-wssb">
        <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL">
          {allTemps && allTemps.length > 0 ? (
            <>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center;}",
                }}
              />

              <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL px-3 mt-20">
                <section
                  className="mb-5 grid grid-cols-2 md:grid-cols-4 gap-5"
                  style={{ maxWidth: "100%" }}
                >
                  {allTemps.map((temp) => (
                    <div key={temp.id}>
                      <CarCard temp={temp} />
                    </div>
                  ))}
                </section>
              </div>

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
          ) : (
            <div className="home___error-container">
              <h2 className="text-black text-xl font-bold">No products available</h2>
            </div>
          )}
        </div>
      </content-block>
    </div>
  );
};

export default YourComponent;
