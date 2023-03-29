import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Page = ({ title, btnCaption, children }) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" p={5}>
        <Typography component="h1" variant="h5" color="inherit" noWrap>
          {" "}
          {title}
        </Typography>
        <Button variant="contained"> {btnCaption}</Button>
      </Stack>
      <Container>{children}</Container>
    </Box>
  );
};

export default Page;
