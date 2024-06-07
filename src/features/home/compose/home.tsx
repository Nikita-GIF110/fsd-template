import { Flex, Box, Text, useDisclosure, Heading } from "@chakra-ui/react";
import { Button } from "shared/ui/button";
import { Input, InputFormField } from "shared/ui/input";
import { Textarea, TextareaFormField } from "shared/ui/textarea";
import { Select } from "shared/ui/select";
import { FormDialog } from "shared/ui/dialog";
import { useI18N } from "shared/lib/useI18n";
import { useTranslate } from "shared/lib/useTranslate";

export const Home = () => {
  const translate = useTranslate();
  const { lang, setLang } = useI18N();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const onChangelang = () => {
    switch (lang) {
      case "en":
        setLang("ru");
        break;
      case "ru":
        setLang("en");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Heading marginBottom={3}>
        {translate("Home.header")} {lang}
      </Heading>

      <Flex columnGap={3}>
        <Flex direction="column" rowGap={3} flexGrow={1} flexBasis="25%">
          <Text>{translate("Home.buttons")} MD</Text>

          <Box>
            <Button marginRight={3} onClick={onOpen}>
              rounded Outline
            </Button>
            <Button variant="circleOutline" onClick={onChangelang}>
              R
            </Button>
          </Box>

          <Box>
            <Button variant="roundedSolid" marginRight={3}>
              rounded Solid
            </Button>
            <Button variant="circleSolid">C</Button>
          </Box>

          <Box marginBottom={3}>
            <Button variant="outline" marginRight={3}>
              outline
            </Button>
            <Button variant="solid">solid</Button>
          </Box>

          <Text>{translate("Home.buttons")} SM</Text>

          <Box>
            <Button marginRight={3} size="sm">
              rounded Outline
            </Button>
            <Button variant="circleOutline" size="sm">
              R
            </Button>
          </Box>

          <Box>
            <Button variant="roundedSolid" marginRight={3} size="sm">
              rounded Solid
            </Button>
            <Button variant="circleSolid" size="sm">
              C
            </Button>
          </Box>

          <Box marginBottom={3}>
            <Button variant="outline" marginRight={3} size="sm">
              outline
            </Button>
            <Button variant="solid" size="sm">
              solid
            </Button>
          </Box>
        </Flex>

        <Flex direction="column" rowGap={3} flexGrow={1} flexBasis="25%">
          <Text>{translate("Home.inputs")}</Text>

          <Input placeholder="input xs" size="xs" />
          <Input placeholder="input sm" size="sm" />
          <Input placeholder="input md" size="md" />
          <Input placeholder="input lg" size="lg" />
        </Flex>

        <Flex direction="column" rowGap={3} flexGrow={1} flexBasis="25%">
          <Text>{translate("Home.textareas")}</Text>

          <Textarea placeholder="textarea xs" size="xs" />
          <Textarea placeholder="textarea sm" size="sm" />
          <Textarea placeholder="textarea md" size="md" />
          <Textarea placeholder="textarea lg" size="lg" />
        </Flex>

        <Flex direction="column" rowGap={3} flexGrow={1} flexBasis="25%">
          <Text>{translate("Home.select")}</Text>

          <Select
            placeholder="select"
            label="select"
            options={[
              { label: "option-1", value: "option-1" },
              { label: "option-2", value: "option-2" },
              { label: "optionoptionoption-3", value: "option-3" },
            ]}
          />
        </Flex>
      </Flex>

      <FormDialog isOpen={isOpen} onClose={onClose} onSubmit={() => {}}>
        {() => (
          <>
            <InputFormField
              name="username"
              label={translate("Home.user_from_name")}
            />
            <TextareaFormField
              name="description"
              label={translate("Home.user_from_description")}
            />
          </>
        )}
      </FormDialog>
    </>
  );
};
