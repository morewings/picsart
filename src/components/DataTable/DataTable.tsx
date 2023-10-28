import React, { useState, useCallback } from "react";
import type { ColumnConfig, MouseClick, KeyPress } from "grommet";
import { Box, DataTable as DataTableGeneric } from "grommet";
import { useNavigate } from "react-router-dom";

import { useList } from "../../features/users";
import type { UserInfoType } from "../../features/users";
import { calculateAge } from "../../utils/calculateAge";

const columns: ColumnConfig<UserInfoType>[] = [
  {
    property: "lastName",
    header: "Last name",
    size: "xlarge",
    search: true,
  },
  {
    property: "email",
    header: "Email",
    size: "xlarge",
    sortable: false,
  },
  {
    property: "birthdate",
    header: "Age",
    render: (datum: { birthdate: string }) => calculateAge(datum.birthdate),
    size: "small",
    align: "end",
  },
];

const DataTable = () => {
  const [sort, setSort] = useState<{
    property: string;
    direction: "asc" | "desc";
  }>({
    property: "lastName",
    direction: "desc",
  });

  const navigate = useNavigate();

  const handleClick = useCallback(
    (event: MouseClick<UserInfoType> | KeyPress<UserInfoType>) => {
      navigate(`/user/${event.datum.id}`);
    },
    [navigate],
  );

  const users = useList();

  return (
    <Box flex="shrink" pad="small" width="large">
      <DataTableGeneric
        columns={columns}
        data={users as UserInfoType[]}
        sortable
        step={10}
        paginate
        onClickRow={handleClick}
        sort={sort}
        onSort={setSort}
      />
    </Box>
  );
};

export default DataTable;
