
import {Box, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        height: 350,
        margin: 10,
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *':{
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0'
    },
    text: {
        color: "#878787",
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    }
})

const Post = () => {
    const classes = useStyle();
    const url = 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg';

    return(
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image} />
            <Typography className={classes.text}>Music</Typography>
            <Typography className={classes.heading}>Code for interview</Typography>
            <Typography className={classes.text}>Author: Yash Dhameliya</Typography>
            <Typography>Read CMS Contains sdhjd fdkfhdf dkfdjfd fkdf dfkndf dfkndfdknfdkf dk fdkf dkf df dk fd kf d fkd f dk</Typography>
        </Box>
    )
}

export default Post;