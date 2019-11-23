import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'
import MailIcon from '@material-ui/icons/Mail'
import GridOnIcon from '@material-ui/icons/GridOn'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})

export default function Filters() {
    const classes = useStyles()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setState({ ...state, [side]: open })
    }

    function ValueLabelComponent(props) {
        const { children, open, value } = props;

        const popperRef = React.useRef(null);
        React.useEffect(() => {
            if (popperRef.current) {
                popperRef.current.update();
            }
        });
        return (
            <Tooltip
                PopperProps={{
                    popperRef,
                }}
                open={open}
                enterTouchDelay={0}
                placement="top"
                title={value}
            >
                {children}
            </Tooltip>
        );
    }

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            // onClick={toggleDrawer(side, false)}
            // onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button key={'Salary Range'}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={'Select your filters'} />
                </ListItem>

                <ListItem button key={'Salary Range'}>
                    <ListItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9.56 8.1c-1.6-.51-2.66-.71-2.66-1.88 0-.83.72-1.62 2.1-1.62 1.59 0 2.1.88 2.1 1.94H13c0-1.79-1.17-3.09-3-3.44V1H8v2.11c-1.58.32-3 1.37-3 3.12 0 2.25 1.78 2.8 4 3.52 1.88.61 2.25 1.04 2.25 2.09 0 .9-.67 1.56-2.25 1.56-1.2 0-2.25-.84-2.25-2.06h-2c0 1.88 1.38 3.2 3.25 3.56V17h2v-2.07c2.04-.29 3.2-1.49 3.2-3.1 0-1.87-.94-2.87-3.64-3.73z" /></svg>
                    </ListItemIcon>
                    <ListItemText primary={'Salary Target'} />
                </ListItem>


                <Slider style={{ margin: '0px 20px', width: '80%' }}
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label="custom thumb label"
                    defaultValue={5500}
                    min={1200}
                    max={8000}
                />


                <ListItem button key={'Skills'}>
                    <ListItemIcon>
                        <GridOnIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Skills'} />
                </ListItem>
                <TextField style={{ margin: '0px 20px', width: '80%' }}
                    id="standard-multiline-flexible"
                    label="Type and press Enter"
                    className=''
                    margin="normal"
                />

                {/* <ListItem button key={'Location'}>
                    <ListItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" /></svg>
                    </ListItemIcon>
                    <ListItemText primary={'Location'} />

                </ListItem> */}
                {/* <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=prodigious%20costa%20rica&t=&z=13&ie=UTF8&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                    </div>
                </div> */}
            </List>
            {/* <Divider /> */}
        </div>
    )


    return (
        <div>
            <Button color="secondary" onClick={toggleDrawer('left', true)}>Narrow your search?</Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    )
}
