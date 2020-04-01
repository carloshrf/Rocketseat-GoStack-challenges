import React, { Component } from 'react';

import Post from '../Post';
import './styles.css';

import Diego from '../../assets/profiles/diego.png'; 
import Bolsonaro from '../../assets/profiles/diego.png'; 
import Drauzio from '../../assets/profiles/drauzio.png'; 
import Dudu from '../../assets/profiles/dudu.png'; 
import Jackie from '../../assets/profiles/jackie.png'; 
import Lacerda from '../../assets/profiles/lacerda.png'; 
import Raul from '../../assets/profiles/raul.png'; 
import Carlos from '../../assets/profiles/carlos.png'; 

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatar: {Diego}
        },
        date: "31 mar 2020",
        content: "Gente, alguém está querendo trabalhar no Rocketseat? Estou com vagas para o pessoal que mora em Fortaleza e que desejam aprender e desenvolver valor criando novos desafios para que nossos alunos se desafiem a resolver-los.",
        comments: [
          {
            id: 5,
            author: {
              name: "Rogério Filho",
              avatar: {Dudu}
            },
            content: "Eu moro em fortaleza e quero me candidatar para a vaga, sou legal, pode confiar em mim.",
          },
        ]
      },
      {
        id: 2,
        author: {
          name: 'Drauzio Varella',
          avatar: {Drauzio}
        },
        date: "30 mar 2020",
        content: "Enfim, acabei de descobrir a cura para o novo corona vírus e finalmente poderemos retomar a normalidade de nossa rotina, estou disponibilizando a cura para todos os centros médicos do Brasil, dentro de 24h todos poderão ter acesso à cura.",
        comments: [
          {
            id: 6,
            author: {
              name: "Jair Messias Bolsonaro",
              avatar: {Bolsonaro}
            },
            content: "Nacridito nisso, é uma fraude, só pode ser fantasia, é só agua com soro, pode ter certeza taoquei.",
          },
          {
            id: 3,
            author: {
              name: "Jackie Chan",
              avatar: {Jackie}
            },
            content: "Você merece os R$ 615.000,00 pela descoberta, meus parabéns meu pupilo, isso salvará milhares de vidas!",
          },
          {
            id: 4,
            author: {
              name: "Maluco Beleza",
              avatar: {Raul}
            },
            content: "Que bosta, queria mais quarentena para finalizar GTA5 :(",
          },
        ]
      },
      {
        id: 7,
        author: {
          name: 'Carlos Henrique',
          avatar: {Carlos}
        },
        date: "31 mar 2020",
        content: "Procuro novas oportunidades de emprego!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: {Diego}
            },
            content: "Sim Sala Bim, aqui estou eu para uma boa notícia enfim, uma chance terá, vá para entrevista ligeirim",
          },
          {
            id: 5,
            author: {
              name: "Rogério Filho",
              avatar: {Dudu}
            },
            content: "A mulengue, ai sim em, vai me ajudar a entrar tbm viu ;)",
          },
        ]
      },
    ]
  };

  render() {
    return (
        // <div className="body">
        //   <Post test={this.state.posts.map(post => post.author.name === "Diego Fernandes")} />
        // </div>

      this.state.posts.map(post => (
        <div className="body">
          <Post 
            key={post.id}
            name={post.author.name}
            date={post.date}
            avatar={post.author.avatar}
            content={post.content}
            commentId={post.comments.id}
          />
        </div>
        )
      )
    )
  }
}

export default PostList;