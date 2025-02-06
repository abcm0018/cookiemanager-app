import PropTypes from "prop-types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

export const TableLayout = ({
  headers = [],
  children,
  order,
  orderBy,
  handleRequestSort,
  sx,
}) => {
  return (
    <Box>
      <Table sx={sx} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header.id}
                sortDirection={orderBy === header.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={orderBy === header.id ? order : "asc"}
                  onClick={() => handleRequestSort(header.id)}
                >
                  {header.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </Box>
  );
};

TableLayout.propTypes = {
  headers: PropTypes.array.isRequired,
  children: PropTypes.node,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  handleRequestSort: PropTypes.func,
  sx: PropTypes.object,
};
