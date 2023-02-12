import _ from "lodash";

// Password Tokens
const lowercaseLetters: string = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXY";
const numbers: string = "0123456789";
const symbols: string = "~!@#$%^&*()-_/|:'[](){}";

const generate = ({ length, upper, lower, syms, nums }: any) => {
  if (!length) return "";

  let password: string | string[] = "";

  if (upper) password += uppercaseLetters;
  if (lower) password += lowercaseLetters;
  if (syms) password += symbols;
  if (nums) password += numbers;

  password = _.shuffle(password.split(""));

  return password.slice(0, length).join("");
};

export default generate;
