import { useState, useEffect } from 'react';
import { getAngkatanList, getAnggotaByAngkatan } from '../api/angkatanService';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useAngkatan = () => {
  const [angkatanTabs, setAngkatanTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [anggota, setAnggota] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingAnggota, setLoadingAnggota] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAngkatanList = async () => {
      setLoading(true);
      try {
        const result = await getAngkatanList();
        const activeAngkatan = result.data.filter(a => a.isActive && a.id !== 'all');
        
        const formattedTabs = activeAngkatan.map(a => ({
          title: `Angkatan ${a.year}`, 
          value: a.id,
          year: a.year,
        }));
        
        setAngkatanTabs(formattedTabs);
        if (formattedTabs.length > 0) {
          setActiveTab(formattedTabs[0]);
        }
      } catch (err) {
        setError("Gagal memuat daftar angkatan.");
      } finally {
        setLoading(false);
      }
    };
    fetchAngkatanList();
  }, []);

  useEffect(() => {
    if (!activeTab) return;

    const fetchAnggota = async () => {
      setLoadingAnggota(true);
      // TAMBAHKAN BARIS INI UNTUK MENGHAPUS DATA LAMA
      setAnggota([]); 
      try {
        const result = await getAnggotaByAngkatan(activeTab.value);
        const formattedAnggota = result.data.map(item => {
          let imageUrl = '/images/avatar-man.jpg';

          if (item.photo) {
            if (item.photo.startsWith('http')) {
              imageUrl = item.photo;
            } else {
              imageUrl = `${API_BASE_URL}${item.photo}`;
            }
          }

          return {
            id: item.id,
            name: item.name,
            image: imageUrl,
            role: `Anggota Angkatan ${activeTab.year}`,
            socials: {
              linkedin: item.linkedin,
              instagram: item.instagram,
              github: item.github,
            }
          };
        });
        setAnggota(formattedAnggota);
      } catch (err) {
        setError("Gagal memuat data anggota.");
      } finally {
        setLoadingAnggota(false);
      }
    };
    fetchAnggota();
  }, [activeTab]);

  return { loading, loadingAnggota, error, angkatanTabs, anggota, activeTab, setActiveTab };
};