import { cn } from '@utils';

const ListContainer = ({ className, children }: ListType) => (
  <ul className={cn(`flex list-none flex-wrap p-0`, className)}>{children}</ul>
);

const ListItem = ({ className, children }: ListType) => (
  <li
    className={cn(
      `m-2 rounded-md border-2 border-slate-300 bg-slate-100 px-4 py-2 dark:bg-[#222222]`,
      className,
    )}
  >
    {children}
  </li>
);

type ListType = {
  className?: string;
  children: React.ReactNode;
};

export const List = {
  Container: ListContainer,
  Item: ListItem,
};
