import { IoCaretDown } from "react-icons/io5";
import styles from "../styles/Data.module.css";
import { data } from "./data";
import React, { useEffect, useState } from "react";
export default function DataDisplay({ data }: { data: data }) {
  return (
    <div>
      <ShoppingList ingredients={data.ingredients} />
      <div className={styles.dayListContianer}>
        {data.days.map(
          (
            day: { breakfast: string; lunch: string; dinner: string },
            index: number
          ) => {
            return (
              <div className={styles.dayContainer}>
                <div className={styles.dayNumber}>Day: {index + 1}</div>
                <div className={styles.dayMenu}>
                  <p>
                    <strong>Breakfast: </strong>
                    {day.breakfast}
                  </p>
                  <p>
                    <strong>Lunch: </strong>
                    {day.lunch}
                  </p>
                  <p>
                    <strong>Dinner: </strong>
                    {day.dinner}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

function ShoppingList({
  ingredients,
}: {
  ingredients: { name: string; cost: number }[];
}) {
  const [costTotal, setCostTotal] = useState<number>(0);
  useEffect(() => {
    setCostTotal(
      ingredients.reduce(
        (partialSum, ingredients) => partialSum + ingredients.cost,
        0
      )
    );
  }, [ingredients]);
  return (
    <React.Fragment>
      <div className={styles.dropdownList}>
        {ingredients.map((ingredient: { name: string; cost: number }) => {
          return (
            <div className={styles.dropdownListItem}>
              <h4>{ingredient.name}</h4>
              <p>${ingredient.cost.toFixed(2)}</p>
            </div>
          );
        })}
        <div />
        <div className={styles.dropdownListItem}>
          <h4>Total:</h4>
          <p>${costTotal.toFixed(2)}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
