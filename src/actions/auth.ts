// 'use server'; // Disabled for static export

// Note: In a static export, real server actions don't work.
// We are stimulating this for the build to pass, but logic should be client-side or external API.
// For now, we will just simulate success/failure in a way that doesn't break the build.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function login(prevState: any, formData: FormData) {
    const password = formData.get('password');
    // Hardcoded check for demo purposes or environment variable if available during build (but unsafe)
    // Client-side validation is the only way in purely static without API.

    // We'll let the client component handle the actual redirection logic to avoid server cookies.
    if (password === 'admin123') { // Simple demo password
        return { success: true };
    }

    return { error: 'Invalid password' };
}

export async function logout() {
    // Client side must handle this
    return { success: true };
}
