import React, { useEffect } from 'react';
import "./AfterLoginPage.css";
import HOC1 from '../../Common/HOC1.jsx';
import { Card, Grid } from '@material-ui/core';

//material ui data table
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

function PurchaseHistory() {
    const classes = useStyles();
    const filterData = []
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    // const filterData = MyCoursesArr.filter((event) => {
    //     return (
    //         event.data.toLowerCase().indexOf(name.toLowerCase()) !== -1
    //     );
    // });

    // for pagination hadler 
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        window.scrollTo(0, 0);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <div className="data_Padding_after_login pb-5">
                <Card className="Card_shadow  m-2 p-2">
                    <div className="top_heading text-center">Purchase History</div>
                    <div className="mt-2">
                        <Grid className="d-flex flex-wrap">
                            <Grid item md={4} className="p-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by item"
                                // value={name}
                                // onChange={(e) => setname(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="mt-3">
                        <TableContainer component={Paper}>
                            <Table
                                className={classes.table}
                                aria-label="customized table"
                                id="table_outside_border"
                            >
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell
                                            align="left"
                                            className="table_header"
                                        >
                                            Date
                                        </StyledTableCell>
                                        <StyledTableCell
                                            align="left"
                                            className="table_header"
                                        >
                                            Order ID
                                        </StyledTableCell>

                                        <StyledTableCell
                                            align="left"
                                            className="table_header"
                                        >
                                            Item
                                        </StyledTableCell>

                                        <StyledTableCell
                                            align="left"
                                            className="table_header"
                                        >
                                            Amount
                                        </StyledTableCell>
                                        <StyledTableCell
                                            align="left"
                                            className="table_header"
                                        >
                                            Status
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? filterData.slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage +
                                            rowsPerPage
                                        )
                                        : filterData
                                    ).map((row) => (
                                        <StyledTableRow>
                                            <StyledTableCell
                                                align="left"
                                            >

                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                            >

                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                            >

                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                            >

                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                            >

                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                true
                                rowsPerPageOptions={false}
                                component="div"
                                count={filterData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={
                                    handleChangeRowsPerPage
                                }
                            />
                        </TableContainer>


                    </div>

                </Card>
            </div>
        </>
    )
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default HOC1(PurchaseHistory)
