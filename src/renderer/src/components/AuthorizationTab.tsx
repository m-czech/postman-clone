import Box from "@mui/joy/Box";
import AuthorizationMethodMenu from './AuthorizationMethodMenu'
import AuthorizationData from './AuthorizationMethodMenu'

export default function AuthorizationTab() {
    return (
        <Box display='flex'>
            <Box>
                <AuthorizationMethodMenu></AuthorizationMethodMenu>
            </Box>
            <Box>
                <AuthorizationData></AuthorizationData>
            </Box>
        </Box>
    )
}