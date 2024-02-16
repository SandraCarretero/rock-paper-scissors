(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&g(n)}).observe(document,{childList:!0,subtree:!0});function E(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function g(e){if(e.ep)return;e.ep=!0;const t=E(e);fetch(e.href,t)}})();const a=document.getElementById("game-items"),L=document.getElementById("points-user"),I=document.getElementById("points-pc"),p=document.getElementById("result-items"),y=document.getElementById("play-again"),f=document.getElementById("picked-user-container"),k=document.getElementById("picked-user-image"),r=document.getElementById("game-result"),v=document.getElementById("picked-pc-container"),x=document.getElementById("picked-pc-image"),B="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='63'%20height='60'%3e%3cpath%20fill='%233B4262'%20d='M49.483%202.096c3.229-2%206.324-2.433%208.714-1.219%205.359%202.72%204.583%2012.845%202.39%2017.232-1.238%202.477-3.432%204.287-6.527%205.387-1.2%203.799-2.884%207.064-5.034%209.764a7.904%207.904%200%20005.079%201.837h.09l3.02-2.982c.761-.75%201.994-.751%202.754%200%20.76.75.76%201.968%200%202.718l-.267.264h.608c1.075%200%201.947.861%201.947%201.923%200%201.061-.872%201.922-1.947%201.922h-.608l.267.264c.76.75.76%201.968%200%202.719-.38.375-.878.563-1.376.563-.499%200-.997-.188-1.377-.563l-3.022-2.983h-.09a11.823%2011.823%200%2001-7.724-2.857c-.415.377-.843.738-1.284%201.083-3.732%202.92-8.294%204.617-13.627%205.082a12.08%2012.08%200%2001.343%206.352l-.02.09%202.325%203.66a1.998%201.998%200%2001-.589%202.741%201.936%201.936%200%2001-1.057.316%201.953%201.953%200%2001-1.651-.912l-.206-.324-.13.605a1.966%201.966%200%2001-1.913%201.562%201.95%201.95%200%2001-.419-.046%201.984%201.984%200%2001-1.498-2.36l.13-.605-.32.209a1.946%201.946%200%2001-2.709-.597%201.998%201.998%200%2001.59-2.74l3.617-2.353.02-.09a8.073%208.073%200%2000-.713-5.394%2044.773%2044.773%200%2001-4.797-.4c-4.684-.634-7.341%201.433-8.044%202.081-5.518%205.093-6.586%2014.092-6.596%2014.183a1.977%201.977%200%2001-1.96%201.757%201.97%201.97%200%2001-1.63-.867c-.087-.13-2.164-3.234-3.075-7.615-1.237-5.95.238-11.407%204.266-15.783a20.702%2020.702%200%20018.738-5.615l-.407.106a7.99%207.99%200%2000-3.375-.747h-.09l-3.032%202.983a1.965%201.965%200%2001-1.382.563c-.5%200-1-.188-1.382-.563a1.9%201.9%200%20010-2.719l.268-.264h-.61c-1.08%200-1.954-.86-1.954-1.922%200-1.062.875-1.922%201.954-1.922h.61l-.268-.264a1.9%201.9%200%20010-2.72c.763-.75%202-.75%202.764%200l3.032%202.983h.09a11.87%2011.87%200%20018.661%203.726l-.217-.223a22.914%2022.914%200%20015.352.095c4.946.67%208.99-.018%2012.113-2.052a12.215%2012.215%200%2001-2.71-7.7v-.092L30.6%2016.287a2.034%202.034%200%20010-2.812%201.885%201.885%200%20012.725%200l.265.273v-.621c0-1.099.862-1.989%201.926-1.989s1.927.89%201.927%201.989v.62l.265-.272a1.885%201.885%200%20012.725%200c1.146%201.183.32%202.483%200%202.812l-2.99%203.086v.091c0%201.878.635%203.673%201.771%205.098%201.412-1.686%202.522-3.808%203.325-6.36-.587-1.625-1.5-5.473.828-9.837%201.22-2.285%203.564-4.687%206.117-6.269z'/%3e%3c/svg%3e",O="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='49'%20height='59'%3e%3cpath%20fill='%233B4262'%20d='M47.125%2011.832a2.922%202.922%200%2000-1.232-.198c-.57.04-1.029.271-1.302.65-1.604%202.248-2.919%206.493-3.979%209.905-.486%201.577-1.14%203.688-1.612%204.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865%201.816-1.446%208.19l-.002.028c-.32%203.502-1.058%2011.566-1.965%2012.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698%201.638-.894.995-.578%204.292.41%2012.102.47%203.718%201.44%2011.395.83%2012.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183%203.183%200%2000-.377.049c-.787.156-2.584.881-2.2%204.226%201.06%204.637%202.213%208.041%203.331%2011.346l.023.066c.669%201.98%201.302%203.85%201.89%205.925%201.385%204.9.846%207.94.84%207.975-.046.312-.143.503-.288.57a.556.556%200%2001-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803%201.441-.914%201.32-.535%203.002-.444%203.34l.052.12c.028.051%202.834%205.165%203.268%207.544.374%202.04%202.311%204.25%203.869%206.026l.064.073c.508.58.946%201.083%201.292%201.548%204.519%204.713%2011.665%208.677%2011.723%208.71.892.657%201.387%201.293%201.44%201.84a.798.798%200%2001-.16.58l-.155.162.988.96%2018.853-1.324.804-3.684c2.486-10.402%201.967-19.272%201.958-19.33.01-.327.706-3.483%201.266-6.033l.017-.065c1.117-5.08%202.505-11.4%202.772-13.803.116-1.028-.542-1.972-1.675-2.401z'/%3e%3c/svg%3e",P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%3e%3cpath%20fill='%233B4262'%20d='M45.06%2012.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571%207.066-9.571%207.066-.234%202.588%201.403%2010.593%201.403%2010.593-1.477-4.614-4.68-.784-4.68-.784-3.94%206.078-.975%209.405-.975%209.405%205.33%206.246%2016.688%2013.743%2016.688%2013.743%204.113%202.356%202.373%204.457%202.373%204.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z'/%3e%3c/svg%3e",z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='51'%20height='58'%3e%3cpath%20fill='%233B4262'%20d='M13.971%2025.702l6.012-8.415c-2.499-.415-7.088-.507-10.846%203.235C3.212%2026.421.812%2039.163.312%2042.248L15.37%2057.24c2.711-.232%2014.713-1.827%2026.279-13.34.122-.249%202.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345%202.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013%2011.687-10.208%209.98-8.979%2017.5-15.995%202.809-2.329-.725-6.447-3.493-4.09L28.182%2025.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787%203.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28%2027.307c-.452.65-1.364.8-1.985.345a1.377%201.377%200%2001-.323-1.95z'/%3e%3c/svg%3e",C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='45'%20height='59'%3e%3cpath%20fill='%233B4262'%20d='M44.042%2032.422l-.863-.86c-2.062-2.054-5.433-2.5-7.95-1.06l-5.376%203.059%201.12-24.502c0-2.054-1.678-3.726-3.743-3.726-.446%200-.875.079-1.273.222l.134-1.315c0-2.077-1.705-3.767-3.798-3.767-1.936%200-3.559%201.445-3.764%203.299l-3.45%2020.75c-.045.282-.536.253-.588.075L10.416%207.962a3.658%203.658%200%2000-3.502-2.629c-1.118%200-2.157.501-2.853%201.375a3.592%203.592%200%2000-.69%203.08l.792%203.35a3.34%203.34%200%2000-1.335.168%203.447%203.447%200%2000-2.326%203.818L2.9%2030.85c0%205.415.953%209.423%201.754%2011.83a13.61%2013.61%200%2001.687%204.291c0%201.284-.179%202.562-.534%203.796l-1.86%206.482c-.104.366-.03.76.198%201.065.232.304.592.483.975.483h21.97a1.218%201.218%200%20001.16-1.6c-.013-.031-1.033-3.169-.067-7.437%201.225-.99%205.514-4.462%207.054-5.862%202.546-2.315%209.521-9.468%209.817-9.772a1.21%201.21%200%2000-.012-1.705z'/%3e%3c/svg%3e",R={rock:{paper:!1,scissors:!0,lizard:!0,spock:!1},scissors:{rock:!1,paper:!0,lizard:!0,spock:!1},paper:{rock:!0,scissors:!1,lizard:!1,spock:!0},lizard:{rock:!1,paper:!0,scissors:!1,spock:!0},spock:{rock:!0,paper:!1,scissors:!0,lizard:!1}},u={rock:P,paper:O,scissors:z,lizard:B,spock:C},h=["rock","paper","scissors"];let c=null,l=null,i=0,m=0,d=!1;const S=()=>{L.textContent=i,I.textContent=m},w=()=>{d?(a.classList.add("hide"),p.classList.remove("hide")):(a.classList.remove("hide"),p.classList.add("hide"))},M=()=>{f.classList.add(`game-item-${c}`),k.src=u[c],v.classList.add(`game-item-${l}`),x.src=u[l],d=!0,w()},U=()=>{if(c===l){console.log("empate"),r.textContent="DRAW";return}R[c][l]?(i++,r.textContent="YOU WIN",console.log(`YOU:${i}`)):(m++,r.textContent="YOU LOSE",console.log(`PC:${m}`)),S()},$=()=>{const s=Math.floor(Math.random()*h.length);l=h[s],console.log(`user:${c} pc:${l}`),U(),M()},A=s=>{c=s,$()},b=()=>{f.classList.remove(`game-item-${c}`),v.classList.remove(`game-item-${l}`),d=!1,w()};document.body.dataset.mode==="advanced"&&a.push("lizard","spock");a.addEventListener("click",s=>{s.target.classList.contains("game-item")&&A(s.target.dataset.item)});y.addEventListener("click",b);
