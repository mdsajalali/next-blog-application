export default async function GetAllCategories(){
    const res = await fetch("https://basic-blog.teamrabbil.com/api/post-categories");

    if(!res.ok){
        throw new Error ('Error Fetching posts')
    }
    else{
        return  res.json();
    }
}