import { Dropdown, Typography, MenuButton, Menu, MenuItem, Box } from "@mui/joy";

export default function AuthorizationMethodMenu() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Typography>Type</Typography>

            <Box sx={{
                padding: 2
            }}>
                <Dropdown >
                    <MenuButton>No Auth</MenuButton>
                    <Menu >
                        <MenuItem>No auth</MenuItem>
                        <MenuItem>Basic Auth</MenuItem>
                    </Menu>
                </Dropdown>
            </Box>
        </div>
    )
}