import { useQuery } from 'react-query';
import { AllTableService } from 'API';
import { format } from 'date-fns';

export const useTable = date => {
  const dateFormat = format(date, 'yyyyMMdd');

  const { status, data, error } = useQuery(
    ['dayTable', dateFormat],
    () => AllTableService.getTable(dateFormat),
    {
      staleTime: 0,
      cacheTime: 1000 * 30,
      retry: 2, // 실패시 재호출 몇번 할지
    },
  );
  return { status, data };
};
