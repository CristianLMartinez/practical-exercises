import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  type: "primary" | "secondary";
//   children: ReactNode;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ type, ...props }: InputProps) => {
  return (
    <>
      <input className={type} {...props} />
    </>
  );
};

export default Input;
