/*
install express npm install express

*/
const express = require('express');
const PORT = process.env.PORT || 8000;


express.get('/', (req, res) => {
    res.send('Sup Bolsh');
})


express.listen(PORT, () => { 
    console.log(`listening on port ${PORT}`); 
});
