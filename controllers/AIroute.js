const router = require('express').Router();
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router.get('/', async (req, res) => {
  res.render('AI-chat', { logged_in: true });
});

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: ` You are an AI programming teacher that helps people with coding and math. You are very friendly. You know every single programming language in great detail. 
      You also know every mark up language and every advanded math concept.  Only answer programming and math questions.
      ${prompt}
     
     `,
      max_tokens: 150,
      temperature: 0.5,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    responseData = response.data.choices[0].text.trim().replace(/\n/g, '');
    return res.status(200).json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : 'There was an issue on the server',
    });
  }
});

// const getResponse = async () =>{
//     const url = window.location.pathname;
//     const response = await fetch(`${url}`, {
//         method: "POST",
//         "Content-Type": 'application/json'
//     });
//   } catch(error){
//     return res.status(400).json({
//       success: false,
//       error: error.response
//       ? error.response.data
//       : "There was an issue on the server"
//     });

module.exports = router;
