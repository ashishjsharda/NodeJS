var url=require('url');
var addr='https://finance.yahoo.com/news/litecoin-climbs-10-rally-005100196.html';
var q=url.parse(addr);
console.log(q.hostname);
console.log(q.pathname);
console.log(q.protocol);
