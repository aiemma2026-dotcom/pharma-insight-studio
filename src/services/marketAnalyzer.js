/**
 * Market Analysis Engine
 *
 * 根据市场规模输出商业分析建议
 */

export function analyzeMarket({
    tam,
    sam,
    som
}) {

    let attractiveness = "";

    if (som >= 10000000000) {
        attractiveness = "Very High";
    } else if (som >= 5000000000) {
        attractiveness = "High";
    } else if (som >= 1000000000) {
        attractiveness = "Medium";
    } else {
        attractiveness = "Low";
    }

    return {

        marketAttractiveness: attractiveness,

        recommendation:
            attractiveness === "Very High"
                ? "建议重点投入资源，加快商业化布局。"
                : attractiveness === "High"
                ? "市场具有较高潜力，建议重点评估准入与推广策略。"
                : attractiveness === "Medium"
                ? "建议控制投入，优先验证商业模式。"
                : "建议谨慎评估投资回报。"
    };

}