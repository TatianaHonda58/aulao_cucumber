Feature: Login

    Scenario: Login com sucesso
        Given que esteja na página de login
        When realizo login com as seguintes credenciais
            |usuario|julio.lima|
            |senha  |123456    |
        Then sou redirecionado para a página inicial    

        Examples:
            | usuario   | senha  | 
            | julio.lima| 123456 |
            | adam      | 123456 |