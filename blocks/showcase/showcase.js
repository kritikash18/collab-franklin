export default function decorate(block) {
  block.firstElementChild.classList.add("showcase-text");

  //heading
  const showCaseHeadingContainer = document.createElement('h1');
  const showCaseHeading = block.firstElementChild.children[0];
  showCaseHeadingContainer.innerHTML = showCaseHeading.innerHTML;
  block.firstElementChild.removeChild(showCaseHeading);
  block.firstElementChild.appendChild(showCaseHeadingContainer);

  //paragraph
  const showCaseTextContainer = document.createElement('p');
  const showCaseText = block.firstElementChild.children[0];
  showCaseTextContainer.innerHTML = showCaseText.innerHTML;
  block.firstElementChild.removeChild(showCaseText);
  block.firstElementChild.appendChild(showCaseTextContainer);

  //button
  const showCaseButtonContainer = document.createElement('a');
  showCaseButtonContainer.className = "btn btn-outline";
  const showCaseButton = block.firstElementChild.children[0];
  showCaseButtonContainer.innerHTML = showCaseButton.innerHTML;
  block.firstElementChild.removeChild(showCaseButton);
  block.firstElementChild.appendChild(showCaseButtonContainer);

  //form heading and fields
  const showCaseFormContainer = block.children[1];
  const showCaseForm = document.createElement('form');
  showCaseFormContainer.className = "showcase-form card";
  const formHeading = showCaseFormContainer.firstElementChild;
  const showCaseFormContainerHeading = document.createElement('h2');
  showCaseFormContainerHeading.innerHTML = formHeading.innerHTML;
  showCaseFormContainer.appendChild(showCaseFormContainerHeading);
  showCaseFormContainer.removeChild(formHeading);



  [...block.children].forEach((row, index) => {
    if(index > 1){
      const formElement = document.createElement('input');
      formElement.setAttribute("placeholder", row.children[0].innerHTML);
      formElement.setAttribute("type", row.children[1].innerHTML);
      formElement.required = true;
      showCaseForm.appendChild(formElement);
    }
  });

  const formElementSubmit = document.createElement('input');
  formElementSubmit.setAttribute("value", "Send");
  formElementSubmit.setAttribute("type", "submit");
  formElementSubmit.className = "btn btn-primary";
  showCaseForm.appendChild(formElementSubmit);
  showCaseFormContainer.appendChild(showCaseForm);

  [...block.children].forEach((row, index) => {
    if(index > 1){
      block.removeChild(row);
    }
  });
}