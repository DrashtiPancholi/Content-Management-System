
import { Grid } from "@material-ui/core";

import Post from "./Post";

const Posts = () =>{
    let Posts = [1,2,3,4,5,6,7,8,9];
    return(
        Posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>
                <Post/>
            </Grid>
        ))

    )
}

export default Posts;