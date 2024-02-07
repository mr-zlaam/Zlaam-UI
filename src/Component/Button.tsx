export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <>
      <button
        {...rest}
        className={`bg-[#28282b] text-white font-semibold px-4 py-2 rounded-md shadow-black shadow-md hover:bg-black/80 duration-200 active:scale-90 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export { Button };
