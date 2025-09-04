import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useState } from "react";
import { toast } from "sonner";
import { useAllUserInfoQuery, useUpdateRoleMutation } from "@/redux/features/auth/auth.api";
import { Label } from "@radix-ui/react-label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


export default function AllUsers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);
  const [editingUser, setEditingUser] = useState<{ _id: string; role: string } | null>(null);

  const { data } = useAllUserInfoQuery({ page: currentPage, limit });
  const [updateRole] = useUpdateRoleMutation();

  const totalPage = data?.meta?.totalPage || 1;

  const handleRoleChange = async () => {
    if (!editingUser) return;
    const toastId = toast.loading("Updating role...");
    try {
      const res = await updateRole({ id: editingUser._id, payload: { role: editingUser.role } }).unwrap();
      if (res.success) {
        toast.success("Role updated", { id: toastId });
        setEditingUser(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update role", { id: toastId });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">All Users</h1>
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">User Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((user: { _id: string; name: string; email: string; role: string }) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <Dialog open={!!editingUser && editingUser._id === user._id} onOpenChange={(open: boolean) => !open && setEditingUser(null)}>
                    <DialogTrigger asChild>
                      <Button onClick={() => setEditingUser({ _id: user._id, role: user.role })} size="sm">Edit Role</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit User Role</DialogTitle>
                        <DialogDescription>Update the role for {user.name}.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="role" className="text-right">Role</Label>
                          <Select
                            onValueChange={(value) => setEditingUser(prev => prev ? { ...prev, role: value } : null)}
                            value={editingUser?.role || user.role}
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ADMIN">ADMIN</SelectItem>
                              <SelectItem value="USER">USER</SelectItem>
                              <SelectItem value="AGENT">AGENT</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setEditingUser(null)}>Cancel</Button>
                        <Button onClick={handleRoleChange}>Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {totalPage > 1 && (
        <div className="flex justify-end mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              {Array.from({ length: totalPage }, (_, index) => index + 1).map((page) => (
                <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                  <PaginationLink isActive={currentPage === page}>{page}</PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}


// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useAllUserInfoQuery } from "@/redux/features/auth/auth.api";


// import { Trash2 } from "lucide-react";

// export default function AllUsers() {
//   const { data } = useAllUserInfoQuery(undefined);

//   return (
//     <div className="w-full max-w-7xl mx-auto px-5">
//       <div className="flex justify-between my-8">
//         <h1 className="text-xl font-semibold">All Users</h1>
//       </div>
//       <div className="border border-muted rounded-md">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-[100px]">Name</TableHead>
//               <TableHead className="w-[100px]">Email</TableHead>
//               <TableHead className="w-[100px]">Role</TableHead>
//               <TableHead className="w-[100px]">Is-Active</TableHead>
//               <TableHead className="text-right">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data?.data?.map((item: { name: string,email:string,role:string,isActive:boolean }) => (
//               <TableRow>
//                 <TableCell className="font-medium ">
//                   {item?.name}
//                 </TableCell>
//                 <TableCell className="font-medium ">
//                   {item?.email}
//                 </TableCell>
//                 <TableCell className="font-medium ">
//                   {item?.role}
//                 </TableCell>
//                 <TableCell className="font-medium ">
//                   {item?.isActive}
//                 </TableCell>
//                 <TableCell>
//                   <Button size="sm">
//                     <Trash2 />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }