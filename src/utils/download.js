export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?id=18ow3Dn6cNA_H5x2kEGpwezb3XvHBMEUH&export=download";
    link.download = 'resume.pdf'; 
    link.click();
}