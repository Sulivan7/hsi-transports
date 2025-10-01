// Este é um componente de botão simples, não estilizado,
// a estilização final é específica em cada seção onde o botão é usado.

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button' }) => {
  return <button type={type}>{children}</button>;
};

export default Button;
