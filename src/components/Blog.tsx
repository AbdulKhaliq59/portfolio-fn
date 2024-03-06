import React from 'react'
import blogPosts from '../../data/blogs.json'
const Blog = () => {
    return (
        <>
            <section className="bg-white dark:bg-[#1f2a3e]">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>
                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                        {blogPosts.map((post, index) => (
                            <div key={index}>
                                <img className="relative z-10 object-cover w-full rounded-md h-96" src={post.imageSrc} alt="" />

                                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        {post.title}
                                    </a>

                                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                        {post.content}
                                    </p>

                                    <p className="mt-3 text-sm text-[#00bdbc] dark:text-[#00bdbc]">{post.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog