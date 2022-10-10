async function newFormHandler(event) {
    event.preventDefault()

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="blog-content"]').value;

    //may need to add image!
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler)