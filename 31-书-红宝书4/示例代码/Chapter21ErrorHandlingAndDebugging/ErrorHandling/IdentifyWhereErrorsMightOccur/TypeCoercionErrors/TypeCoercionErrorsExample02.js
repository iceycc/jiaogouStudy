function concat(str1, str2, str3) {
  let result = str1 + str2;
  if (str3) {  // avoid!!!
    result += str3;
  }
  return result;
}
