import { Flex, FormAuthTitle } from "@/components";

type FormAuthContainerProps = {
  title: string;
  children: React.ReactNode;
};

export const FormAuthContainer = ({
  title,
  children,
}: FormAuthContainerProps) => {
  return (
    <Flex justify="center">
      <div className="self-center max-w-md w-full bg-white/5 backdrop-blur-[10px] py-4 px-6 rounded-3xl border border-white/10 shadow-[0_0px_14px_rgba(255,255,255,0.1)] space-y-4">
        <FormAuthTitle title={title} />
        {children}
      </div>
    </Flex>
  );
};
