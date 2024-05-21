export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?id=15U8fvxRWzFas8S6T_4YbM7KOwYTKZ2tP";
    link.download = 'resume.pdf'; 
    link.click();
}