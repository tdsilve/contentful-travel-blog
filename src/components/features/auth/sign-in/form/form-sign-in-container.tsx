import { Flex } from "@/components/ui/flex";

export const FormSignInContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Flex justify="center">
      <div className="self-center lg:max-w-md w-full bg-white/5 p-4 rounded-md backdrop-blur shadow-[0_0px_24px_rgba(255,255,255,0.2)]">
        <h2 className="text-white font-semibold text-4xl mb-8">Sign in</h2>
        {children}
      </div>
    </Flex>
  );
};
