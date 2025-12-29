'use client';

import { useActionState } from 'react';
import { updateTheme } from '@/actions/content';

export function SettingsEditor({ initialTheme }: { initialTheme: string }) {
    // updateTheme action needs to be updated to match signature if used with useActionState, 
    // or simple bind if just a server action called directly. 
    // For simplicity here, assuming direct server action call or simple wrapper.

    async function handleThemeChange(formData: FormData) {
        await updateTheme(formData.get('theme') as string);
    }

    return (
        <div className="p-6 bg-card border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <form action={handleThemeChange} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Seasonal Theme</label>
                    <select name="theme" defaultValue={initialTheme} className="w-full px-3 py-2 border rounded">
                        <option value="none">None (Professional)</option>
                        <option value="festival">Festival (Diwali/Holi/Xmas)</option>
                    </select>
                </div>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                    Update Theme
                </button>
            </form>
        </div>
    );
}
