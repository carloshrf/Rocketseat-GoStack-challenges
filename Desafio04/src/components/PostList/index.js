import React, { Component } from 'react';

import Post from '../Post';
import './styles.css'; 

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/diego.png"
        },
        date: "31 mar 2020",
        content: "Gente, alguém está querendo trabalhar na Rocketseat? Estou com vagas para o pessoal que mora em Fortaleza e que desejam aprender e desenvolver valor criando novos desafios para que nossos alunos se desafiem a resolver-los.",
        comments: [
          {
            id: 5,
            author: {
              name: "Rogério Filho",
              avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/dudu.png"
            },
            content: "Eu moro em fortaleza e quero me candidatar para a vaga, sou legal, pode confiar em mim.",
          },
        ]
      },
      {
        id: 2,
        author: {
          name: 'Drauzio Varella',
          avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/drauzio.png"
        },
        date: "30 mar 2020",
        content: "Enfim, acabei de descobrir a cura para o novo corona vírus e finalmente poderemos retomar a normalidade de nossa rotina, estou disponibilizando a cura para todos os centros médicos do Brasil, dentro de 24h todos poderão ter acesso à cura.",
        comments: [
          {
            id: 6,
            author: {
              name: "Jair Messias Bolsonaro",
              avatar: "https://github.com/carloshrf/Rocketseat-GoStack-challenges/blob/master/Desafio04/src/assets/profiles/bolsonabo.png?raw=true"
            },
            content: "Nacridito nisso, é uma fraude, só pode ser fantasia, é só agua com soro, pode ter certeza taoquei.",
          },
          {
            id: 3,
            author: {
              name: "Jackie Chan",
              avatar: "https://github.com/carloshrf/Rocketseat-GoStack-challenges/blob/master/Desafio04/src/assets/profiles/jackie.png?raw=true"
            },
            content: "Você merece os R$ 615.000,00 pela descoberta, meus parabéns meu pupilo, isso salvará milhares de vidas!",
          },
          {
            id: 4,
            author: {
              name: "Maluco Beleza",
              avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/raul.png"
            },
            content: "Que bosta, queria mais quarentena para finalizar GTA5 :(",
          },
        ]
      },
      {
        id: 7,
        author: {
          name: 'Carlos Henrique',
          avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/Carlos.png"
        },
        date: "31 mar 2020",
        content: "Procuro novas oportunidades de emprego!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/diego.png"
            },
            content: "Sim Sala Bim, aqui estou eu para uma boa notícia enfim, uma chance terá, vá para entrevista ligeirim",
          },
          {
            id: 5,
            author: {
              name: "Rogério Filho",
              avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/dudu.png"
            },
            content: "A mulengue, ai sim em, vai me ajudar a entrar tbm viu ;)",
          },
          {
            id: 8,
            author: {
              name: "Victor Lacerda",
              avatar: "https://raw.githubusercontent.com/carloshrf/Rocketseat-GoStack-challenges/master/Desafio04/src/assets/profiles/lacerda.png"
            },
            content: "A cara de tatu, bora jogar um fortnite depois.",
          },
        ]
      },
    ]
  };

  render() {
    return(

      <div className="body">
        {this.state.posts.map(post => 
          <Post 
            key={post.id} 
            name={post.author.name}
            date={post.date}
            avatar={post.author.avatar}
            content={post.content}
            comments={post.comments}
          />
        )}
      </div>
    );
  }
}

export default PostList;


// return (

//   this.state.posts.map(post => (
//     <div className="body">
//       <Post 
//         key={post.id}
//         name={post.author.name}
//         date={post.date}
//         avatar={post.author.avatar}
//         content={post.content}
//         comments={post.comments}
//       />
//     </div>
//     )
    
//   )
// )