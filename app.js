const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    /********* QUERY PARAMETERS **********/
    const slack_name = req.query.slack_name; 
    const track = req.query.track;
    
    /********* DATE **********/
    const date = new Date();
    const dayOption = {
        weekday: "long"
    };    
    const day = date.toLocaleDateString("en-us", dayOption) 
    const utcTime = date.toISOString();
  
    /******** RESPONSE **********/
    const response = {
    slack_name: slack_name,
    current_day: day,
    utc_time: utcTime,
    track: track,
    github_file_url: "https://github.com/fawazlolade/stageone/blob/main/app.js",
    github_repo_url: "https://github.com/fawazlolade/stageone/tree/main",
    status_code: 200
    };

  res.json(response); //return response in json format
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




