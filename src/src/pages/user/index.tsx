import { useEffect, useState } from "react";
import "./styles.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useLazyGetUsersQuery } from "../../services/reducers/user/api";
import { GetUserRequest, IUser } from "../../services/reducers/user/types";
import { formatDateToMMDDYYYY } from "../../utils/helpers/date";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.api.getRowIndexRelativeToVisibleRows(params.value) + 1}`,
  },
  { field: "email", headerName: "Email", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "roles",
    headerName: "Roles",
    width: 130,
    // align: "right",
    valueGetter: (params: GridValueGetterParams) =>
      `${(params.row.roles || []).map((role: any) => role.role)}`,
  },
  {
    field: "updatedAt",
    headerName: "Updated Date",
    width: 130,
    valueGetter: (params: GridValueGetterParams) =>
      `${formatDateToMMDDYYYY(new Date(params.value))}`,
  },
  {
    field: "createdAt",
    headerName: "Created Date",
    width: 130,
    valueGetter: (params: GridValueGetterParams) =>
      `${formatDateToMMDDYYYY(new Date(params.value))}`,
  },
];

const UserPage = (): JSX.Element => {
  const [getUsers] = useLazyGetUsersQuery();

  const [filter, setFilter] = useState<GetUserRequest>({ page: 1, limit: 10 });
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsersApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const getUsersApi = async (): Promise<void> => {
    try {
      const result = await getUsers(filter).unwrap();
      setUsers(result.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
};

export default UserPage;
