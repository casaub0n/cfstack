import { BasicLayout } from "@/components/layouts/BasicLayout/BasicLayout";
import { TopMain } from "@/components/templates/TopMain";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => <TopMain />;
Page.getLayout = BasicLayout;

export default Page;
