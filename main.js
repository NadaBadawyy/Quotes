quotes=[
   
    {
        qName:"So many books, so little time.",
        author:'-- Frank Zappa'
    },
    {
        qName:" “Be yourself; everyone else is already taken.” ",
        author:'-- Oscar Wilde'
    },
    {
        qName:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:'-- Albert Einstein'
    },
    
    {
        qName:"“A room without books is like a body without a soul.”",
        author:'-- Marcus Tullius Cicero'
    },
    {
        qName:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author:'-- Bernard M. Baruch'
    },
    {
        qName:"“You only live once, but if you do it right, once is enough.”",
        author:'-- Mae West'
    },
    {
        qName:"“Be the change that you wish to see in the world.”",
        author:'-- Mahatma Gandhi'
    },
    {
        qName:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:'-- Robert Frost'
    },
    {
        qName:"“A friend is someone who knows all about you and still loves you.”",
        author:'--  Elbert Hubbard'
    },
    {
        qName:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:'-- Andre Gide'
    },
    {
        qName:"“Always forgive your enemies; nothing annoys them so much.”",
        author:'-- Oscar Wilde'
    },
    {
        qName:"“We accept the love we think we deserve.”",
        author:'-- Stephen Chbosky'
    },
    {
        qName:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        author:'-- Oscar Wilde'
    },
    {
        qName:" “The best revenge is massive success.”",
        author:'-- Frank Sinatra'
    },
    {
        qName:"“ You miss 100% of the shots you don't take.”",
        author:'-- Marilyn Monroe'
    }

];
var y;
function press(){
    var x=quotes[Math.floor(Math.random() * quotes.length)];
    console.log(x,y);
    if(x!=y){
        
      cartona=`
      <h4>${x.qName}</h4>
      <h4>${x.author}</h4>
      `
      document.getElementById('q').innerHTML=cartona;  
    }
    
    
    y=x;
}

