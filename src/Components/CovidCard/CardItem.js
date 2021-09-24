import React from 'react';
import {CardContent, Card,  Typography, makeStyles} from "@material-ui/core";
import CountUp from 'react-countup';

// Make style for Covid Card 
const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === "confirmed") {
            return {borderLeft: "5px solid #c9302c"};
        }
        if (props.type === "recovered") {
            return {borderLeft: "5px solid #28a745"};
        }
        else {
            return {borderLeft: "5px solid gray"};
        }      
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
    },

    count: {
        fontWeight: "bold", 
        fontSize: 18,
    }
})



export default function CovidCard({title, count, type}) {
    // Để sử dụng useStyles --> truyền props là type 
    const styles = useStyles({type});

    // Lấy wrapper trong type và gắn vào className 
    return (
        <Card className={styles.wrapper} >
            <CardContent>
                <Typography component="p" variant="body2" 
                            className={styles.title}>
                        {title}
                </Typography>


                <Typography component="span" variant="body2" 
                            className={styles.count}> 
                        <CountUp end={count || 0} duration={2} separator=" " />

                </Typography>

            </CardContent>
        </Card>
    )
}

/** {count || 0} --> when count is undefined --> count = 0
 * duration = 2 seconds
 * separator by space with number
 */ 

