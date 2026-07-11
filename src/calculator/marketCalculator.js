/**
 * marketCalculator.js
 * ----------------------------------
 * Pharma Insight Studio
 * Market Calculation Engine
 *
 * 负责：
 *  - TAM
 *  - SAM
 *  - SOM
 *
 * 不负责：
 *  - HTML
 *  - UI
 *  - 图表
 *  - AI分析
 */

/**
 * 参数校验
 */
function validateNumber(value, fieldName) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`${fieldName} must be a valid number.`);
  }
}

/**
 * 百分比统一转换
 * 36 -> 0.36
 * 0.36 -> 0.36
 */
function normalizeRate(rate) {
  validateNumber(rate, "Rate");

  return rate > 1 ? rate / 100 : rate;
}

/**
 * 金额格式化
 * 74317824000
 * =>
 * 743.18亿元
 */
export function formatCurrency(value) {
  validateNumber(value, "Currency");

  return `${(value / 100000000).toFixed(2)}亿元`;
}

/**
 * TAM
 */
export function calculateTAM({
  patientPopulation,
  diagnosisRate,
  treatmentRate,
  annualCost,
}) {

  validateNumber(patientPopulation, "patientPopulation");
  validateNumber(diagnosisRate, "diagnosisRate");
  validateNumber(treatmentRate, "treatmentRate");
  validateNumber(annualCost, "annualCost");

  const diagnosis = normalizeRate(diagnosisRate);
  const treatment = normalizeRate(treatmentRate);

  return (
    patientPopulation *
    diagnosis *
    treatment *
    annualCost
  );
}

/**
 * SAM
 */
export function calculateSAM({
  patientPopulation,
  diagnosisRate,
  treatmentRate,
  annualCost,
  hospitalCoverage,
}) {

  validateNumber(hospitalCoverage, "hospitalCoverage");

  const coverage = normalizeRate(hospitalCoverage);

  const tam = calculateTAM({
    patientPopulation,
    diagnosisRate,
    treatmentRate,
    annualCost,
  });

  return tam * coverage;
}

/**
 * SOM
 */
export function calculateSOM({
  patientPopulation,
  diagnosisRate,
  treatmentRate,
  annualCost,
  hospitalCoverage,
  penetrationRate,
}) {

  validateNumber(penetrationRate, "penetrationRate");

  const penetration = normalizeRate(penetrationRate);

  const sam = calculateSAM({
    patientPopulation,
    diagnosisRate,
    treatmentRate,
    annualCost,
    hospitalCoverage,
  });

  return sam * penetration;
}

/**
 * Scenario Calculator
 *
 * scenario:
 * {
 *   penetrationRate:0.08
 * }
 */
export function calculateScenario(params, scenario) {

  if (!scenario?.penetrationRate) {
    throw new Error("Scenario must contain penetrationRate.");
  }

  return calculateSOM({
    ...params,
    penetrationRate: scenario.penetrationRate,
  });
}