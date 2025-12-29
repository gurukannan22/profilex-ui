import { getPortfolioData } from '@/lib/data';
import { ProfileEditor } from '@/components/admin/ProfileEditor';
import { SkillsEditor } from '@/components/admin/SkillsEditor';
import { SettingsEditor } from '@/components/admin/SettingsEditor';

export default async function AdminDashboard() {
    const data = await getPortfolioData();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ProfileEditor initialData={data.profile} />
                <SkillsEditor initialData={data.skills} />
                <SettingsEditor initialTheme={data.config?.theme || 'none'} />
            </div>
        </div>
    );
}
