import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import moment from "moment";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState("");
  const { slug } = useParams();
  useEffect(() => {
    const query = `*[slug.current == "${slug}"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            publishedAt,
            "name": author->name,
            "authorImage": author->image
          }`;
    client.fetch(query).then((data) => {
      setBlogDetails(data[0]);
    });
  }, [slug]);
  console.log(blogDetails);
  return (
    <>
      {blogDetails ? (
        <div className="lg:w-[1200px] container mx-auto mt-12 p-4 lg:p-0 ">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img
                src={urlFor(blogDetails.authorImage).url()}
                alt={blogDetails.name}
                className="w-[3rem] rounded-md "
              />
              <span className="lg:text-2xl text-lg font-bold">{blogDetails.name}</span>
            </div>

            <p className="lg:text-xl text-md font-bold">
              {moment(blogDetails.publishedAt).format("MMM DD , YYYY")}
            </p>
          </div>

          <h2 className="mt-10 lg:text-4xl text-3xl leading-tight tracking-wider font-bold">
            {blogDetails.title}
          </h2>
          <div className="mt-6 shadow-xl">
            <img
              src={urlFor(blogDetails.mainImage)}
              alt={blogDetails.title}
              className="w-full lg:h-[30rem] "
            />
          </div>

          <p className="mt-12 lg:text-2xl text-lg text-justify leading-snug tracking-wide">
            {blogDetails.body}
          </p>

          <Link to="/">
            <button className="bg-primary p-2 px-4 text-white rounded-md mt-6 hover:bg-blue-900">Back to Home Page</button>
          </Link>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default BlogDetails;
