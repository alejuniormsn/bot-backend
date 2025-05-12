export const keepStrWithHour = (dt: string | undefined) => {
  if (dt) {
    return `${dt.slice(9, 10)}/${dt.slice(6, 7)}/${dt.slice(0, 4)} ${dt.slice(
      11,
      19
    )}`;
  } else {
    return "";
  }
};

export const startedDate = () => new Date("2019-07-30");

export const dateComp = () =>
  new Date(new Date().setHours(new Date().getHours() - 3)).toISOString();
