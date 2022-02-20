
const factList = document.querySelector('#factList');
const fetchCatFact = async () => {
    try {
        const res = await axios.get('https://catfact.ninja/fact?max_length=300')
        const catFact =(res.data.fact)
        const newLI = document.createElement('li');
        newLI.append(catFact);
        factList.append(newLI);
        var items =document.querySelectorAll('li');
        console.log(items)
        if( items.length > 1)
        {
        console.log("hello");
        items[0].remove();
        }
{
    
}
    }
    catch (e){
        console.log("Error",e)
    }
}

const imgButton = document.querySelector('#imgButton');
imgButton.addEventListener('click',fetchCatFact);

