import Card from "./Card";
import ProgressBar from "./ProgressBar";
import "styles/PercentageCard.css";

/**
 * Displays percentage data
 */
export default class PercentageCard {
  /**
   * Create a PercentageCard component
   * @param {Array<any>} data
   */
  constructor(data) {
    this._data = data ? data : {};
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    const { title, value } = this._data;

    const titleElement = document.createElement("h4");
    titleElement.innerText = title;

    const percentageValue = document.createElement("em");
    percentageValue.innerText = `${value}%`;

    const titleRow = document.createElement("div");
    titleRow.appendChild(titleElement);

    titleRow.appendChild(titleElement);
    titleRow.appendChild(percentageValue);

    const percentageRow = document.createElement("div");
    const progressBar = new ProgressBar({ value });
    percentageRow.appendChild(progressBar.getElement());

    const footerRow = document.createElement("div");

    // Help button
    const helpButton = document.createElement("button");
    
    // Event for on hover added on the Progress Card small icon at the bottom left
    helpButton.addEventListener("mouseover", function() 
    {
      helpIcon.style.color = 'red'; // icon will turn to red on hover
    }    
    );
    helpButton.addEventListener("click", function() 
    {
      // On click redirecting to the same page at the moment, 
      // but could be redirecting to pne of the page of our application, 
      //or can be routed to a diffrent route in case of single page application
      // for example I am opening our own app'url on click,
      window.open('http://localhost:9000');
    }    
    );

    // The event to remove the styling added on mouseover event on the icon.
    helpButton.addEventListener("mouseout", function() 
    {
      helpIcon.style.color = '';
    }    
    );
    helpButton.className = "help-button";
    const helpIcon = document.createElement("i");
    // Icon type changed - icon will give the perception that there is more informton on the percentage card.
    helpIcon.className = "fas fa-plus-circle";
    helpButton.appendChild(helpIcon);

    footerRow.appendChild(helpButton);

    const card = new Card([titleRow, percentageRow, footerRow]).getElement();
    card.className += " percentage-card";

    return card;
  }
}
