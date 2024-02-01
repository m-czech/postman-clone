import Box from "@mui/joy/Box";
import AuthorizationMethodMenu from './AuthorizationMethodMenu'

export default function AuthorizationTab() {
    return (
        <Box display='flex'>
            <AuthorizationMethodMenu />
        </Box>
    )
}