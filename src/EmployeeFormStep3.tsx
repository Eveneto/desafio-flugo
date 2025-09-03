import { TextField, Box, Typography } from "@mui/material";

interface Props {
  formData: any;
  errors: any;
  onChange: (field: string, value: string) => void;
}

export default function EmployeeFormStep3({ formData, errors, onChange }: Props) {
  return (
    <Box>
      <TextField
        label="Cargo"
        value={formData.cargo}
        onChange={e => onChange("cargo", e.target.value)}
        error={!!errors.cargo}
        helperText={errors.cargo}
        fullWidth
        margin="normal"
        required
      />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Confirme os dados antes de finalizar.
      </Typography>
    </Box>
  );
}
