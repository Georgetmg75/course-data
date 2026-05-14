import { useState, useEffect } from 'react';
import Loader from './Loader.jsx';

const InfiniteScroll = ({ fetchMore, hasMore, children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 100 &&
        hasMore &&
        !loading
      ) {
        setLoading(true);
        fetchMore().finally(() => setLoading(false));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMore, hasMore, loading]);

  return (
    <div>
      {children}
      {loading && <Loader />}
    </div>
  );
};

export default InfiniteScroll;