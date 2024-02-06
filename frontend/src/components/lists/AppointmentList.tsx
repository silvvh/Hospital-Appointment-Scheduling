"use client";
import { Box, Container, Grid, Paper } from "@mui/material";
import AppointmentTable from "../tables/AppointmentTable";

export default function AppointmentList() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              overflowX: "auto"
            }}
          >
            {" "}
            <AppointmentTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
