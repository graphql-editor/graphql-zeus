export const useZeusVariables = <T>(variables: T) => <
  Z extends {
    [P in keyof T]: unknown;
  }
>(
  values: Z,
) => {
  return {
    $params: Object.keys(variables)
      .map((k) => `$${k}: ${variables[k as keyof T]}`)
      .join(', '),
    $: <U extends keyof Z>(variable: U) => {
      return (`$${variable}` as unknown) as Z[U];
    },
    values,
  };
};

export type VariableInput = {
  $params: ReturnType<ReturnType<typeof useZeusVariables>>['$params'];
  values: Record<string, unknown>;
};
