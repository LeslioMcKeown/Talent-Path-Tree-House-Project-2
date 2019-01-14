/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Leslio McKeown
Started: 01/08/2019 - Ended: 01/10/2019
******************************************/


/*this event is going to run in the document when everything
is ready and when the DOm is ready to be manipulated*/

document.addEventListener('DOMContentLoaded', () => {




  const pageDiv = document.querySelector('.page');
  const studentList = document.querySelector('.student-list');
  const students = studentList.children;
  const startPage = 1; // starting number og the page 
  const pageStudentCount = 10; // this tells the program the max student on a page
  const paginationDiv = document.createElement('div');
  pageDiv.appendChild(paginationDiv);
  paginationDiv.className = 'pagination';
  const paginationUL = document.createElement('ul');
  paginationDiv.appendChild(paginationUL);



  const showPage = (list, page) => {

    const firstIndex = (page * pageStudentCount) - pageStudentCount;
    const lastIndex = firstIndex + pageStudentCount - 1;

    for (let i = 0; i < list.length; i += 1) {
      if (i >= firstIndex && i <= lastIndex) {
        /* this will fills the entire line, and nothing
         can be displayed on its left or right side.*/
        list[i].style.display = 'block';
      }
      else {
        /* this will let us allows the author to show or hide an element*/
        list[i].style.display = 'none';
      }
    }
    return list;
  }



  const appendPageLinks = (list) => {

    const maxPageNumber = Math.ceil(list.length / pageStudentCount);
/* this code with the help of Math lets us have a max seize dependeping on
the number of student */
    for (let i = 1; i <= maxPageNumber; i += 1) {
      const paginationLI = document.createElement('li');
      paginationUL.appendChild(paginationLI);

      const paginationLink = document.createElement('a');
      paginationLink.href = '#';
      paginationLink.textContent = i;
      paginationLI.appendChild(paginationLink);

      if (i === 1) {
        paginationLink.className = 'active';
      }
    } // will show the pages with the students in them
    return showPage(students, startPage);
  }


  paginationDiv.addEventListener('click', (e) => {
    let pageNumber = e.target.textContent;
    const updateLinks = document.querySelectorAll('.pagination ul li a');
    showPage(students, pageNumber);

    for (let i = 0; i < updateLinks.length; i += 1) {
      updateLinks[i].classList.remove('active');
    }
    e.target.className = 'active';
  })


  appendPageLinks(students);

})

// Remember to delete the comments that came with this file, and replace them with your own code comments.
