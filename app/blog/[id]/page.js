import GetSinglePost from "@/app/api/getSingle";

export default async function SingleBlog({ params }) {
    const id = params.id;
    const data = await GetSinglePost(id);
    const blog = data.postDetails;

    if (blog) {
        return (
            <section className="single-blog mt-24 mx-16 p-10">
                <h1 className="text-center text-5xl font-bold italic leading-tight  text-gray-800">
                    " {blog.title} "
                </h1>
                <div className="mx-auto">
                    <div className="image w-100 h-[60rem] flex justify-center items-center">
                        <img
                            className="object-cover relative rounded-sm border border-gray-100 shadow-sm"
                            src={blog.img}
                            alt="Blog"
                        />
                    </div>
                    <div className="p-8 mx-4">
                        <h4 className=" text-gray-800 text-sm italic p-2">
                            {new Date(blog.created_at).toLocaleString()}
                        </h4>
                        <h5 className="text-4xl py-4">{blog.title}</h5>
                        <h6 className="text-2xl py-4 leading-9">
                            {blog.content}
                        </h6>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-red-500 mb-4">
                    Post Not Found
                </h1>
                <p className="text-gray-600">
                    The requested post could not be found.
                </p>
                
            </div>
        );
    }
}
