interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="neumorphic-input w-full"
    />
  );
};