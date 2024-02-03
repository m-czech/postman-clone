import Box from "@mui/joy/Box";
import AuthorizationMethodMenu from './AuthorizationMethodMenu'
import AuthorizationData from "./AuthorizationData";

export default function AuthorizationTab() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                width: 0.25,
            }}>
                <AuthorizationMethodMenu/>    
            </Box>
            <Box sx={{
                flex: 1
            }}>
                <AuthorizationData></AuthorizationData>
            </Box>
        </Box>
    )
}