# SeeKattle
Controlo de versões para tudo que seja relacionado com código (servidor web, microcontroladores, etc...)

##Servidor Web
-----------


### Instalar Software base

1. Instalar a aplicação do **Github**
  - Clonar o repositório *SeeKattle* para uma pasta à escolha:

2. Criar conta e instalar o [**heroku**] (https://www.heroku.com/)
  - Avisar-me qual é o vosso *username* para vos ligar ao **SeeKattle**

3. Instalar o **meteor** 
  - [WINDOWS] (https://github.com/meteor/meteor/wiki/Preview-of-Meteor-on-Windows)
  - [MacOS/Linux] (https://www.meteor.com/install)
  
### 1. Desenvolver localmente

- Navegar até ao diretório do servidor (No *Windows* usar o **Git Shell**)

  `(...)/SeeKattle/seekattle_ws>`

- Correr o **meteor**
  
  `>meteor`
  
  * O Servidor está agora a correr 
  
    - Abrir o browser e aceder à página `localhost:3000`
    
  * Alterar os ficheiros e a página é actualizada **automaticamente** :)
  
### 2. Guardar as alterações no **GitHub**

  - Abrir a aplicação do *GitHub*
  
  - Escrever breve descrição das alterações e fazer **commit**

### 3. Fazer upload para o [site] (www.seekattle.herokuapp.com)

#### - Da primeira vez
  
- Navegar até ao diretório do servidor (No *Windows* usar o **Git Shell**)

  `(...)/SeeKattle/seekattle_ws>`


- Iniciar sessão no heroku
    
  `>heroku login`
      
- Selecionar o repositório remoto 'seekattle'
    
  `>heroku git:remote -a seekattle`

- Iniciar novo repositório git  
    
  `>git init`
  
#### - Por cada novo upload
  
- Adicionar os ficheiros desta pasta

  `>git add .`

- Guardar alterações 

  `>git commit -a -m "new deploy"`

- Fazer upload para o site

  `>git push -f heroku master`
  
  -------------------
  
  ### Outras Informações:
  
  ##### Acesso à base de dados remota
  - Dados
    - dbname: *seekattledb*
    - dbuser: *seekattle*
    - dbpass: *******
  
  - Aceder remotamente:
  
    `mongo ds039281.mongolab.com:39281/seekattledb -u seekattle -p ******` 
  
  
  
  
