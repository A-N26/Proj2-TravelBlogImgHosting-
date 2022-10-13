const loginFormHandler = async function (event) {
    event.preventDefault();

    const username = document.querySelector('#username-input-login');
    const password = document.querySelector('#password-input-login');

    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/homepage');
        alert(`Successfully logged in.`)
    } else {
        alert('Sorry, wrong username and password. Please try again.');
    }

};

document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);