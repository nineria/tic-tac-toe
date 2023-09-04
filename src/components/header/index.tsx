interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return <h1>{children}</h1>;
}

export default Header;
