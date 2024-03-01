export const RootLayout = ({ children }: RootLayoutProps) => {
  return <main>{children}</main>;
};

type RootLayoutProps = {
  children: React.ReactNode;
};
