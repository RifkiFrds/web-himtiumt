import { useState, useEffect, useMemo } from 'react';
import { getStruktural } from '../api/strukturalService';

export const useStruktural = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getStruktural();
        const formattedData = result.data.map(item => ({
          id: item.id,
          name: item.Member.name,
          role: item.jabatan,
          image: item.image,
          socials: {
            instagram: item.Member.instagram,
            linkedin: item.Member.linkedin,
          }
        }));
        setAllMembers(formattedData);
      } catch (err) {
        setError("Gagal memuat data struktural.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

// Memisahkan data menjadi formasi 2-4-4 menggunakan useMemo
  const { topTwo, middleFour, bottomFour } = useMemo(() => {
    const sortedMembers = [...allMembers].sort((a, b) => {
      if (a.role.includes("KETUA HIMPUNAN")) return -1;
      if (b.role.includes("KETUA HIMPUNAN")) return 1;
      if (a.role.includes("WAKIL")) return -1;
      if (b.role.includes("WAKIL")) return 1;
      if (a.role.includes("SEKRETARIS")) return -1;
      if (b.role.includes("SEKRETARIS")) return 1;
      return 0;
    });

    const top = sortedMembers.slice(0, 2);
    const middle = sortedMembers.slice(2, 6);
    const bottom = sortedMembers.slice(6, 10);
    
    return { topTwo: top, middleFour: middle, bottomFour: bottom };
  }, [allMembers]);

  return { loading, error, topTwo, middleFour, bottomFour };
};