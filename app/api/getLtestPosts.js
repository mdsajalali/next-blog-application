export default async function GetLatestPosts(){
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");

    if(!res.ok){
        throw new Error ('Error Fetching posts')
    }
    else{
        return  res.json();
    }
}