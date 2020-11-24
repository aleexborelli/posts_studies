import React, {
  ComponentType,
  InputHTMLAttributes,
  useState,
  useRef,
} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

const Input: React.FC<IProps> = ({
  icon: Icon,
  isPassword = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      {Icon && <Icon size={16} />}
      <input
        ref={inputRef}
        {...rest}
        type={showPassword ? 'text' : rest.type}
      />
      {isPassword &&
        (showPassword ? (
          <FaEyeSlash
            size={16}
            color="#00e676"
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ) : (
          <FaEye
            size={16}
            color="#00e676"
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ))}
    </Container>
  );
};

export default Input;
