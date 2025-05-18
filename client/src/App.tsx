import "@mantine/core/styles.css";
import { Box, Flex, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Dashboard } from "./app/Dashboard/Dashboard";
import { WorkSpace } from "./app/WorkSpace/WorkSpace";
import { useDisclosure } from "@mantine/hooks";
import { AuthModal } from "./app/AuthModal/AuthModal";
import { useConnectSocket } from "./unity/socket/hooks/useConnectSocket";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  const [token, setToken] = useState<string>(sessionStorage.getItem('currentUser') ?? '')
  const [authmodal, authmodalSwith] = useDisclosure(true)
  useConnectSocket(token)

  useEffect(() => {
    if(token){
      authmodalSwith.close()
    }
    else{
      authmodalSwith.open()
    }
  }, [token])

  return (
    <MantineProvider theme={theme}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH || 'VITE_GOOGLE_AUTH'}>
        <Flex>
          <Dashboard authmodalSwith={authmodalSwith}/>
          <Box style={{ flex: 1, padding: 15}} bg="gray.1">
            <WorkSpace />
          </Box>
        </Flex>
        <AuthModal setToken={setToken} authmodal={authmodal} authmodalSwith={authmodalSwith}/>
      </GoogleOAuthProvider>
    </MantineProvider>
    );
}
