const logout = async function () {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/homepage');
        alert(`Successfully logged out.`)
    } else {
        alert('Failed to log out');
    }
};

document.querySelector("#logout").addEventListener("click", logout);
