const express = require('express');
const fs = require('fs')
const {parseInvoice} = require('./logic')

const app = express();
app.use(express.json());

// reading input file
let data = fs.readFileSync('input_user_story_1.txt' , 'utf-8');

// parsing the invoice numbers
const ans = parseInvoice(data)

// Writing the data into file
fs.writeFileSync('output_user_story_1.txt', JSON.stringify(ans));

app.get("" , (req , res) => {
   res.send(ans);
})

app.listen(8000, () => {
    console.log('server is started!')
})