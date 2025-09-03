import { useState } from "react";
import { Box, Button, Typography, LinearProgress, Paper, Snackbar, Alert, CircularProgress } from "@mui/material";
import EmployeeFormStep1 from "./EmployeeFormStep1";
import EmployeeFormStep2 from "./EmployeeFormStep2";
import { saveEmployee } from "./firebase";

const steps = ["Infos Básicas", "Infos Profissionais"];

function StepSidebar({ activeStep }: { activeStep: number }) {
  return (
    <Box sx={{ pt: 2 }}>
      {steps.map((label, idx) => (
        <Box key={label} sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              bgcolor: idx <= activeStep ? "#10B981" : "#E5E7EB",
              color: idx <= activeStep ? "#fff" : "#9CA3AF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 12,
              mr: 3
            }}
          >
            {idx + 1}
          </Box>
          <Typography
            sx={{ 
              color: idx === activeStep ? "#10B981" : idx < activeStep ? "#111827" : "#9CA3AF", 
              fontWeight: idx === activeStep ? 600 : 500,
              fontSize: 14
            }}
          >
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default function MultiStepForm({ onBack }: { onBack?: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    ativo: true,
    departamento: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleNext = async () => {
    const newErrors: any = {};
    
    if (activeStep === 0) {
      if (!formData.nome) newErrors.nome = "Nome é obrigatório";
      if (!formData.email) newErrors.email = "Email é obrigatório";
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email deve ter um formato válido";
      }
    }
    
    if (activeStep === 1) {
      if (!formData.departamento) newErrors.departamento = "Departamento é obrigatório";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      if (activeStep === steps.length - 1) {
        // Último step - salvar no Firebase
        setLoading(true);
        try {
          await saveEmployee(formData);
          setActiveStep((prev) => prev + 1);
          setShowSuccess(true);
        } catch (error) {
          setShowError(true);
          console.error("Erro ao salvar:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (activeStep === 0 && onBack) {
      onBack();
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle2" sx={{ color: "#9CA3AF", mb: 2, fontSize: 14 }}>
          Colaboradores &nbsp;•&nbsp; Cadastrar Colaborador
        </Typography>
        <LinearProgress
          variant="determinate"
          value={activeStep === 0 ? 0 : activeStep === 1 ? 50 : 100}
          sx={{ 
            height: 2, 
            borderRadius: 1, 
            bgcolor: "#E5E7EB", 
            "& .MuiLinearProgress-bar": { bgcolor: "#10B981" }
          }}
        />
      </Box>
      <Paper elevation={0} sx={{ p: 6, borderRadius: 2, border: "1px solid #E5E7EB", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)" }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ width: { xs: '100%', md: '200px' }, minWidth: 200 }}>
            <StepSidebar activeStep={activeStep} />
          </Box>
          <Box sx={{ flex: 1, maxWidth: 400 }}>
            <Box>
              <Typography variant="h5" sx={{ mb: 4, color: "#111827", fontWeight: 600, fontSize: 20 }}>
                {activeStep === 0 ? "Informações Básicas" : "Informações Profissionais"}
              </Typography>
              {activeStep === 0 && (
                <EmployeeFormStep1 formData={formData} errors={errors} onChange={handleChange} />
              )}
              {activeStep === 1 && (
                <EmployeeFormStep2 formData={formData} errors={errors} onChange={handleChange} />
              )}
              {activeStep === steps.length ? (
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ mt: 2, color: "#10B981", mb: 3 }}>
                    ✅ Cadastro realizado com sucesso!
                  </Typography>
                  <Button 
                    onClick={() => onBack && onBack()} 
                    variant="contained"
                    sx={{ 
                      bgcolor: "#10B981", 
                      borderRadius: 1.5, 
                      px: 4, 
                      py: 1.5,
                      fontWeight: 600, 
                      fontSize: 14,
                      textTransform: "none",
                      boxShadow: "none",
                      '&:hover': { bgcolor: "#059669", boxShadow: "none" }
                    }}
                  >
                    Voltar para Lista
                  </Button>
                </Box>
              ) : (
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 8, pt: 4, borderTop: "1px solid #F3F4F6" }}>
                  <Button 
                    onClick={handleBack} 
                    disabled={loading}
                    sx={{ 
                      color: "#9CA3AF", 
                      fontWeight: 500,
                      fontSize: 14,
                      textTransform: "none",
                      px: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: "#6B7280"
                      }
                    }}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    disabled={loading}
                    sx={{ 
                      bgcolor: "#10B981", 
                      borderRadius: 1.5, 
                      px: 6, 
                      py: 1.5,
                      fontWeight: 600, 
                      fontSize: 14,
                      textTransform: "none",
                      boxShadow: "none",
                      '&:hover': { bgcolor: "#059669", boxShadow: "none" },
                      '&:disabled': { bgcolor: "#9CA3AF" }
                    }}
                    onClick={handleNext}
                  >
                    {loading ? (
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CircularProgress size={16} color="inherit" />
                        Salvando...
                      </Box>
                    ) : (
                      activeStep === steps.length - 1 ? "Concluir" : "Próximo"
                    )}
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Paper>
      
      {/* Notificações */}
      <Snackbar 
        open={showSuccess} 
        autoHideDuration={6000} 
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Colaborador cadastrado com sucesso!
        </Alert>
      </Snackbar>
      
      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setShowError(false)} severity="error">
          Erro ao cadastrar colaborador. Tente novamente.
        </Alert>
      </Snackbar>
    </Box>
  );
}
