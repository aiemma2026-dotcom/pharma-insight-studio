/**
 * insightEngine.js
 * -----------------------
 * Generate simple business insights
 * based on calculation results.
 */

export function generateInsight(result) {

    const opportunity = [];
    const risk = [];
    const recommendation = [];

    //----------------------------------
    // Opportunity
    //----------------------------------

    if (result.tam > 400) {
        opportunity.push(
            "Large addressable market (>400 Billion RMB)"
        );
    }

    if (result.sam > 200) {
        opportunity.push(
            "Strong commercial potential"
        );
    }

    //----------------------------------
    // Risk
    //----------------------------------

    if (result.diagnosisRate < 0.5) {
        risk.push(
            "Diagnosis rate remains relatively low"
        );
    }

    if (result.penetration < 0.1) {
        risk.push(
            "Market penetration may require long-term investment"
        );
    }

    //----------------------------------
    // Recommendation
    //----------------------------------

    if (result.sam > 200) {
        recommendation.push(
            "Prioritize Tier 3 hospitals"
        );
    }

    recommendation.push(
        "Develop reimbursement strategy early"
    );

    return {

        opportunity,

        risk,

        recommendation

    };

}