import type { ReactNode } from "react";
import type { ContainerProps as ChakraContainerProps } from "@chakra-ui/react";
import { Container as ChakraContainer, useMediaQuery } from "@chakra-ui/react";
import { getContainerSize } from "features/layout/lib/get-container-size";

interface ContainerProps extends ChakraContainerProps {
  children: ReactNode;
}

const breackpoints = [
  "(min-width: 768px) and (max-width: 1399px)",
  "(min-width: 1400px)",
];

export const Container = ({
  children,
  ...otherContainerProps
}: ContainerProps) => {
  const [isTable, isDesktop] = useMediaQuery(breackpoints);

  return (
    <ChakraContainer
      flexGrow={1}
      maxW={getContainerSize(isTable, isDesktop)}
      {...otherContainerProps}
    >
      {children}
    </ChakraContainer>
  );
};
