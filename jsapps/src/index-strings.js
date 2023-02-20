//literals
//strings : "" , '' ,``(back tick - es 6 features)

let firstName = "Subramanian"
let lastName = 'Murugan'
//string concatnation using +
console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)
//using es 6 back ticknotation: string interpolation
console.log(`Name  ${firstName} ${lastName} `)

//multi line :in es 5 style
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

//multi line : es 6 style
let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)

