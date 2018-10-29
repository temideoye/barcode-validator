module.exports = barcode => {
  const code = `${barcode}`;
  const digits = () => /^\d{8,13}$/g.test(code);
  const validlengths = [8, 12, 13];
  if (!digits() || !validlengths.includes(code.length)) return false;

  let checksum = 0;
  const codelist = code.split("");
  const checkdigit = parseInt(codelist.pop(), 10);
  codelist.map((value, index) => {
    const digit = parseInt(value, 10);
    if (code.length % 2 === 1) checksum += index % 2 ? digit * 3 : digit;
    else checksum += index % 2 ? digit : digit * 3;
  });

  let check = checksum % 10;
  if (check !== 0) check = 10 - check;
  if (check === checkdigit) return true;
  return false;
};
