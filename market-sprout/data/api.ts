import { data } from "../components/data";

const { AzureOpenAI } = require("openai");

const endpoint = "https://shoppinglist.openai.azure.com/";
// const apiKey = process.env["AZURE_OPENAI_API_KEY"] || "<api key>";
const apiKey = "14239de9a91244e08f0e24d168b8061f";
const apiVersion = "2024-05-01-preview";
const deployment = "GPT-4o"; //This must match your deployment name.

export function fetchData(
  budget,
  days
): Promise<{ status: boolean; data?: data }> {
  return new Promise((resolve, reject) => {
    const client = new AzureOpenAI({
      endpoint: endpoint,
      apiKey: apiKey,
      apiVersion: apiVersion,
      deployment: deployment,
      dangerouslyAllowBrowser: true,
    });
    client.chat.completions
      .create({
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You are an AI whose purpose is to give a realistic recipe itinerary over a given amount of time given the user's input.  The user will give you two inputs: A budget, which you cannot go over, and a number of days. The budget must be split up over the number of days without going over it, and the prices of ingredients must be from a actual supermarket. Using this budget and timeline, you will first give the ingredients that will be used over the entire timeline that fit within the budget. Then, for each day, you will give an example meal that can be made only from the ingredients listed previously. Your output will match the following JSON format: {ingredients: { name: string; cost: number }[]; days: { breakfast: string; lunch: string; dinner: string }[];}",
          },
          {
            role: "user",
            content: `My budget is strictly ${budget} dollars, and I want a prediction for ${days} days.`,
          },
        ],
        model: "",
      })
      .then((result) => {
        console.log("Result", result);
        console.log(result.choices[0].message.content);
        resolve({
          status: true,
          data: JSON.parse(result.choices[0].message.content),
        });
      })
      .catch((error) => {
        console.log("ERROR");
        reject(error);
      });
  });
}
