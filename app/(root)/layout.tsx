import React from 'react'

export const metadata = {
  title: "AcademiaTrack",
  description: "AcademiaTrack built by Shahriar Ahmed Shovon",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <main>{children}</main>
)

export default RootLayout
