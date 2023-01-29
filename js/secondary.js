export function secondFile(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  }
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);

  // For each section, we need to iterate over the items in that list, and determine if they are all completed or not.
  // This will in turn allow us to label the section in the nav.

  const itemsSelectedCheck = function () {
    // Passing the section in this function should allow us to loop over the child items of that section.
    // section.children[1].children

    // Returns arrays with how many classes selected items have
    checklistSections.forEach(e => {
      let entry = e.children[1].children; // entry = <div .cl-item>
      // let entry = e.id;
      let checklistStatusArr = [];

      for (let i = 0; i < entry.length; i++) {
        if (entry[i].firstElementChild.classList.length > 0) {
          checklistStatusArr.push(entry[i].firstElementChild.classList.length);
        }
      }

      console.log(checklistStatusArr);
    });

    // Parse all checklist items and determine how many classes are added, push that state to the array above.
    // for (let i =0; i < checklistItems.length; i++) {
    //   if (checklistItems[i].firstElementChild.classList.length > 0) {
    //     checklistStatusArr.push(checklistItems[i].firstElementChild.classList.length);
    //   }
    // }


    // Function to check if array elements equal 2
    // const equalsTwo = (element) => {
    //   return element === 2;
    // };
    // Check if all items are completed or not
    // if (checklistStatusArr.every(equalsTwo)) {
    //   console.log('checklist is done');
    // } else {
    //   console.log('checklist is NOT done');
    // }
  };

  /* WIP code for organizing li by class
  const sortChecklist = function (list, items) {
      for (let i = 0, arr = ['selected', 'done']; i < arr.length; i++) {
          for (let j = 0; j < items.length; j++) {
              if (items[j].className !== undefined) {
                  if (~items[j].className.indexOf(arr[i])) {
                      list.appendChild(items[j]);
                  }
              }
          }
      }
  }

  sortButton.forEach(e => {
      e.addEventListener('click', () => {
          sortChecklist(e.nextElementSibling, e.nextElementSibling.childNodes);
      });
  });
 */
}
