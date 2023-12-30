
const MaxWidthWrapper = ({
    children,
  }: {
    children: React.ReactNode}) => {
  return (
    <main className="max-w-6xl mx-auto h-full flex flex-col pl-2 ">{children}</main>
  )
}

export default MaxWidthWrapper