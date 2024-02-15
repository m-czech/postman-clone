import { TabPanel } from "@mui/joy";
import Box from "@mui/joy/Box";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import Tabs from "@mui/joy/Tabs";
import DataTable from "./DataTable";
import AuthorizationTab from "./AuthorizationTab";
import BodyTab from "./BodyTab";

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
                    <DataTable />
                </TabPanel>
                <TabPanel value={1}>
                    <AuthorizationTab />
                </TabPanel>
                <TabPanel value={2}>
                    <DataTable />
                </TabPanel>
                <TabPanel value={3}>
                    <BodyTab />
                </TabPanel>
                <TabPanel value={4}>

                </TabPanel>
        </Tabs>
        </Box>
    )
}