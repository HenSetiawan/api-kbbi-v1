const cheerio=require('cheerio');
const https=require('https');
require('dotenv').config();


exports.search=async (req,res)=>{

    if(req.params.keyword===undefined){
        res.status(300)
        .json({msg:"keyword not found"});
        return
    }
    const keyword=req.params.keyword;
    const kbbiUrl=`https://kbbi.kemdikbud.go.id/entri/${keyword}`;

    https.get(kbbiUrl, (response) => {
        if (response.statusCode !== 200) {
          console.error(`Did not get an OK from the server. Code: ${response.statusCode}`);
          res.status(response.statusCode)
          .json({msg:"data not found"})            
          return;
        }
      
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
      
        response.on('close', () => {
          console.log('Retrieved all data-------------------------');
          const htmlResutl=cheerio.load(data);

          const totalKata=htmlResutl('h2').length;
          const result=[];
          for (let index = 0; index < totalKata; index++) {
              const kata=htmlResutl('h2').eq(index).text()
              const artiKata=[];
              const title=htmlResutl('h2').eq(index);
              const liElement=title.nextUntil('ol,ul').next().children('li');
              liElement.each((index,el)=>{
                artiKata.push(htmlResutl(el).text());
              });
              const tempData=[
                  {
                      kata,
                      artiKata
                  }
              ]

              result.push(tempData);
          }
          
  
          res.status(response.statusCode)
          .json(
              {
                msg:'success 200 OK',
                jumlah_kata:totalKata,
                data:result,
                self:{
                    link:kbbiUrl
                }
              }
          )
        });
      });

}
