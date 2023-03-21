const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// Select tab content item 
function selectItem(e) {
  //below functio removes the border from all the tabs before adding border to the clicked tab
  removeBorder();
  //below we are hiding all the tabs before applying show class to the clicked tab
  removeShow();
  //add border to the current tab
  this.classList.add('tab-border');
  //Grab content item from the Dom
  const tabContent = document.querySelector(`#${this.id}-content`);
  tabContent.classList.add('show');
}
function removeBorder() {
    tabItems.forEach((item)=>{
        item.classList.remove('tab-border');
    });
}
function removeShow() {
    tabContentItems.forEach((item)=>{
        item.classList.remove('show');
    });
}
// Listen for tab click 
tabItems.forEach((item)=>{
    item.addEventListener('click',selectItem)
});
