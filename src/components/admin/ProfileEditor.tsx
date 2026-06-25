'use client';

import { useActionState } from 'react';
import { updateProfile } from '@/actions/content';

export function ProfileEditor({ initialData }: { initialData: Record<string, string> }) {
    const [state, action, isPending] = useActionState(updateProfile, null);

    return (
        <div className="p-6 bg-card border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form action={action} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input name="name" defaultValue={initialData.name} className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <input name="role" defaultValue={initialData.role} className="w-full px-3 py-2 border rounded" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Summary</label>
                    <textarea name="summary" defaultValue={initialData.summary} className="w-full px-3 py-2 border rounded" rows={4} />
                </div>
                <button disabled={isPending} className="px-4 py-2 bg-primary text-primary-foreground rounded">
                    {isPending ? 'Saving...' : 'Save Profile'}
                </button>
                {state?.success && <p className="text-green-600 text-sm mt-2">Saved successfully!</p>}
            </form>
        </div>
    );
}
