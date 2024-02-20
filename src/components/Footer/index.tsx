import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {DOUYIN_LINK} from "@/constant";
const Footer: React.FC = () => {
  const defaultMessage = 'Dex';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'plant',
          title: '知识星球',
          href: DOUYIN_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '抖音',
          href: DOUYIN_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> Dex Github </>,
          href: 'https://github.com/staryellow',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
