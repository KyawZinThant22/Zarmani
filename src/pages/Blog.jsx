import React, { useEffect, useState } from "react";
import AppHeader from "../components/AppHeader";
import { client } from "../client";
import Category from "../components/Category";
import Blogs from "./Blogs";

const Blog = () => {
  const [appHeader, setAppHeader] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    const query2 = "*[_type == 'category']";
    client.fetch(query2).then((data) => {
      setCategory(data);
    });
    console.log(selectedCategory)

    // const quert = `*[categories.current == ${selectedCategory.toString()}]`;
    // client.fetch(quert).then((data)=>{
    //   console.log(data)
    // })


    const query3 = `*[_type ==  "post"   &&  "${selectedCategory}" in categories[]->slug.current]
    {
       title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
              categories[] -> {
                    title,
                    slug
              },
            publishedAt,
            "name": author->name,
            "authorImage": author->image,
    }`;
    client.fetch(query3).then((data) => {
      setPost(data);
    });
  }, [selectedCategory]);

  console.log(post);

  useEffect(() => {

    const query4 = `*[_type == "post"]
    {
       title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
              categories[] -> {
                    title,
                    slug
              },
            publishedAt,
            "name": author->name,
            "authorImage": author->image,
    }`;
    client.fetch(query4).then((data)=>{
      setPost(data)
    })
    const query = '*[_type == "appheader"]';
    client.fetch(query).then((data) => {
      setAppHeader(data[0]);
    });
  }, []);
  // for app Header
  const { title, description } = appHeader;

  return (
    <div className=" ">
      <AppHeader title={title} description={description} />
      <Category category={category} setSelectedCategory={setSelectedCategory} />
      <Blogs post={post} />
    </div>
  );
};

export default Blog;
