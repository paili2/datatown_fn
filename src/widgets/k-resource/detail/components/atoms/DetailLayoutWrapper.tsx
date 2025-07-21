const DetailLayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-10 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">{children}</div>
);

export default DetailLayoutWrapper;
