import { BasicLayout } from "@/components/layouts/BasicLayout/BasicLayout";
import { About } from "@/components/templates/About";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => <About />;
Page.getLayout = BasicLayout;

export default Page;
