import Link from "next/link";
import GetAllCategories from "./api/getAllCategories";
import GetLatestPosts from "./api/getLtestPosts";

export default async function Home() {
    const latestPosts = await GetLatestPosts();

    const categories = await GetAllCategories();

    const imageStyle = {
        height: "200px",
    };

    return (
        <>
          

            <section className="categories  p-12 mx-24 ">
                <h2 className="text-3xl text-gray-700 text-center mb-8">
                    Blog Categories
                </h2>
                <div className="category  text-center">
                    {categories.map((category) => (
                        <Link
                            href={{
                                pathname: "/blog",
                                query: { id: category.id },
                            }}
                        >
                            <button className="rounded-full bg-gray-800 text-white py-2 px-3 m-4">
                                {category.name}
                            </button>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="latest-blogs m-auto">
                <div className=" mx-24">
                    <h2 className="text-4xl text-gray-800 text-center fw-bold">
                        Latest Blogs
                    </h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 p-10">
                        {latestPosts.map((blog) => (
                            <div className="basis-1/4 mx-2 ">
                                <div className="block blog-card rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                    <a href="#!">
                                        <img
                                            className="rounded-t-lg"
                                            src={blog.img}
                                            alt=""
                                            style={imageStyle}
                                        />
                                    </a>
                                    <div className="p-6">
                                        <Link href={`/blog/${blog.id}`}>
                                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                                {blog.title}
                                            </h5>
                                        </Link>
                                        <h6>{blog.created_at}</h6>
                                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            {blog.short}
                                        </p>

                                        <Link href={`/blog/${blog.id}`}>
                                            <button
                                                type="button"
                                                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-900 bg-blue-400"
                                            >
                                                Read More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
