import { getPortfolioData } from "@/lib/data";
import { ExperienceClient, Experience as ExperienceType } from "./ExperienceClient";

export async function Experience() {
    const data = await getPortfolioData();
    const experiences = data.experiences as ExperienceType[];

    return <ExperienceClient experiences={experiences} />;
}
