import { Dropdown, Typography, MenuButton, Menu, MenuItem, Box } from "@mui/joy";

export default function AuthorizationMethodMenu() {
    return (
        <div style={{
            display: 'flex',
            width: '100%'
        }}>
    <Typography sx={{
        flexBasis: '100%'
    }}>Type</Typography>

    <Dropdown >
        <MenuButton sx={{
            width: 0.5
        }}>No Auth</MenuButton>
        <Menu >
            <MenuItem>No auth</MenuItem>
            <MenuItem>Basic Auth</MenuItem>
        </Menu>
    </Dropdown>
            </div>
        )
}