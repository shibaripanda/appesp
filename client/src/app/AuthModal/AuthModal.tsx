import { Button, Center, Group, Modal, Space, TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { AppClass } from '../../classes/appClass';
import { GoogleLogin } from '@react-oauth/google';

export function AuthModal({authmodal, authmodalSwith, setToken}: any){
    const [key, setKey] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    const appClass = new AppClass()

    useEffect(() => {
        if (authmodal && inputRef.current) {
          inputRef.current.focus();
        }
      }, [authmodal]);
  
    return (
        <>
        <Modal opened={authmodal} onClose={() => {authmodalSwith.close()}} title="Authentication" withCloseButton={false}>
            <TextInput
            placeholder='key from bot'
            ref={inputRef}
            value={key}
            onChange={event => setKey(event.target.value)}/>
            <Space h='sm'/>
            {/* <Group justify="space-between"> */}

            <Center>
              <Button
              onClick={() => {
                appClass.authClientRequest(key, setToken)
                }}>
                Enter
              </Button>
            </Center>

            <Space h='sm'/>

            <Center>
            or
            </Center>

            <Space h='sm'/>

            <Center>
            {appClass.telegramLoginAuthClientRequest()}
            </Center>

        </Modal>
        </>
    );
}