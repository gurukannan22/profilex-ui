import { getPortfolioData } from "@/lib/data";
import { AwardsClient, Award } from "./AwardsClient";

export async function Awards() {
    const data = await getPortfolioData();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const awards = (data as any).awards as Award[];

    return <AwardsClient awards={awards} />;
}
