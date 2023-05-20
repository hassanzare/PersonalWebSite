import Title1 from "./Title1";
import Title2 from "./Title2";
import Title3 from "./Title3";
import Title4 from "./Title4";

const Page = () => {
  return (
    <>
      <Title1 />
      <Title2 countdownTimestampMs={1643673600000} />
      <Title3 />
      <Title4 />
    </>
  );
};

export default Page;
