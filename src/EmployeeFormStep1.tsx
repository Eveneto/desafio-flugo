import { TextField, Box, Switch, FormControlLabel, Typography } from "@mui/material";

interface Props {
  formData: any;
  errors: any;
  onChange: (field: string, value: string | boolean) => void;
}

export default function EmployeeFormStep1({ formData, errors, onChange }: Props) {
  return (
    <Box>
      <TextField
        label="Título"
        value={formData.nome}
        onChange={e => onChange("nome", (e.target as HTMLInputElement).value)}
        error={!!errors.nome}
        helperText={errors.nome}
        fullWidth
        margin="none"
        required
        sx={{
          mb: 4,
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
          }
        }}
      />
      <TextField
        label="E-mail"
        value={formData.email}
        onChange={e => onChange("email", (e.target as HTMLInputElement).value)}
        error={!!errors.email}
        helperText={errors.email || "e.g. john@gmail.com"}
        fullWidth
        margin="none"
        required
        sx={{
          mb: 5,
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
          "& .MuiFormHelperText-root": {
            color: "#9CA3AF",
            fontSize: 12
          }
        }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={formData.ativo}
            onChange={e => onChange("ativo", e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#10B981"
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#10B981"
              }
            }}
          />
        }
        label={
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#374151" }}>
            Ativar ao criar
          </Typography>
        }
        sx={{ mt: 1 }}
      />
    </Box>
  );
}
