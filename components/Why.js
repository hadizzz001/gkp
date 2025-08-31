import React from 'react'
import { Users, Target, CheckCircle, Leaf } from 'lucide-react'

const Why = () => {
  return (
    <section className="text-gray-700 body-font">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="mynewpara mt-10">Why us?</h1>
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <Users size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">
                Expert Team
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <Target size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">
                Client-Centric Approach
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <CheckCircle size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">
                Proven Track Record
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
              <div className="flex justify-center">
                <Leaf size={64} color="#07ae60" className="mb-3" />
              </div>
              <p className="mynewpara2">
                Sustainability Focus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
