

var connect = require("connect");
var logger = require("morgan");
var http = require("http");
var ejs = require("ejs");
var url = require("url");
var serve_static = require("serve-static");
var qs = require("querystring");


var ArrayOfContacts = [];
var app = connect()
    .use(logger('dev'))
    .use(serve_static('public'))
    .use(serve)

http.createServer(app).listen(3000);



function serve(req, res){

    if ( req.url == '/mailer.html' && req.method =='POST') {
        var body = "";
        req.on('data', function(chunk) {
         body+= chunk;
        });

        req.on('end', function(){
           
            var post =  qs.parse(body);
            //console.log(post);
            
            render(res, "contact-info.ejs", {"post": post});
            ArrayOfContacts.push(post);
            console.log(post);
           
        });
    }
   else if(req.url == '/contactsList.html'){
        console.log(ArrayOfContacts);
        render(res, "contactsList.ejs", {"ArrayOfContacts" : ArrayOfContacts});
    }
    
    else{
        res.writeHead(401, {'Content-Type': 'text/html'});
        res.end("Opps! Page not found!");
    }
}



function render(res, view, model){
    ejs.renderFile(view, model, 
        function(err, result){
            if(!err){
                res.end(result);
            }
            else {
                res.end("An error occured!");
            }
        }
        );
}

/*


function serve(req, res){

    if(req.method == 'POST'){
        post_process(req, res);
    }
    else if (req.method == 'GET'){
        get_process(req, res);
    }
    
}

function post_process(req, res){
       var body = "";
       req.on('data', function(chunk){
         body+=chunk;
        });


        req.on('end', ()=> {
            var post = qs.parse(body);
            ejs.renderFile("contact-info.ejs", {post : post}, function(err, result){
                if(!err){
                    res.end(result);
                }
                else{
                    res.end("An error occured! ");
                }
            });
            /*for( q in post){
                console.log(q + "-->" + post[q]);
                response+= ("<br>" + q + "-->" + post[q]);
            }
            response += "</body></html>";
            res.end(response);
        

function get_process(req, res){

    var uri = url.parse(req.url, true);
    var query = uri.query;

    for(q in query){
        console.log(q + "-->" + query[q]);
    }

    res.end('That page was not found! ');
}

*/