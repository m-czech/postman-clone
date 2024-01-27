import Box from '@mui/joy/Box'
import Dropdown from "@mui/joy/Dropdown";
import Menu from '@mui/joy/Menu'
import MenuItem from '@mui/joy/MenuItem'
import MenuButton from '@mui/joy/MenuButton'
import Input from "@mui/joy/Input";
import { Divider } from "@mui/joy";


export default function UrlBar() {
    return (
        <div>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <Dropdown>
                    <MenuButton variant='soft'>method</MenuButton>
                    <Menu >
                        <MenuItem>GET</MenuItem>
                        <MenuItem>POST</MenuItem>
                    </Menu>
                </Dropdown>
                <Divider orientation="vertical"></Divider>
                <Input
                    variant="soft"
                    placeholder="Enter URL"
                    fullWidth
                >
                </Input>
            </Box>
        </div>
    )
}