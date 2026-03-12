// function for cv downloading
export const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/AnishLandageResume.pdf';
  link.download = 'AnishLandageResume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
};
