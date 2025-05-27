import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface TableProps {
  headers: any[];
  rows: any[];
}

export interface TableHeaderInterface {
  label: string;
  key: string;
  className?: string;
}

interface TableInterface {
  data: any[];
  headers: TableHeaderInterface[];
  title: string;
  className?: string;
}

const index: React.FC<TableInterface> = ({ headers, data ,className=""}) => {
  return (
    <div className="max-w-full min-w-[300px] md:min-w-[500px] lg:min-w-[700px] xl:min-w-[900px] 2xl:min-w-full overflow-x-auto">
      <Card className={`${className} border-zinc-200 min-w-[700px]`}>
        <Table className="w-full rounded-lg">
          <TableHeader>
            <TableRow className="h-[65px] border-b border-zinc-200">
              {headers.map((header, idx) => (
                <TableHead
                  key={idx}
                  className={`h-12 text-center ${header.className}`}
                >
                  {header.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                className="h-[65px] border-b border-zinc-200"
              >
                {headers.map((field) => (
                  <TableCell
                    key={`table_${field.key}`}
                    className={`h-12 text-center ${field.className}`}
                  >
                    {row[field.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default index;
