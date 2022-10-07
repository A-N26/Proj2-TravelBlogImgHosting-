const signupFormHandler = async function (event) {
    event.preventDefault();

    const username = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();
    const email = document.querySelector('#email-input-signup').value.trim();
    console.log(username);
    console.log(password);
    console.log(email)
    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username, password
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(`Sorry, you're failed to sign up`);
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
