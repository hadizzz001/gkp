'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!searchId) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${searchId}`);
        const data = await res.json();
        if (data && data.length > 0) {
          setBlog(data[0]); // take first result
        }
      } catch (error) {
        console.error('Failed to fetch blog:', error);
      }
    };

    fetchBlog();
  }, [searchId]);

  if (!blog) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;
  }

  return (
    <>
      <section
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          padding: "40px 20px",
          marginTop: "6em",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1400px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
          className="content-container"
        >
          {/* Image Column */}
          <div
            style={{
              flex: "1 1 50%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            className="content-image"
          >
            <div
              style={{
                backgroundImage: `url(${blog.img[0]})`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                minHeight: "700px",
              }}
            ></div>
          </div>

          {/* Text Column */}
          <div
            style={{
              flex: "1 1 50%",
              paddingLeft: "20px",
            }}
            className="content-text"
          >
            <h1 className="mynewpara">{blog.title}</h1>
            <p
              className="mynewpara1 mb-5 mt-5"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            ></p>
        
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column; /* stack columns */
          }
          .content-text, .content-image {
            width: 100% !important;
            padding-left: 0 !important;
          }
          .content-text {
            order: 2;
            margin-top: 20px;
          }
          .content-image {
            order: 1;
            min-height: 300px;
          }
        }
      `}</style>
    </>
  );
}
