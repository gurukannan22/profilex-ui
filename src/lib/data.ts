import portfolioData from '@/data/portfolio.json';

export async function getPortfolioData() {
    return portfolioData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function savePortfolioData(data: unknown) {
    console.warn('Saving data is not supported in static export mode.');
    // In a real static app, you'd need an external API (Firebase/Supabase) to persist changes.
    return;
}
