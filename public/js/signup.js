const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
    const email = document.querySelector('#email-input-signup').value.trim();

    console.log(username, password, email)

    if (username && password && email) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Too sad, signup failed.');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
