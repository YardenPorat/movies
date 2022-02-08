import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import classes from './top-bar.module.css';

export default function TopBar() {
    const location = useLocation();
    const currentTab = location.pathname;

    return (
        <div className={classes.root}>
            <Tabs textColor='inherit' value={currentTab}>
                <Tab label='Home' value='/' to='/' component={Link} />
                <Tab
                    label='Movies Board'
                    value='/movies-board'
                    to='/movies-board'
                    component={Link}
                />
            </Tabs>
        </div>
    );
}
