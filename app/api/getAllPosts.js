export default async function GetAllPosts({ categoryId }) {
    const res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-list/${categoryId || 1}`
    );

    if (!res.ok) {
        throw new Error("Error Fetching posts");
    } else {
        return res.json();
    }
}
