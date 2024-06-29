import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
export default useTitle;