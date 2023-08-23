export default async function GetSinglePost(id) {
    const res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-details/${id}`
    );

    if (!res.ok) {
        throw new Error("Error Fetching posts");
    } else {
        return res.json();
    }
}
