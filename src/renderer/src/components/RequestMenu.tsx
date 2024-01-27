import { TabPanel } from "@mui/joy";
import Box from "@mui/joy/Box";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import QueryParameters from "./QueryParameters";

export default function RequestMenu() {
    return (
        <Box>
            <Tabs sx={{my: 1}} variant="plain">
                <TabList>
                    <Tab>Params</Tab>
                    <Tab>Auth</Tab>
                    <Tab>Headers</Tab>
                    <Tab>Body</Tab>
                    <Tab>Settings</Tab>
                </TabList>
                <TabPanel value={0}>
                    <QueryParameters />
                </TabPanel>
                <TabPanel value={1}>

                </TabPanel>
                <TabPanel value={2}>

                </TabPanel>
                <TabPanel value={3}>

                </TabPanel>
                <TabPanel value={4}>

                </TabPanel>
        </Tabs>
        </Box>
    )
}