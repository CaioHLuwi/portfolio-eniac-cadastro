# Página Web feita para o portfólio da matéria de Layout para Web - Wireframe, UX e Bootstrap do ENIAC. 

Para a criação dessa página, foi cedido o seguinte estudo de caso:

## ESTUDO DE CASO

No dinâmico universo da web moderna, as técnicas de layout para sites têm se revelado fundamentais para a construção de interfaces envolventes e funcionais. O layout, a disposição dos elementos na página, transcende a mera estética para desempenhar um papel crucial na usabilidade e na navegação intuitiva. Através do uso criterioso de HTML e CSS, profissionais do design web exploram grids responsivos, flexbox e outras estruturas que  moldam a experiência do usuário, independente do dispositivo. A harmonização da  disposição dos elementos, a hierarquia visual e a consistência estrutural são essenciais para que o layout do site transmita eficazmente a mensagem e guie os visitantes de maneira fluida pela informação desejada.

A Experiência do Usuário (UX) é o fio condutor que costura o panorama digital em que vivemos. Ela transcende a superfície e adentra as interações emocionais, funcionais e cognitivas que os usuários têm com os produtos digitais. Em uma sociedade cada vez mais  orientada pela interatividade digital, a busca incessante por uma UX excepcional é inevitável.

Juntamente com essa busca, a estilização eficaz tornou-se uma aliada inseparável. O uso sutil de cores, tipografia coerente e elementos visuais cativantes aprimora a estética e, ao mesmo tempo, contribui para uma experiência coesa e memorável. A harmonia entre a estilização e a funcionalidade é uma dança delicada que exige atenção meticulosa à usabilidade e acessibilidade, garantindo que a forma e a função estejam intrinsecamente ligadas para  proporcionar um espaço digital acolhedor, informativo e atraente.

Unindo técnicas de layout  inovadoras, a perspectiva humana da UX e a estilização cuidadosa, os profissionais da web  têm a oportunidade de criar experiências digitais que transcendem a tela, gerando conexões duradouras entre os usuários e o conteúdo. Este equilíbrio entre forma e função é o segredo  para construir o cenário digital de amanhã, onde a arte da web se une à ciência da usabilidade,  proporcionando interfaces que são verdadeiramente agradáveis, intuitivas e  valiosas para os usuários em todo o mundo. 

## ATIVIDADE PROPOSTA

1. Você recebeu um formulário HTML para um cadastro de usuário, que é funcional, mas
carece de estilo. Sua tarefa é aplicar técnicas de estilização para tornar o formulário
mais atraente e fácil de usar. Aplique técnicas e/ou código css para melhorar o layout.

Segue o código html

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
  </head>
  <body>
    <h1>Cadastro de Usuário</h1>
    <form action="#" method="post">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required>
      <br>
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required>
      <br>
      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha" required>
      <br>
      <label for="confirmar-senha">Confirmar Senha:</label>
      <input type="password" id="confirmar-senha" name="confirmar-senha" required>
      <br>
      <label>Gênero:</label>
      <input type="radio" id="genero-masculino" name="genero" value="Masculino">
      <label for="genero-masculino">Masculino</label>
      <input type="radio" id="genero-feminino" name="genero" value="Feminino">
      <label for="genero-feminino">Feminino</label>
      <input type="radio" id="genero-outro" name="genero" value="Outro">
      <label for="genero-outro">Outro</label>
      <br>
      <label for="data-nascimento">Data de Nascimento:</label>
      <input type="date" id="data-nascimento" name="data-nascimento" required>
      <br>
      <label for="cidade">Cidade:</label>
      <input type="text" id="cidade" name="cidade">
      <br>
      <label for="pais">País:</label>
      <input type="text" id="pais" name="pais">
      <br>
      <button type="submit">Cadastrar</button>
    </form>
  </body>
</html>

