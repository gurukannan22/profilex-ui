'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from "@/actions/auth";

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setError(null);

        try {
            const result = await login(null, formData);
            if (result.success) {
                // Set cookie client-side for "session" simulation
                document.cookie = "admin_session=true; path=/; max-age=604800";
                router.push('/admin');
            } else {
                setError(result?.error || 'Login failed');
            }
        } catch (e) {
            setError('An error occurred');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-sm p-6 bg-card rounded-lg border shadow-sm">
                <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter admin password (admin123)"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button disabled={isLoading} className="w-full py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}
