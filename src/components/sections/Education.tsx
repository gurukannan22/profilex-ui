import { getPortfolioData } from "@/lib/data";
import { EducationClient, Education as EducationType } from "./EducationClient";

export async function Education() {
    const data = await getPortfolioData();
    const education = data.education as EducationType[];

    return <EducationClient education={education} />;
}
