import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  CircularProgress,
  Alert
} from "@mui/material";
import { loadEmployees } from "./firebase";

interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  status: "Ativo" | "Inativo";
  avatarUrl?: string;
}

export default function EmployeeList({ onNew }: { onNew?: () => void }) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Dados iniciais (mock)
  const initialEmployees: Employee[] = [
    {
      id: "1",
      name: "Fernanda Torres",
      email: "fernandatorres@flugo.com",
      department: "Design",
      status: "Ativo",
      avatarUrl: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: "2",
      name: "Joana D'Arc",
      email: "joanadarc@flugo.com",
      department: "TI",
      status: "Ativo",
      avatarUrl: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: "3",
      name: "Mari Froes",
      email: "marifroes@flugo.com",
      department: "Marketing",
      status: "Ativo",
      avatarUrl: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: "4",
      name: "Clara Costa",
      email: "claracosta@flugo.com",
      department: "Produto",
      status: "Inativo",
      avatarUrl: "https://i.pravatar.cc/150?img=4"
    }
  ];

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const firebaseData = await loadEmployees();
        
        // Converter dados do Firebase para o formato da interface
        const convertedFirebaseData: Employee[] = firebaseData.map((emp, index) => ({
          id: emp.id || `fb-${index}`,
          name: emp.nome,
          email: emp.email,
          department: emp.departamento,
          status: emp.ativo ? "Ativo" : "Inativo",
          avatarUrl: `https://i.pravatar.cc/150?img=${(index + 10)}`
        }));
        
        // Combinar dados mock + Firebase
        setEmployees([...initialEmployees, ...convertedFirebaseData]);
        setError(null);
      } catch (err) {
        console.error("Erro ao carregar colaboradores:", err);
        setError("Erro ao conectar com Firebase. Mostrando dados de exemplo.");
        setEmployees(initialEmployees);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 8 }}>
        <CircularProgress sx={{ color: "#10B981" }} />
        <Typography sx={{ ml: 2, color: "#6B7280" }}>Carregando colaboradores...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#111827", fontSize: 24 }}>
          Colaboradores
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={onNew}
          sx={{
            borderRadius: 1.5,
            px: 4,
            py: 1.2,
            fontWeight: 600,
            fontSize: 14,
            textTransform: "none",
            boxShadow: "none",
            bgcolor: "#10B981",
            color: "#fff",
            '&:hover': { bgcolor: "#059669", boxShadow: "none" }
          }}
        >
          Novo Colaborador
        </Button>
      </Box>
      
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)", border: "1px solid #E5E7EB", width: "100%" }}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 500, color: "#9CA3AF", borderBottom: "1px solid #F3F4F6", fontSize: 12, py: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Nome ↓
              </TableCell>
              <TableCell sx={{ fontWeight: 500, color: "#9CA3AF", borderBottom: "1px solid #F3F4F6", fontSize: 12, py: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Email ↓
              </TableCell>
              <TableCell sx={{ fontWeight: 500, color: "#9CA3AF", borderBottom: "1px solid #F3F4F6", fontSize: 12, py: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Departamento ↓
              </TableCell>
              <TableCell sx={{ fontWeight: 500, color: "#9CA3AF", borderBottom: "1px solid #F3F4F6", fontSize: 12, py: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Status ↓
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map(emp => (
              <TableRow key={emp.id} sx={{ 
                '&:last-child td': { borderBottom: "none" }, 
                '&:not(:last-child) td': { borderBottom: "1px solid #F3F4F6" },
                '&:hover': { bgcolor: "#F9FAFB" }
              }}>
                <TableCell sx={{ borderBottom: "inherit", py: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Avatar src={emp.avatarUrl} alt={emp.name} sx={{ width: 32, height: 32 }} />
                    <Typography sx={{ fontWeight: 500, color: "#111827", fontSize: 14 }}>
                      {emp.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "#6B7280", borderBottom: "inherit", fontSize: 14, py: 4 }}>
                  {emp.email}
                </TableCell>
                <TableCell sx={{ color: "#111827", borderBottom: "inherit", fontSize: 14, py: 4 }}>
                  {emp.department}
                </TableCell>
                <TableCell sx={{ borderBottom: "inherit", py: 4 }}>
                  <Chip
                    label={emp.status}
                    sx={{
                      fontWeight: 500,
                      fontSize: 12,
                      height: 22,
                      bgcolor: emp.status === "Ativo" ? "#D1FAE5" : "#FEE2E2",
                      color: emp.status === "Ativo" ? "#065F46" : "#991B1B",
                      border: "none",
                      borderRadius: 1,
                      '& .MuiChip-label': {
                        px: 2
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
