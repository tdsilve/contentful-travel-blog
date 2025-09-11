import { Button } from "@/components";

type FormAuthButtonProps = {
  onClick: () => void;
  label: string;
};

export const FormAuthButton = ({ onClick, label }: FormAuthButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="link"
      className="text-white font-semibold hover:no-underline px-1 text-base"
    >
      {label}
    </Button>
  );
};
