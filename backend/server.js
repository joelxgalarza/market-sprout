const express = require("express");
const bodyParser = require("body-parser");
const { AzureOpenAI } = require("openai");
const cors = require("cors");

const endpoint = "";

example_json = {
  ingredient: [{name: "", cost: ""}],
  days: [{breakfast: "", lunch: "", dinner: ""}],
};
// const apiKey = process.env["AZURE_OPENAI_API_KEY"] || "<api key>";
const apiKey = "";
const apiVersion = "2024-05-01-preview";
const deployment = "GPT-4o"; //This must match your deployment name.
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  console.log("SENT");
  try {
    const client = new AzureOpenAI({
      endpoint,
      apiKey,
      apiVersion,
      deployment,
    });
    const result = await client.chat.completions.create({
      messages: [
        { role: "system", content: "" },
        {
          role: "user",
          content: "Does Azure OpenAI support customer managed keys?",
        },
        {
          role: "assistant",
          content: "Yes, customer managed keys are supported by Azure OpenAI?",
        },
        {
          role: "user",
          content: "Do other Azure AI services support this too?",
        },
      ],
      model: "",
    });
    console.log("Result", result);
    console.log(result.choices[0].message.content);
    // for (const choice of result.choices) {
    //   console.log(choice);
    // }

    // // Extracting the response from OpenAI
    // const aiResponse = response.choices[0].message.content;
    // console.log(`AI Response: ${aiResponse}`);

    // // Sending the response back as JSON
    res.status(200).json({ answer: "true" });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Something went wrong with OpenAI API." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
