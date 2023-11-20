import {Typography} from "@mui/material";
import {
    scrollContainerCSS,
    scrollTextCSS
} from "./LoadingCSS";
import {cx} from '@emotion/css';

const Loading = () => {

    return (
        <>
            <div
                className={cx(scrollContainerCSS)}
            >
                <div
                    className={cx(scrollTextCSS)}
                >
                    <Typography>Loading cats...</Typography>
                </div>
            </div>
        </>
    )

}

export default Loading;