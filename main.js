const WorkFields = ['Web Design','App Design', 'Wireframe', 'UI/UX', 'Graphic Design'];
const workFieldElements = WorkFields.map(dataPoint => {
    return `
    <div class="flex  gap-24 text-white">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0L9.88974 5.67944L13.5 1.20577L11.4308 6.56918L16.7942 4.5L12.3206 8.11026L18 9L12.3206 9.88974L16.7942 13.5L11.4308 11.4308L13.5 16.7942L9.88974 12.3206L9 18L8.11026 12.3206L4.5 16.7942L6.56918 11.4308L1.20577 13.5L5.67944 9.88974L0 9L5.67944 8.11026L1.20577 4.5L6.56918 6.56918L4.5 1.20577L8.11026 5.67944L9 0Z" fill="white"/>
    </svg>
    <span>${dataPoint}</span>
    </div>
` }).join('').repeat(4);
document.querySelector('.work-fields').innerHTML = workFieldElements;

const WorkCompanies = ['/assets/companies/µLearn.png','/assets/companies/Devx.png', '/assets/companies/inovuslabs.png', '/assets/companies/EDUNEXT.png', '/assets/companies/bsafe.png', '/assets/companies/batheco.png'];
const workCompanyElements = WorkCompanies.map(dataPoint => {
    return `
    <div class="flex gap-32 text-white ">
        <img src="${dataPoint}" alt="Company Logo" class="h-8 w-auto">
    </div>
` }).join('');
document.querySelector('.work-company').innerHTML = workCompanyElements;




const nav_center = document.querySelector('.navbar-center');
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Check if at bottom of page
    const atBottom = scrollTop + clientHeight >= scrollHeight;

    if (scrollTop > 100 && !atBottom) {
        nav_center.style.boxShadow = '1px 1px 10px 5px rgba(204, 204, 204, 0.2)';
    } else {
        nav_center.style.boxShadow = 'none';
    }
});

