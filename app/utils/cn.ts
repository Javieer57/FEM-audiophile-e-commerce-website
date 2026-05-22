export const cn = (...classes: Array<string | false>) =>
  classes.filter(Boolean).join(" ");
