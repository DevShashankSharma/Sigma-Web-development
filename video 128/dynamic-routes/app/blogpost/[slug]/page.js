export default function Page({ params }) {
    // throw new Error('error in blog post')
    // fetch your Blog post by its slug
    let languages = ['python', 'javascript', 'go', 'cpp', 'c', 'rust', 'java']

    if (languages.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    }
    else {
        return <div>Post not found</div>
    }
}