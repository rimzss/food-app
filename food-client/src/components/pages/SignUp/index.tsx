import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import React from "react";
import Link from "next/link";
type Props = {};

const SignUpPage = (props: Props) => {
  return <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"40px"
  }}
>
  <Box
    minWidth="380px"
    maxWidth="480px"
    sx={{ padding: {md: "30px", sx: "5px"  } }}
  >
    <Typography
      variant="h4"
      fontWeight="bold"
      textAlign="center"
      marginBottom="35px"
    >
      Бүртгүүлэх
    </Typography>
    <Stack spacing={2}>
       <DefaultInput label="Нэр" placeholder="Нэр ээ оруулна уу"/>
    <DefaultInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" />
    <DefaultInput label="Хаяг" placeholder="Хаягаа оруулна уу" />
    <DefaultInput
      label="Нууц үг"
      placeholder="Нууц үгээ оруулна уу"
      showPassword={true}
    />
    <DefaultInput
      label="Нууц үг давтах"
      placeholder="Нууц үгээ оруулна уу"
      showPassword={true}
    />
    
    </Stack>
   <Typography display="flex" gap={4} marginTop={20}>
      <CloudQueueIcon/>
      Үйлчилгээний нөхцөл зөвшөөрөх
    </Typography>

    <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
      <DefualtButton text="Бүртгүүлэх"  />
      <Typography textAlign="center">Эсвэл</Typography>
      <Link href="/login">
        <DefualtButton text="Нэвтрэх" btnType="outlined"/>
      </Link>
      
    </Box>
  </Box>
</Box>
};

export default SignUpPage;
