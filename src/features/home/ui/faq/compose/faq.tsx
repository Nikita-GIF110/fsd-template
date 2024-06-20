import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import type { QuestionEntity } from "features/home/models";
import { Collapse } from "../ui/collapse";
import { Support } from "../ui/support";

interface FaqProps {
  questions: Array<QuestionEntity>;
  header: string;
  description: string;
  linkText: string;
  to: string;
}

export const Faq = ({
  questions = [],
  header,
  description,
  linkText,
  to,
}: FaqProps) => (
  <Flex padding="80px 0">
    <Box width="50%" marginRight="44px">
      <Support
        header={header}
        description={description}
        to={to}
        linkText={linkText}
      />
    </Box>

    <List width="50%">
      {questions.map((question, index) => (
        <ListItem
          key={question.id}
          marginBottom={questions.length - 1 === index ? "0" : "8px"}
        >
          <Collapse header={question.name}>{question.description}</Collapse>
        </ListItem>
      ))}
    </List>
  </Flex>
);
