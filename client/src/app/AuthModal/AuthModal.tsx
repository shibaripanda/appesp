import { Button, Modal, Space, TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { AppClass } from '../../classes/appClass';

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
            ref={inputRef}
            value={key}
            onChange={event => setKey(event.target.value)}/>
            <Space h='sm'/>
            <Button
            onClick={() => {
              appClass.authClientRequest(key, setToken)
              }}>Enter</Button>
        </Modal>
        </>
    );
}