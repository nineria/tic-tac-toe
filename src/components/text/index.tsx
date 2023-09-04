interface TextProps {
  children: React.ReactNode;
}
function Text({ children }: TextProps) {
  return <div>{children}</div>;
}

export default Text;
