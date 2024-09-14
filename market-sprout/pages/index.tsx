import React, { useState } from "react";
import PageComponent from "../components/PageComponent";
import styles from "../styles/Page.module.css";
const DEFAULT_BUDGET = 100;
export default function Home() {
  const [budget, setBudget] = useState<number>(DEFAULT_BUDGET);
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter" || event.key == "Escape") {
      event.currentTarget.blur();
      return;
    }
  };
  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const value = Number(
      event.currentTarget.value.length > 0
        ? event.currentTarget.value
        : DEFAULT_BUDGET
    );
    if (value == undefined || isNaN(value)) {
      alert("Budget value is undefined or is not a number.");
      event.currentTarget.value = DEFAULT_BUDGET.toFixed(2);
    } else {
      setBudget(value);
      event.currentTarget.value = value.toFixed(2);
    }
  };
  return (
    <PageComponent>
      <div className="background">
        <div className={styles.contentContainer}>
          <h1>Market-Sprout</h1>
          <p>Sustainable, Fresh, Local</p>
          <div className={styles.budgetContainer}>
            <p>Budget $</p>
            <input
              type="number"
              placeholder={"100.00"}
              onKeyUp={handleKeyUp}
              onBlur={handleOnBlur}
            />
          </div>
        </div>
      </div>
    </PageComponent>
  );
}
