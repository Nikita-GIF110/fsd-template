import { useNavigate } from "react-router-dom";
import { useAuth } from "entities/auth";
import type { OnSubmitForm } from "entities/utils";
import type { SignInFormFields } from "./entities";

export const useAuthorized = () => {
  const navigate = useNavigate();
  const signInUser = useAuth((state) => state.signIn);

  const signIn: OnSubmitForm<SignInFormFields> = async (fields) => {
    await signInUser(fields);
    navigate("/");
  };

  return { signIn };
};
