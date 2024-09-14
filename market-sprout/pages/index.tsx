import React, { useState } from "react";
import PageComponent from "../components/PageComponent";
import styles from "../styles/Page.module.css";
import { EventEmitter } from "stream";
import { IoSparklesOutline } from "react-icons/io5";
import { symlink } from "fs";

const DEFAULT_BUDGET = 100;
const DEFAULT_DURATION = 1;
export default function Home() {
  const [budget, setBudget] = useState<number>(DEFAULT_BUDGET);
  const [duration, setDuration] = useState<number>(DEFAULT_DURATION);
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter" || event.key == "Escape") {
      event.currentTarget.blur();
      return;
    }
  };
  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    let value = Number(
      event.currentTarget.value.length > 0
        ? event.currentTarget.value
        : DEFAULT_BUDGET
    );
    if (value < 1) {
      value = DEFAULT_BUDGET;
    }

    if (value == undefined || isNaN(value)) {
      alert("Budget value is undefined or is not a number.");
      event.currentTarget.value = DEFAULT_BUDGET.toFixed(2);
    } else {
      setBudget(value);
      event.currentTarget.value = value.toFixed(2);
    }
  };
  const handleSliderChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    if (duration != value) {
      setDuration(value);
    }
  };
  return (
    <PageComponent>
      <div className={styles.backdrop}>
        <div className={styles.frosted}>
          <div className={styles.contentContainer}>
            <h1>Market-Sprout</h1>
            <p>Sustainable, Fresh, Local</p>
            <div style={{ height: 20 }} />
            <div className={styles.budgetContainer}>
              <p>Budget $</p>
              <input
                type="number"
                placeholder={"100.00"}
                onKeyUp={handleKeyUp}
                onBlur={handleOnBlur}
              />
            </div>

            <div className={styles.durationContainer}>
              <p>Duration: {duration + (duration > 1 ? " Days" : " Day")}</p>
              <input
                type="range"
                min={1}
                max={14}
                step={1}
                onChange={handleSliderChanged}
                defaultValue={DEFAULT_DURATION}
              />
            </div>
            <div className={styles.generateButton}>
              <IoSparklesOutline size={"2vw"} />
              Generate
            </div>
          </div>
        </div>
      </div>
    </PageComponent>
  );
}
