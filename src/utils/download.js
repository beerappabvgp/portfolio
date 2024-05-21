export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?id=1j-uQy_1cZg7BN2kTBsUgkjIgoptNVWCl";
    link.download = 'resume.pdf'; 
    link.click();
}