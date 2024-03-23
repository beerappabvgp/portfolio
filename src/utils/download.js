export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/18ow3Dn6cNA_H5x2kEGpwezb3XvHBMEUH/view?usp=sharing";
    link.download = 'resume.pdf'; 
    link.click();
}