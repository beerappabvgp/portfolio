export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?id=15QmCcJ-vszowzwEB5pxQVgYCCREWTHBv&export=download";
    link.download = 'resume.pdf'; 
    link.click();
}