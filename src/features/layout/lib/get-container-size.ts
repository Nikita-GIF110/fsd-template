export const getContainerSize = (
  isTable: boolean,
  isDesktop: boolean
): string => {
  if (isDesktop) return "container.xl";

  if (isTable) return "container.md";

  return "full";
};
