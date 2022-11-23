import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useNavigate } from "react-router-dom";
import { useGetBrandStats } from "../Hooks/useGetBrandStats";
import { adminContext } from "../Providers/AdminProvider";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const headings = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "brandName", label: "Name", minWidth: 130 },
  { id: "email", label: "Email", minWidth: 150 },
  { id: "challenges", label: "Challenges", minWidth: 150 },
  { id: "tricks", label: "Tricks", minWidth: 150 },
];
export const AdminHome = () => {
  const { GetBrandStats } = useGetBrandStats();
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/landingPage/admin/feed");
    GetBrandStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { brandStats } = React.useContext(adminContext);
  console.log("brand Stats:", brandStats);
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: "80vh", m: 8 }}>
        <Table aria-label="brand stats" stickyHeader>
          <TableHead>
            <TableRow>
              {headings.map((value, index) => (
                <StyledTableCell key={index} align="center">
                  {value.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {brandStats.map((row: any) => (
              <StyledTableRow key={row?.id}>
                <StyledTableCell align="center">{row?.id}</StyledTableCell>
                <StyledTableCell align="center">{row?.name}</StyledTableCell>
                <StyledTableCell align="center">{row?.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {row?.challenges?.length}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row?.tricks?.length}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
