import React from "react";
import { urlFor } from "../client";
import moment from "moment";
import { Link } from "react-router-dom";


const Blogs = ({ post }) => {
  return (
    <div id="blogs" className="mt-12 bg-black  p-10">
        <h1 className="text-white text-center  text-2xl font-bold"> How to Master at Fucking Articles</h1>
        <div className="text-center border-2 border-solid border-primary w-[20rem] mt-2 mx-auto"></div>
      <div className="flex gap-4 mt-12 flex-col lg:flex-row lg:flex-wrap ">
        {post &&
          post.map((post) => (
            <div
              className="bg-white lg:w-[36rem] rounded-xl lg:p-10 p-4 "
              key={post.title}
            >
              <img
                src={urlFor(post.mainImage)}
                alt={post.title}
                className=" lg:h-[17rem] rouded-lg overflow-hidden bg-DarkGray w-full"
              />
              <p className="text-2xl text-center font-bold mt-6 ">
                {post.title}
              </p>

              <div className="flex items-center justify-evenly gap-6 mt-4 space-y-3">
                <img
                  src={urlFor(post.authorImage).url()}
                  className="lg:w-14 w-10 rounded-md "
                />
                <div className="flex flex-col"> 
                  <p className="lg:text-xl text-md font-bold ">{post.name}</p>
                  <p className="text-sm text-DarkGray">{moment(post.publishedAt).format('MMM DD , YYYY')}</p>
                </div>
                <Link to={`blogs/${post.slug.current}`}>
                    <button className="bg-primary p-2 lg:px-3 hover:bg-blue-800 rounded-md text-md text-white lg:text-xl">Read More</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
