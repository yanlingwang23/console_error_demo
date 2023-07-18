const url ='https://api.github.com/repos/';
const owner = 'microsoft'
const repo = 'vscode-edge-devtools'
const type = 'issues';
const params = {
state: 'all',
per_page: 10,
page: 1
}
let req_url = `${url}/${owner}/${repo}/${type}?`;
let parameters = [];
Object.keys(params).forEach(p => {
parameters.push(`${p}=${params[p]}`);
});
fetch(req_url+parameters.join('&'))
.then(response => response.json())
.then(data => {
let out = '';
data.forEach(d => {
    out += `
    <tr>
        <td><a href="${d.url}">${d.number}</a></td>
        <td>${d.title}</td>
        <td>${d.state}</td>
    </tr>
    `;
});
document.querySelector('tbody').innerHTML = out;
});

// ReferenceError: assignment to undeclared variable "x"
function foo() {
    "use strict";
    bar = true;
}
foo();