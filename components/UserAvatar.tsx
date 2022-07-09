import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const UserAvatar = ({}: { token: string }) => {
  return (
    <>
      <Avatar size={40} icon={<UserOutlined />}></Avatar>
    </>
  );
};
