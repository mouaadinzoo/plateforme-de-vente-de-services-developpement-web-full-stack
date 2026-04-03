// logout.js
const logout = async (refreshToken) => {
    try {
        const response = await fetch('/api/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'), // Ensure you have a function to get the CSRF token
            },
            body: JSON.stringify({ refresh_token: refreshToken }),
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log(responseData.message);
            // Handle successful logout, e.g., redirect to login page
        } else {
            console.error('Logout failed:', responseData.message);
        }
    } catch (error) {
        console.error('Logout failed:', error.message);
    }
};

// Helper function to get the CSRF token from cookies
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === `${name}=`) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export default logout;
