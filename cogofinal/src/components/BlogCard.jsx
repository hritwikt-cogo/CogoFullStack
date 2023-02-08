import React from "react";
import { Link } from "react-router-dom";

function BlogCard({info,k}) {

  // console.log(info.text)
  // console.log(k,info)
  // console.log(info.category.__data__.category_name)
  return (
    <div key={k} class=''>
      <>
          <div class=" overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-80 md:w-80 cursor-pointer m-auto">
            <a href="#" class="w-full block h-full">
              <img
                alt="blog photo"
                src={info.thumbnail}
                class="max-h-40 w-full object-cover"
              />
              <div class="dark:bg-gray-200 w-full p-4">
                <p class="text-primary-600 text-2xl font-medium">
                  {info.title}
                </p>
                {/* <p class="text-gray-800 text-sm font-medium mb-2">
                </p> */}
                <p class=" truncate text-gray-600 font-light text-md">
                  {info.description}
                </p>
                <a class="inline-flex text-primary-600" href="#">
                    <Link to={`/blogs/${k}`}>Read More</Link>
                  </a>
                <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                  <span class="m-1 px-2 py-1 rounded bg-primary-600">
                    #{info.category.__data__.category_name}
                  </span>
                  
                </div>
                <div class="flex items-center mt-2">
                  <img
                    class="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                  />

                  <div class="pl-3">
                    <div class="font-medium">Jean Marc</div>
                    <div class="text-gray-600 text-sm">CTO of Supercars</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
      </>
    </div>
  );
}

export default BlogCard;
