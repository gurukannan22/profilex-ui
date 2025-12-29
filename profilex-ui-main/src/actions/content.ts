// 'use server';

import { getPortfolioData, savePortfolioData } from '@/lib/data';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export async function updateProfile(prevState: any, formData: FormData) {
    const data = await getPortfolioData();
    // Logic disabled for static export
    await savePortfolioData(data);
    return { success: true };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function updateSkills(formData: FormData) {
    // Disabled
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function updateTheme(theme: string) {
    // Disabled
}
