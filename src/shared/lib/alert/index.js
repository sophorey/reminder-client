import { Descriptions, notification } from 'antd';

const generateOpener = (type) => (message, description, icon) => {
  notification.open({
    type, message, description, placement: 'bottomRight', icon,
  });
};

const success = generateOpener('success');
const error = generateOpener('error');

const alert = { error, success };

export { alert };
