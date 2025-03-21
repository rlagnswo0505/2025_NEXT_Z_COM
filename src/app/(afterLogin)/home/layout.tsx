import React from 'react';

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
};

export default HomeLayout;
