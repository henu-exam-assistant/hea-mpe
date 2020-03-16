/**
 * 将被数据库转译的\n符号转回换行符
 * @param {string} text 目标文字
 */
export function getTranslatedText(text: string) {
    const pattern = "\\\\n";
    const target = "\n";
    const reg = new RegExp(pattern, "g");
    return text.replace(reg, target);
}