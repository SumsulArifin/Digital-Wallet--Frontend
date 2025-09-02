import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllUserInfoQuery } from "@/redux/features/auth/auth.api";


import { Trash2 } from "lucide-react";

export default function AllUsers() {
  const { data } = useAllUserInfoQuery(undefined);

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">All Users</h1>
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[100px]">Email</TableHead>
              <TableHead className="w-[100px]">Role</TableHead>
              <TableHead className="w-[100px]">Is-Active</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: { name: string,email:string,role:string,isActive:boolean }) => (
              <TableRow>
                <TableCell className="font-medium ">
                  {item?.name}
                </TableCell>
                <TableCell className="font-medium ">
                  {item?.email}
                </TableCell>
                <TableCell className="font-medium ">
                  {item?.role}
                </TableCell>
                <TableCell className="font-medium ">
                  {item?.isActive}
                </TableCell>
                <TableCell>
                  <Button size="sm">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}