import React, {useState} from 'react'

export default function TextForm(props) {
  
      function ChangedText(event)
      {
            setText(event.target.value);
      }


      function ChangeUpperCase()
      {
        setText(text.toUpperCase());
        props.showalert("converted to upper case", "success");
      }


      function ChangeLowerCase()
      {
      
        setText(text.toLowerCase());
        props.showalert("converted to lower case", "success");
      }

      function ClearText()
      {
        let newtext = ' ';
        setText(newtext);
      }

    function CapitilisedCase()
    {
      var words = text.split(' ');  
        var CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
      
      setText ( CapitalizedWords.join(' '));
      props.showalert("Capitalize the text", "success");

    }

    function CopyText()
    {
      var copy =  document.getElementById("mytext");
      copy.select();
      navigator.clipboard.writeText(copy.value);
      props.showalert("Copied  the text", "success");
     
    }

    function RemoveExtraSpace()
    {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(' '));
      props.showalert("removed the text", "success");
    }
    function countWords(text){
      let wc = text.split(" ").length;
      text.split(" ").forEach((word) => {
          if(!word.length){
              wc -= 1;  
          }
      });

      return wc;
  }
  var [text, setText] = useState("");
  return (
    <div className='container'>
        <h2>Enter the text to analyze</h2>
            <div className="mb-3">
            
                <textarea className="form-control" value ={text} onChange = {ChangedText} id="mytext" rows="5"></textarea>
                <button className='btn btn-success my-3' onClick={ChangeUpperCase}>Convert to UpperCase</button>
                <button className='btn btn-success my-3 mx-2' onClick={ChangeLowerCase}>Convert to LowerCase</button>
                <button className='btn btn-success my-3 mx-2' onClick={CapitilisedCase}>Capitalise</button>
                <button className='btn btn-success my-3 mx-2' onClick={CopyText}>Copy Text</button>
                <button className='btn btn-success my-3 mx-2' onClick={RemoveExtraSpace}>Remove Extra Space</button>
                <button className='btn  my-3 mx-2'  style={{color: "#61dafb"}} onClick={ClearText}>Clear text</button>
  
            </div>
           
        <div className='container'>
              <h2>Your text contains</h2>
              <p style={{color:"white"}}>{ countWords(text)} words and {text.length} characters</p>
              <p style={{color:"white"}}>{0.008 * (text.split(' ').length)} minutes to read text </p>
        </div>
        <div className='container' >
              <h2>Preview</h2>
              <p style={{color:"white"}}>{text}</p>
        </div>
    </div>
  )
}
