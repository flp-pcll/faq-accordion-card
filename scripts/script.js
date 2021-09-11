const faqItem = document.querySelectorAll('.faq-item');

//I used the elemLists to test and remove the previously highlighted elements;
const answerList = Array.from(document.querySelectorAll('.answer'));
const questionList = Array.from(document.querySelectorAll('.question'));
const arrowList = Array.from(document.querySelectorAll('.arrow-icon'))

faqItem.forEach(item => {
    item.addEventListener('click', showAnswer);
})

function showAnswer(event) {
    //This method will return the closest ancestor of the event.targets
    //In this case, i have two possible targets(the question and the arrow-icon), so it does not matter
    //where the user points, it always get the full .faq-item; 
    let faqArea = event.target.closest('.faq-item'); 
    let faqAnswer = faqArea.lastElementChild;
    let faqQuestion = faqArea.firstElementChild;
    let arrowIcon = faqArea.children[1];

    changeElementOnClick(faqAnswer, answerList, 'answer__active'); //Show and Hide the Answer on click;
    changeElementOnClick(faqQuestion, questionList, 'question__clicked'); //Highlight Question on click;
    changeElementOnClick(arrowIcon, arrowList, 'rotate'); //Rotate the arrow-icon on click;

}

//This function remove the changes on the previous FAQ Item and apply the changes in the target Item:
function changeElementOnClick(item, itemList, className) {
    //Tests if the highlighted item is clicked so it can remove the highlight:
    if (item.classList.contains(className)) {
        item.classList.remove(className);
    } else {
        //Searches for the previous highlighted item to remove it and apply in the new target:
        for (let i in itemList) {
            if(itemList[i].classList.contains(className)) {
                itemList[i].classList.remove(className);
            }
        }
        item.classList.add(className);
    }
}






