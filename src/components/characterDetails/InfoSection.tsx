export const InfoSection = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
      {icon}
      {title}
    </h3>
    {children}
  </div>
);
