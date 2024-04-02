import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Heading } from "../components/Heading";
import { ButtonWarning } from "../components/ButtonWarning";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"Enter your email"} />
          <InputBox label={"Password"} placeholder={"1234.."} />
          <div className="pt-4">
            <Button
              label={"Sign in"}
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </div>
          <ButtonWarning
            label={"Signup"}
            buttonText={"Don't have an account?"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
