export const convertValue = (value: string) => {
  const result =
    value.substring(0, value.length - 2) +
    "." +
    value.substring(value.length - 2, value.length);
  return parseFloat(result);
};

export const convertValueRef = (value: string) => {
  const result = value.replace(",", ".");
  return parseFloat(result);
};

export const currency = (value: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};
// 06022024
export const formatDate = (str: string) => {
  return (
    str.substring(0, 2) + "/" + str.substring(2, 4) + "/" + str.substring(4, 8)
  );
};
// 022024
export const formatDateComp = (str: string) => {
  return str.substring(0, 2) + "/" + str.substring(2, 6);
};

export const cleanNumber = (str: string) => {
  return str.slice(-9);
};

export const reduceSize = (str: string) => {
  const dataBlock = str.split(" ");
  return dataBlock.slice(0, 2).join(" ");
};
