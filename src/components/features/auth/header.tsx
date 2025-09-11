import { Flex, Logo } from "@/components";

export const Header = () => {
  return (
    <Flex className=" w-full max-w-4xl mx-auto h-20 mb-4">
      <Flex
        className="w-[120px] h-full md:w-[160px] lg:w-[200px] mx-2"
        items="center"
      >
        <Logo width={200} height={50} color="white" />
      </Flex>
    </Flex>
  );
};
