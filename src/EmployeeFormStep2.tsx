import { Box, TextField, MenuItem } from "@mui/material";

const departamentos = [
  "Design",
  "TI",
  "Marketing",
  "Produto"
];

interface Props {
  formData: any;
  errors: any;
  onChange: (field: string, value: string) => void;
}

export default function EmployeeFormStep2({ formData, errors, onChange }: Props) {
  return (
    <Box>
      <TextField
        select
        label="Departamento"
        value={formData.departamento}
        onChange={e => onChange("departamento", (e.target as HTMLInputElement).value)}
        error={!!errors.departamento}
        helperText={errors.departamento || "Selecione um departamento"}
        fullWidth
        margin="none"
        required
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: 1.5,
            bgcolor: "#fff",
            "&.Mui-focused fieldset": {
              borderColor: "#10B981",
              borderWidth: 2
            },
            "&:hover fieldset": {
              borderColor: "#D1D5DB"
            }
          },
          "& label.Mui-focused": {
            color: "#10B981",
            fontWeight: 500
          },
          "& .MuiFormLabel-asterisk": {
            color: "#10B981"
          },
          "& .MuiInputLabel-root": {
            fontSize: 14,
            color: "#6B7280"
          },
          "& .MuiSelect-select": {
            color: formData.departamento ? "#111827" : "#9CA3AF"
          },
          "& .MuiFormHelperText-root": {
            color: "#9CA3AF",
            fontSize: 12
          }
        }}
      >
        <MenuItem value="" disabled sx={{ color: "#9CA3AF" }}>
          Selecione um departamento
        </MenuItem>
        {departamentos.map(dep => (
          <MenuItem key={dep} value={dep} sx={{ color: "#111827" }}>
            {dep}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
