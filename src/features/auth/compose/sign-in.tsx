import { Link as ReactRouterLink } from "react-router-dom";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";
import { withTypes } from "react-final-form";
import type { SignInFormFields } from "features/auth/models";
import { useAuthorized } from "features/auth/models";
import { SIGN_IN_SCHEMA } from "features/auth/models";
import { InputFormField } from "shared/ui/input";
import { useValidationSchema } from "shared/lib/useValidate";

const { Form } = withTypes<SignInFormFields>();

export const SignIn = () => {
  const { signIn } = useAuthorized();
  const validate = useValidationSchema<SignInFormFields>(SIGN_IN_SCHEMA);

  return (
    <>
      <CardHeader textAlign="center">
        <Heading size="md">Авторизация</Heading>
      </CardHeader>

      <Form onSubmit={signIn} validate={validate}>
        {({ handleSubmit, pristine, submitting }) => (
          <form onSubmit={handleSubmit}>
            <CardBody>
              <InputFormField name="login" label="Логин" />
              <InputFormField name="password" label="Пароль" type="password" />
            </CardBody>

            <CardFooter alignItems="center">
              <Link as={ReactRouterLink} to="/auth/registration">
                Регистрация
              </Link>

              <Button
                type="submit"
                marginStart="auto"
                disabled={pristine || submitting}
              >
                Войти
              </Button>
            </CardFooter>
          </form>
        )}
      </Form>
    </>
  );
};
