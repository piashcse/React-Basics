import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const apiBaseUrl = "http://localhost:3000/";

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        height: '100%'
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;

function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return {id, name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: [],
        }
    }

    componentDidMount() {
        console.log("token", localStorage.getItem('token'))
        const payload = {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        };

        axios.get(apiBaseUrl + 'orders', payload)
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    this.setState({payload:response.data.orders})
                    console.log("State "+this.state.payload.count);
                }
                else if (response.status == 204) {
                    console.log("Username password do not match");
                    alert(response.data.success)
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {classes} = this.props;
        const {payload} = this.state;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>OrderId</CustomTableCell>
                            <CustomTableCell>Product name</CustomTableCell>
                            <CustomTableCell numeric>quatity</CustomTableCell>
                            <CustomTableCell numeric>price</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {payload.map(row => {
                            return (
                                <TableRow className={classes.row}>
                                    <CustomTableCell component="th" scope="row">
                                        {row.product.price}
                                    </CustomTableCell>
                                    <CustomTableCell>{row.product.name}</CustomTableCell>
                                    <CustomTableCell numeric>{row.quantity}</CustomTableCell>
                                    <CustomTableCell numeric>{row.product.price}</CustomTableCell>

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

}

DataTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataTable);
