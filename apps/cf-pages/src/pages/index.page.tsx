
import { Layout } from "@/components/layouts";
import { Top } from "@/components/templates/Top";

import { NextPageWithLayout } from "@/types/next/type";

const IndexPage: NextPageWithLayout = () => <Top />;

IndexPage.getLayout = Layout;

export default IndexPage;
