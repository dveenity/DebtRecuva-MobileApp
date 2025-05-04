import { useQuery } from "@tanstack/react-query";
import { fetchDebtData } from "./useFetch";

export const useDebtData = () => {
    // get the auth context to decide if this hook should run
    const user = true;

    const {
        data: debtData,
        isLoading: isDebtDataLoading,
        isError: isDebtDataError,
        refetch: refetchDebtData,
    } = useQuery({
        queryKey: ["userAnalytics"],
        queryFn: fetchDebtData,
        enabled: !!user,
    });

    return {
        debtData,
        isDebtDataLoading,
        isDebtDataError,
        refetchDebtData,
    };
};
