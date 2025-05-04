import apiClient from "@/app/services/axiosInstance";

interface DebtData {
    id: string;
    amount: number;
    // ... other fields
}

export const fetchDebtData = async (): Promise<DebtData[]> => {
    const { data } = await apiClient.get("/debts");
    return data;
};
