import React from "react";

const Table = (props: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => {
  const { children, ...rest } = props;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left" {...rest}>
        {children}
      </table>
    </div>
  );
};

const TableHead = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => {
  const { children, ...rest } = props;

  return (
    <thead className="bg-gray-100 text-gray-700" {...rest}>
      {children}
    </thead>
  );
};

const TableRow = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>) => {
  const { children, ...rest } = props;

  return (
    <tr className="border-b border-gray-300" {...rest}>
      {children}
    </tr>
  );
};

const TableCell = ({
  children,
  header = false,
}: {
  children: React.ReactNode;
  header?: boolean;
}) => {
  const baseStyles = "py-2 px-4";
  return header ? (
    <th className={`${baseStyles} font-semibold text-gray-800`}>{children}</th>
  ) : (
    <td className={`${baseStyles} text-gray-600`}>{children}</td>
  );
};

export { Table, TableHead, TableRow, TableCell };
