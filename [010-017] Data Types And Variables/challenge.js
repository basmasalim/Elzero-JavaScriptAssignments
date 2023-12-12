/*
==========================================
== Variable And Concatenation Challenge ==
==========================================

[1] Create 3 Variables [Title, Description, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Dive Contains 
-- H3 For Title 
-- P For Paragraph
-- Span For Time 
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra 
- Repeat 
*/
let TitleCard = "Elzero",
    DescriptionCard = "Elzero Web School",
    DateCard = "25/10";

let challenge =`
    <div>
        <h3>${TitleCard}</h3>
        <p>${DescriptionCard}</p>
        <span>${DateCard}</span>
    </div>
`;

document.write(challenge.repeat(4));