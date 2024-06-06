import type { ReactNode } from "react";
import type { ContainerProps } from "@chakra-ui/react";
import { Container, useMediaQuery } from "@chakra-ui/react";
import { getContainerSize } from "features/layout/lib/get-container-size";

interface LayoutContainerProps extends ContainerProps {
  children: ReactNode;
}

const breackpoints = [
  "(min-width: 768px) and (max-width: 1399px)",
  "(min-width: 1400px)",
];

export const LayoutContainer = ({
  children,
  ...otherContainerProps
}: LayoutContainerProps) => {
  const [isTable, isDesktop] = useMediaQuery(breackpoints);

  return (
    <Container
      flexGrow={1}
      maxW={getContainerSize(isTable, isDesktop)}
      {...otherContainerProps}
    >
      {children}
    </Container>
  );
};
