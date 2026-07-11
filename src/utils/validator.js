/**
 * validator.js
 * ------------------------
 * 数据验证模块
 *
 * 本模块仅负责数据验证，不涉及任何 HTML 或 UI 操作。
 *
 * 所有验证函数统一返回：
 *
 * 验证成功：
 * {
 *   valid: true,
 *   message: ""
 * }
 *
 * 验证失败：
 * {
 *   valid: false,
 *   message: "错误信息"
 * }
 */

/**
 * 创建统一的成功返回对象
 *
 * @returns {{valid: boolean, message: string}}
 */
function success() {
  return {
    valid: true,
    message: "",
  };
}

/**
 * 创建统一的失败返回对象
 *
 * @param {string} message 错误信息
 * @returns {{valid: boolean, message: string}}
 */
function failure(message) {
  return {
    valid: false,
    message,
  };
}

/**
 * 验证必填项
 *
 * 用于检查输入是否为空。
 *
 * 空值包括：
 * - undefined
 * - null
 * - ""
 *
 * @param {*} value 待验证值
 * @param {string} fieldName 字段名称
 *
 * @returns {{valid:boolean,message:string}}
 */
export function validateRequired(value, fieldName = "Field") {
  if (value === undefined || value === null || value === "") {
    return failure(`${fieldName} is required.`);
  }

  return success();
}

/**
 * 验证正数
 *
 * 要求：
 * - 必须为数字
 * - 必须大于0
 *
 * @param {*} value 待验证值
 * @param {string} fieldName 字段名称
 *
 * @returns {{valid:boolean,message:string}}
 */
export function validatePositiveNumber(value, fieldName = "Value") {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return failure(`${fieldName} must be a valid number.`);
  }

  if (number <= 0) {
    return failure(`${fieldName} must be greater than 0.`);
  }

  return success();
}

/**
 * 验证百分比
 *
 * 合法范围：
 * 0 ~ 100（包含边界）
 *
 * 示例：
 * 0
 * 36
 * 100
 *
 * @param {*} value 百分比
 * @param {string} fieldName 字段名称
 *
 * @returns {{valid:boolean,message:string}}
 */
export function validatePercentage(value, fieldName = "Percentage") {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return failure(`${fieldName} must be a valid number.`);
  }

  if (number < 0 || number > 100) {
    return failure(`${fieldName} must be between 0 and 100%.`);
  }

  return success();
}

/**
 * 验证医院覆盖率
 *
 * 医院覆盖率本质属于百分比，
 * 单独提供该函数便于业务语义更清晰，
 * 后续如果需要增加特殊规则，可直接扩展。
 *
 * 合法范围：
 * 0 ~ 100（包含边界）
 *
 * @param {*} value 医院覆盖率
 *
 * @returns {{valid:boolean,message:string}}
 */
export function validateHospitalCoverage(value) {
  return validatePercentage(value, "Hospital Coverage");
}