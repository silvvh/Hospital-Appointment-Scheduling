"use client";
import { Box, Container, Grid, Paper } from "@mui/material";
import PatientTable from "../tables/PatientTable";

export default function PatientList() {
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
            <PatientTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
