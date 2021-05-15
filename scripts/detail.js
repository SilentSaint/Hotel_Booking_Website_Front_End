HOME_LINK.setAttribute("href", "index.html");

//get min date for booking
let [minMonth, minDate, minYear] = new Date()
  .toLocaleDateString("en-US")
  .split("/");
const MINIMUM_DATE = {
  minMonth,
  minDate,
  minYear,
};

//get the next date for at least 1 day booking
//getting another date obj to avoid cases of 32nd as min date
const nextDate = new Date();
nextDate.setDate(nextDate.getDate() + 1);
const NEXT_MINIMUM_DATE = {
  nextMinMonth: nextDate.getMonth() + 1,
  nextMinDate: nextDate.getDate(),
  nextMinYear: nextDate.getFullYear(),
};

// append zeros to month and dates if they are less than 10 ie. 9 => 09
function appendZeroes(dateObj) {
  for (x in dateObj) {
    if (dateObj[x] < 10) {
      dateObj[x] = `0` + dateObj[x];
    }
  }
}

appendZeroes(MINIMUM_DATE);
appendZeroes(NEXT_MINIMUM_DATE);

/* Update cost based on form input */
//html targeted elements
const PAYMENT_FORM = document.querySelector(".payment-form");
const PAYMENT_FORM_ELEMENTS = PAYMENT_FORM.elements;
const TOTAL = PAYMENT_FORM_ELEMENTS["price"];
const ADULTS = PAYMENT_FORM_ELEMENTS["adult"];
const FROM_DATE = PAYMENT_FORM_ELEMENTS["from_date"];
const TO_DATE = PAYMENT_FORM_ELEMENTS["to_date"];

//setting min attributes
FROM_DATE.setAttribute(
  "min",
  `${MINIMUM_DATE.minYear}-${MINIMUM_DATE.minMonth}-${MINIMUM_DATE.minDate}`
);
TO_DATE.setAttribute(
  "min",
  `${NEXT_MINIMUM_DATE.nextMinYear}-${NEXT_MINIMUM_DATE.nextMinMonth}-${NEXT_MINIMUM_DATE.nextMinDate}`
);

//Update the bill cost
function UpdateBill() {
  if (TO_DATE.value === "" || FROM_DATE === "") {
    return;
  }
  let total = 0;
  const PRICE = 1000;
  const START_DATE = parseInt(FROM_DATE.value.slice(-2));
  const END_DATE = parseInt(TO_DATE.value.slice(-2));
  total = PRICE * adult.value * (END_DATE - START_DATE);
  TOTAL.value = `RS. ${total}`;
}

//EventListeners
FROM_DATE.addEventListener("change", () => {
  TOTAL.value = `Rs.0`;
});
ADULTS.addEventListener("change", UpdateBill);
TO_DATE.addEventListener("change", UpdateBill);
