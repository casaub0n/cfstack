import { NextPageWithLayout } from "@/types/next/type";
import { Layout } from "@/components/layouts";
import { Top } from "@/components/templates/Top";

const IndexPage: NextPageWithLayout = () => <Top />;

IndexPage.getLayout = Layout;

export default IndexPage;
