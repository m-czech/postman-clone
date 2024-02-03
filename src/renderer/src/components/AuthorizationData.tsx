import { Input, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";

export default function AuthorizationData() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                width: '1'
            }}>
                <Typography sx={{
                    flexBasis: '100%'
                }}>Username</Typography>
                <Input sx={{
                    width: 0.6
                }}></Input>
            </Box>
            <Box sx={{
                display: 'flex',
                width: '1'
            }}>
                <Typography sx={{
                    flexBasis: '100%'
                }}>Password</Typography>
                <Input sx={{
                    width: 0.6
                }}></Input>
            </Box>
        </Box>
    )
}