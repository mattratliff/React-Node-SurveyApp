React Survey App

Tech Stack:
- React.JS
- Node.JS
- PostGres

Description:

This is a survey app demonstrating the use of React in the front-end with Node/Express Server on the backend


Database Design:

                Question Type   
                       |                                  
Template -----< Template Question ------< Template Question Choice
    |               |                       ^                                              
    |               |     |-----------------|                                       
    |               |     |                                                         
    |               |     |                                                         
    |               |     |                                                         
Survey -------< Survey Response

Template: Template for a survey

Template Question: Question for a template

Template Question Choice:  Choice for a question (Multiplce Choice)

Question Type: Type of question (T/F, MC, Short Answer)

Survey: Instance of a Template

Survey Response: User answer of a question

Front-end:

Template component --- has many --- Template questions --- has many --- answers
