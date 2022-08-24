import React from 'react'
import Box from '@mui/material/Box'
import { Avatar, AvatarGroup, Typography } from '@mui/material'

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <Box position="fixed">
                <Typography variant="h6" fontWeight={100}>Friends Online</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Mr A" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Mr B" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Mr C" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Mr D" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Mr E" src="https://material-ui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Mr F" src="https://material-ui.com/static/images/avatar/6.jpg" />
                    <Avatar alt="Mr G" src="https://material-ui.com/static/images/avatar/7.jpg" />
                    <Avatar alt="Mr H" src="https://material-ui.com/static/images/avatar/8.jpg" />
                    <Avatar alt="Mr I" src="https://material-ui.com/static/images/avatar/9.jpg" />
                </AvatarGroup>
            </Box>
        </Box>
    )
}

export default Rightbar
