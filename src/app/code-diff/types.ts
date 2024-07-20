export type Theme = "light" | "vs-dark";

export type GetStoreState<T extends (selector: (store: any) => void) => void> =
  Parameters<Parameters<T>[0]>[0];
