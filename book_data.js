// Loader kết nối 3 phần dữ liệu sách chuẩn mực cho toàn bộ 10 Volumes
window.CFA_ALL_VOLUMES = [
  ...(window.CFA_VOLS_P1 || []),
  ...(window.CFA_VOLS_P2 || []),
  ...(window.CFA_VOLS_P3 || [])
];
