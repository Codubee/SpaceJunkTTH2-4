//Ojbect with 2 pieces of data
//1. Name of the tool such as React or Enzyme
//2. Info of the tool aka text explaining what the tool is and what it does
    //Ex: Name = React
    //Ex: Info = "React is an open-source, front end, JavaScript library for building user interfaces or UI components" <-- Copied from Wikipedia
function Tool(name, info)
{
    this.name = name;
    this.info = info;
}

export default Tool;
