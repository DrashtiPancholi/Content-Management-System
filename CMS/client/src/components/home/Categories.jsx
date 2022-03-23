
import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { categories } from '../../constants/data';

const useStyle = makeStyles({
    create: {
        margin: 20,
        background: '#6490ED',
        color: '#fff',
        width: '88%'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    }
})

const Categories = () => {
    const classes = useStyle();
    return(
        <>
            <Button variant='contained' className={classes.create}>Create Blog</Button>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All Categories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(categories => (
                            <TableRow>
                                <TableCell>{categories}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;