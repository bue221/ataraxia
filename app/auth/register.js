import { Box, Button, Input } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const RegisterPage = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>register</Text>
      <Input placeholder="Correo" />
      <Input placeholder="Contraseña" passwordRules />
      <Button variant="solid" colorScheme="emerald" size="sm">
        Hola mundo
      </Button>
    </Box>
  );
};

export default RegisterPage;
