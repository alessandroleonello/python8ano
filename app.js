/* ==========================================================================
   PyKids 🐍 - Lógica Interativa com Quiz de Fixação (Aulas 1 e 2)
   ========================================================================== */

// --- Estado Global da Aplicação ---
let state = {
    user: {
        name: 'Dev',
        school: 'PyKids',
        avatar: 'snake',
        stars: 0
    },
    currentLessonId: 1,
    currentActivityIndex: 0,
    lessonProgress: {
        1: [false, false, false, false, false, false, false],
        2: [false, false, false, false, false],
        3: [false, false, false, false, false],
        4: [false, false, false, false, false],
        5: [false, false, false, false, false],
        6: [false, false, false, false, false, false],
        7: [false, false, false, false, false],
        8: [false, false, false, false, false]
    }
};

// Map de Emojis de Avatar
const AVATAR_MAP = {
    snake: '🐍',
    wizard: '🧙‍♂️',
    robot: '🤖',
    cat: '🐱'
};

// --- ESTRUTURA COMPLETA DAS AULAS, ATIVIDADES E QUIZZES ---
const LESSONS = {
    // --- AULA 1: OPERAÇÕES BÁSICAS ---
    1: {
        id: 1,
        title: 'Aula 1: Operações Básicas',
        filename: 'aula_1_operacoes.py',
        activities: [
            {
                id: 1,
                operator: '+',
                name: 'Adição & Concatenação',
                title: 'Atividade 1: O Operador + (Soma e Concatenação)',
                subtitle: 'Aprenda a somar números e a juntar textos!',
                explanation: 'Em Python, o operador <code>+</code> faz duas coisas incríveis! Se você colocar dois <strong>números</strong>, ele calcula a <strong>soma</strong>. Mas se colocar <strong>textos entre aspas</strong>, ele <strong>junta as palavras</strong> (concatenação)!',
                labelA: 'Variável <code class="var-name-pill py-var">valor_1</code>',
                labelB: 'Variável <code class="var-name-pill py-var">valor_2</code>',
                labelRes: '✨ Variável de Saída <code class="var-name-pill py-var">resultado</code>',
                defaultA: '10',
                defaultB: '15',
                presets: [
                    { label: '🔢 10 + 15', a: '10', b: '15' },
                    { label: '🔤 "Olá " + "Mundo"', a: '"Olá "', b: '"Mundo"' },
                    { label: '⭐ 100 + 500', a: '100', b: '500' }
                ],
                quiz: {
                    question: 'O que acontece em Python quando usamos o operador + entre dois textos (ex: <code>"Super "</code> + <code>"Dev"</code>)?',
                    options: [
                        'O Python calcula o tamanho das duas palavras.',
                        'O Python junta as duas palavras formando "Super Dev" (Concatenação).',
                        'O Python dá um erro porque o sinal + só aceita números.'
                    ],
                    correctIndex: 1
                }
            },
            {
                id: 2,
                operator: '-',
                name: 'Subtração',
                title: 'Atividade 2: O Operador - (Subtração)',
                subtitle: 'Subtraia números e descubra a diferença!',
                explanation: 'O operador <code>-</code> diminui o segundo número do primeiro. Tente trocar os valores para ver resultados positivos ou até números negativos (ex: <code>10 - 25 = -15</code>)!',
                labelA: 'Variável <code class="var-name-pill py-var">valor_1</code>',
                labelB: 'Variável <code class="var-name-pill py-var">valor_2</code>',
                labelRes: '✨ Variável de Saída <code class="var-name-pill py-var">resultado</code>',
                defaultA: '50',
                defaultB: '20',
                presets: [
                    { label: '🔢 50 - 20', a: '50', b: '20' },
                    { label: '❄️ 10 - 25', a: '10', b: '25' },
                    { label: '🎯 30 - 20', a: '30', b: '20' }
                ],
                quiz: {
                    question: 'Qual é o resultado da operação <code>50 - 20</code> executada pelo Python?',
                    options: [
                        '70',
                        '30',
                        '"5020"'
                    ],
                    correctIndex: 1
                }
            },
            {
                id: 3,
                operator: '*',
                name: 'Multiplicação & Repetição',
                title: 'Atividade 3: O Operador * (Multiplicação)',
                subtitle: 'Multiplique números ou repita palavras várias vezes!',
                explanation: 'O sinal de asterisco <code>*</code> multiplica números (ex: <code>7 * 8 = 56</code>). <strong>Super truque do Python:</strong> Se você multiplicar um <strong>texto</strong> por um <strong>número</strong> (ex: <code>"Py " * 3</code>), ele repete a palavra!',
                labelA: 'Variável <code class="var-name-pill py-var">valor_1</code>',
                labelB: 'Variável <code class="var-name-pill py-var">valor_2</code>',
                labelRes: '✨ Variável de Saída <code class="var-name-pill py-var">resultado</code>',
                defaultA: '7',
                defaultB: '8',
                presets: [
                    { label: '🔢 7 * 8', a: '7', b: '8' },
                    { label: '🔤 "Python " * 3', a: '"Python "', b: '3' },
                    { label: '🚀 5 * 5', a: '5', b: '5' }
                ],
                quiz: {
                    question: 'O que o Python faz ao executar a multiplicação de texto <code>"Py" * 3</code>?',
                    options: [
                        'Repete a palavra 3 vezes, resultando em "PyPyPy".',
                        'Escreve a palavra "Py" seguida do número 3.',
                        'Dá um erro de sintaxe.'
                    ],
                    correctIndex: 0
                }
            },
            {
                id: 4,
                operator: '/',
                name: 'Divisão Decimal (Float)',
                title: 'Atividade 4: O Operador / (Divisão Decimal)',
                subtitle: 'Divida números e conheça os decimais (Float)!',
                explanation: 'O operador de barra <code>/</code> divide dois números. No Python, a divisão comum <strong>sempre produz um número decimal (float)</strong>, com ponto/vírgula! Exemplo: <code>15 / 2 = 7.5</code>.',
                labelA: 'Variável <code class="var-name-pill py-var">valor_1</code>',
                labelB: 'Variável <code class="var-name-pill py-var">valor_2</code>',
                labelRes: '✨ Variável de Saída <code class="var-name-pill py-var">resultado</code>',
                defaultA: '15',
                defaultB: '2',
                presets: [
                    { label: '🍰 15 / 2', a: '15', b: '2' },
                    { label: '🍕 10 / 4', a: '10', b: '4' },
                    { label: '⚽ 20 / 5', a: '20', b: '5' }
                ],
                quiz: {
                    question: 'Qual é a regra da divisão comum com <code>/</code> no Python?',
                    options: [
                        'Ela sempre retorna um número decimal (tipo float, com ponto/vírgula), como 15 / 2 = 7.5.',
                        'Ela sempre descarta os números decimais e fica só com a parte inteira.',
                        'Ela transforma o número resultante em texto.'
                    ],
                    correctIndex: 0
                }
            },
            {
                id: 5,
                operator: '//',
                name: 'Divisão Inteira',
                title: 'Atividade 5: O Operador // (Divisão Inteira)',
                subtitle: 'Jogue fora os decimais e fique só com a parte inteira!',
                explanation: 'O operador de barra dupla <code>//</code> faz a <strong>Divisão Inteira</strong>. Ele descarta tudo que fica depois da vírgula! Compare <code>15 / 2 = 7.5</code> com <code>15 // 2 = 7</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">valor_1</code>',
                labelB: 'Variável <code class="var-name-pill py-var">valor_2</code>',
                labelRes: '✨ Variável de Saída <code class="var-name-pill py-var">resultado</code>',
                defaultA: '15',
                defaultB: '2',
                presets: [
                    { label: '🔢 15 // 2', a: '15', b: '2' },
                    { label: '🔢 20 // 3', a: '20', b: '3' },
                    { label: '🔢 100 // 9', a: '100', b: '9' }
                ],
                quiz: {
                    question: 'Se a divisão <code>15 / 2</code> dá 7.5, qual é o resultado da Divisão Inteira <code>15 // 2</code>?',
                    options: [
                        '7.5',
                        '7 (descarta as casas decimais).',
                        '15'
                    ],
                    correctIndex: 1
                }
            },
            {
                id: 6,
                operator: '%',
                name: 'Resto da Divisão (Módulo)',
                title: 'Atividade 6: O Operador % (Resto / Módulo)',
                subtitle: 'Descubra quanto sobra em uma divisão!',
                explanation: 'O operador de porcentagem <code>%</code> calcula o <strong>resto da divisão</strong>. Exemplo: se dividirmos 17 por 5, dá 3 para cada um e <strong>sobram 2</strong> (<code>17 % 5 = 2</code>). É super usado para saber se um número é Par ou Ímpar!',
                labelA: 'Variável <code class="var-name-pill py-var">valor_1</code>',
                labelB: 'Variável <code class="var-name-pill py-var">valor_2</code>',
                labelRes: '✨ Variável de Saída <code class="var-name-pill py-var">resultado</code>',
                defaultA: '17',
                defaultB: '5',
                presets: [
                    { label: '🎁 17 % 5', a: '17', b: '5' },
                    { label: '⚖️ 10 % 2 (Par?)', a: '10', b: '2' },
                    { label: '⚡ 9 % 2 (Ímpar?)', a: '9', b: '2' }
                ],
                quiz: {
                    question: 'Para que serve o operador <code>%</code> (Módulo) na conta <code>17 % 5</code>?',
                    options: [
                        'Para calcular a porcentagem de desconto de 17.',
                        'Para calcular o resto que sobrou da divisão (que é 2).',
                        'Para multiplicar 17 por 5.'
                    ],
                    correctIndex: 1
                }
            },
            {
                id: 7,
                operator: '**',
                name: 'Potência (Exponenciação)',
                title: 'Atividade 7: O Operador ** (Potência)',
                subtitle: 'Eleve números ao quadrado, ao cubo e além!',
                explanation: 'O operador <code>**</code> (dois asteriscos) calcula a <strong>potência</strong> (exponenciação). Fazer <code>2 ** 3</code> é o mesmo que multiplicar 2 por ele mesmo 3 vezes (<code>2 * 2 * 2 = 8</code>)!',
                labelA: 'Variável <code class="var-name-pill py-var">valor_1</code>',
                labelB: 'Variável <code class="var-name-pill py-var">valor_2</code>',
                labelRes: '✨ Variável de Saída <code class="var-name-pill py-var">resultado</code>',
                defaultA: '2',
                defaultB: '8',
                presets: [
                    { label: '🚀 2 ** 8', a: '2', b: '8' },
                    { label: '⚡ 5 ** 2', a: '5', b: '2' },
                    { label: '🔥 3 ** 3', a: '3', b: '3' }
                ],
                quiz: {
                    question: 'O que o operador <code>**</code> (dois asteriscos) calcula em <code>2 ** 8</code>?',
                    options: [
                        'O dobro de 8.',
                        'A Potência / Exponenciação (2 elevado a 8 = 256).',
                        'Duas multiplicações separadas por vírgula.'
                    ],
                    correctIndex: 1
                }
            }
        ]
    },

    // --- AULA 2: VARIÁVEIS E CAIXAS DE MEMÓRIA ---
    2: {
        id: 2,
        title: 'Aula 2: Variáveis e Caixas de Memória',
        filename: 'aula_2_variaveis.py',
        activities: [
            {
                id: 1,
                operator: '=',
                name: 'Criando Caixas de Memória',
                title: 'Atividade 1: Guardando Dados na Caixa (=)',
                subtitle: 'Crie sua primeira variável e escolha o que guardar dentro dela!',
                explanation: 'Uma <strong>Variável</strong> em Python é como uma caixinha com uma etiqueta! O sinal de igual <code>=</code> significa <strong>"guardar dentro da caixa"</strong>. Exemplo: <code>nome = "Mariana"</code> guarda o texto "Mariana" na variável chamada <code>nome</code>!',
                labelA: 'Nome da Caixa <code class="var-name-pill py-var">nome_da_var</code>',
                labelB: 'Conteúdo Guardado <code class="var-name-pill py-var">conteudo</code>',
                labelRes: '✨ Variável no Python <code class="var-name-pill py-var">memoria</code>',
                defaultA: 'minha_caixa',
                defaultB: '"Super Dev Python"',
                presets: [
                    { label: '📦 nome = "Lucas"', a: 'nome', b: '"Lucas"' },
                    { label: '⭐ xp = 100', a: 'xp', b: '100' },
                    { label: '🚀 superpower = "Voar"', a: 'superpower', b: '"Voar"' }
                ],
                quiz: {
                    question: 'Ao escrever <code class="var-name-pill py-var">nome</code> = "Mariana" em Python, o que o sinal de igual <code>=</code> está fazendo?',
                    options: [
                        'Comparando se a variável nome é igual a Mariana.',
                        'Guarda o texto "Mariana" dentro da caixa de memória chamada <code class="var-name-pill py-var">nome</code>.',
                        'Apaga o nome da memória do computador.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const varName = rawA.replace(/\s+/g, '_') || 'minha_caixa';
                    const strB = parsedB.rawType === 'str' ? `"${parsedB.value}"` : parsedB.value;
                    return {
                        code: `<span class="py-comment"># Criando a variável na memória</span>\n<span class="py-var">${varName}</span> = <span class="${parsedB.rawType === 'str' ? 'py-string' : 'py-number'}">${strB}</span>\n<span class="py-func">print</span>(<span class="py-string">"Conteúdo da caixa ${varName}:"</span>, <span class="py-var">${varName}</span>)`,
                        result: parsedB.value,
                        type: parsedB.rawType,
                        varName: varName,
                        printPrefix: `Conteúdo da caixa ${varName}:`
                    };
                }
            },
            {
                id: 2,
                operator: '*',
                layout: 'vertical',
                name: 'Contas com Variáveis',
                title: 'Atividade 2: Multiplicando Caixas de Memória',
                subtitle: 'Empilhe variáveis e veja o resultado mudar ao calcular preco * quantidade!',
                explanation: 'No Python, você pode multiplicar os valores de duas caixinhas para calcular o valor total! Exemplo: <code>total = preco * quantidade</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">preco</code>',
                labelB: 'Variável <code class="var-name-pill py-var">quantidade</code>',
                labelRes: '✨ Expressão: <code class="var-name-pill py-var">preco</code> * <code class="var-name-pill py-var">quantidade</code> =',
                defaultA: '15',
                defaultB: '3',
                presets: [
                    { label: '🛒 preco 15 * qtd 3', a: '15', b: '3' },
                    { label: '🍕 preco 10 * qtd 4', a: '10', b: '4' },
                    { label: '⭐ preco 100 * qtd 2', a: '100', b: '2' }
                ],
                quiz: {
                    question: 'Se <code class="var-name-pill py-var">preco</code> = 15 e <code class="var-name-pill py-var">quantidade</code> = 3, qual valor fica guardado na caixa <code class="var-name-pill py-var">total</code>?',
                    options: [
                        '18',
                        '45 (15 * 3 = 45)',
                        '"153"'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const val1 = typeof parsedA.value === 'number' ? parsedA.value : 15;
                    const val2 = typeof parsedB.value === 'number' ? parsedB.value : 3;
                    const total = val1 * val2;
                    return {
                        code: `<span class="py-comment"># Multiplicando duas variáveis</span>\n<span class="py-var">preco</span> = <span class="py-number">${val1}</span>\n<span class="py-var">quantidade</span> = <span class="py-number">${val2}</span>\n<span class="py-var">total</span> = <span class="py-var">preco</span> <span class="py-op">*</span> <span class="py-var">quantidade</span>\n<span class="py-func">print</span>(<span class="py-string">"Total a pagar:"</span>, <span class="py-var">total</span>)`,
                        result: total,
                        type: Number.isInteger(total) ? 'int' : 'float',
                        varName: 'total',
                        printPrefix: 'Total a pagar:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">preco</code> * <code class="var-name-pill py-var">quantidade</code> =`
                    };
                }
            },
            {
                id: 3,
                operator: '+=',
                layout: 'vertical',
                name: 'Atualizando Variáveis',
                title: 'Atividade 3: Mudando o Valor na Mesma Caixa',
                subtitle: 'Empilhe pontos e bonus para ver o placar ser atualizado!',
                explanation: 'A palavra <em>Variável</em> vem de "variar" (mudar)! Você pode pegar os pontos atuais da caixa e somar mais um bônus: <code>pontos = pontos + bonus</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">pontos</code> (Iniciais)',
                labelB: 'Variável <code class="var-name-pill py-var">bonus</code> (Ganhos)',
                labelRes: '✨ Expressão: <code class="var-name-pill py-var">pontos</code> + <code class="var-name-pill py-var">bonus</code> =',
                defaultA: '100',
                defaultB: '50',
                presets: [
                    { label: '🎮 100 + 50 bonus', a: '100', b: '50' },
                    { label: '🏆 200 + 100 bonus', a: '200', b: '100' },
                    { label: '⭐ 50 + 25 bonus', a: '50', b: '25' }
                ],
                quiz: {
                    question: 'Se <code class="var-name-pill py-var">pontos</code> = 100 e <code class="var-name-pill py-var">bonus</code> = 50, qual será o novo valor de <code class="var-name-pill py-var">pontos</code>?',
                    options: [
                        '100 (continua igual).',
                        '150 (a variável atualiza somando 50 ao valor anterior).',
                        '50'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const pIniciais = typeof parsedA.value === 'number' ? parsedA.value : 100;
                    const pBonus = typeof parsedB.value === 'number' ? parsedB.value : 50;
                    const pFinal = pIniciais + pBonus;
                    return {
                        code: `<span class="py-comment"># Atualizando a variável de pontos</span>\n<span class="py-var">pontos</span> = <span class="py-number">${pIniciais}</span>\n<span class="py-var">bonus</span> = <span class="py-number">${pBonus}</span>\n<span class="py-var">pontos</span> = <span class="py-var">pontos</span> <span class="py-op">+</span> <span class="py-var">bonus</span>\n<span class="py-func">print</span>(<span class="py-string">"Pontuação final:"</span>, <span class="py-var">pontos</span>)`,
                        result: pFinal,
                        type: 'int',
                        varName: 'pontos',
                        printPrefix: 'Pontuação final:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">pontos</code> + <code class="var-name-pill py-var">bonus</code> =`
                    };
                }
            },
            {
                id: 4,
                operator: '+',
                layout: 'vertical',
                name: 'Frases Inteligentes',
                title: 'Atividade 4: Criando Mensagens com Variáveis',
                subtitle: 'Empilhe inicio e nome_dev para ver a mensagem ser montada!',
                explanation: 'Você pode guardar palavras fixas (ex: <code>"Olá, "</code>) e juntar com a variável do nome do aluno (ex: <code>nome_dev = "Mariana"</code>) para exibir uma saudação especial!',
                labelA: 'Variável <code class="var-name-pill py-var">inicio</code> (Texto Fixo)',
                labelB: 'Variável <code class="var-name-pill py-var">nome_dev</code> (Nome Guardado)',
                labelRes: '✨ Expressão: <code class="var-name-pill py-var">inicio</code> + <code class="var-name-pill py-var">nome_dev</code> =',
                defaultA: '"Bem-vindo(a), "',
                defaultB: '"Mariana"',
                presets: [
                    { label: '👋 Olá, + Mariana', a: '"Olá, "', b: '"Mariana"' },
                    { label: '🚀 Mestre + Lucas', a: '"Super Dev "', b: '"Lucas"' },
                    { label: '👑 Campeão + Python', a: '"Parabéns, "', b: '"PyBot"' }
                ],
                quiz: {
                    question: 'Como juntamos a variável <code class="var-name-pill py-var">inicio</code> = "Olá, " com a variável <code class="var-name-pill py-var">nome_dev</code> = "Mariana" para formar uma frase completa?',
                    options: [
                        '<code class="var-name-pill py-var">inicio</code> + <code class="var-name-pill py-var">nome_dev</code>',
                        '<code class="var-name-pill py-var">inicio</code> - <code class="var-name-pill py-var">nome_dev</code>',
                        '<code class="var-name-pill py-var">inicio</code> * <code class="var-name-pill py-var">nome_dev</code>'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const txtA = String(parsedA.value);
                    const txtB = String(parsedB.value);
                    const msgCompleta = txtA + txtB;
                    return {
                        code: `<span class="py-comment"># Criando mensagem personalizada</span>\n<span class="py-var">inicio</span> = <span class="py-string">"${txtA}"</span>\n<span class="py-var">nome_dev</span> = <span class="py-string">"${txtB}"</span>\n<span class="py-var">mensagem</span> = <span class="py-var">inicio</span> <span class="py-op">+</span> <span class="py-var">nome_dev</span>\n<span class="py-func">print</span>(<span class="py-string">"Mensagem gerada:"</span>, <span class="py-var">mensagem</span>)`,
                        result: msgCompleta,
                        type: 'str',
                        varName: 'mensagem',
                        printPrefix: 'Mensagem gerada:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">inicio</code> + <code class="var-name-pill py-var">nome_dev</code> =`
                    };
                }
            },
            {
                id: 5,
                operator: 'type()',
                layout: 'vertical',
                name: 'O Detetive de Tipos',
                title: 'Atividade 5: Descobrindo o Tipo de Dado (type())',
                subtitle: 'Ensine o Python a revelar o tipo de cada caixinha!',
                explanation: 'A função <code>type()</code> é o detetive do Python! Ela descobre se a caixa guarda Texto (<code>str</code>), Número Inteiro (<code>int</code>), Número Decimal (<code>float</code>) ou Lógico (<code>bool</code>)!',
                labelA: 'Variável <code class="var-name-pill py-var">caixa</code> (Nome)',
                labelB: 'Variável <code class="var-name-pill py-var">valor</code> (Conteúdo)',
                labelRes: '✨ Expressão: <code class="var-name-pill py-var">type(caixa)</code> =',
                defaultA: 'segredo',
                defaultB: '9.99',
                presets: [
                    { label: '🔢 Decimal: 9.99', a: 'preco', b: '9.99' },
                    { label: '🔤 Texto: "Python"', a: 'curso', b: '"Python"' },
                    { label: '⚡ Inteiro: 42', a: 'resposta', b: '42' },
                    { label: '✅ Booleano: True', a: 'ativo', b: 'True' }
                ],
                quiz: {
                    question: 'O que a função detetive <code class="var-name-pill py-var">type(9.99)</code> responde sobre o número decimal 9.99?',
                    options: [
                        '<code class="var-name-pill py-var">str</code> (Texto)',
                        '<code class="var-name-pill py-var">int</code> (Número Inteiro)',
                        '<code class="var-name-pill py-var">float</code> (Número Decimal)'
                    ],
                    correctIndex: 2
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const varName = rawA.replace(/\s+/g, '_') || 'segredo';
                    let rawVal = rawB.trim();
                    let detected = parsedB.rawType;

                    if (rawVal === 'True' || rawVal === 'False') {
                        detected = 'bool';
                    }

                    const displayVal = detected === 'str' ? `"${parsedB.value}"` : rawVal;
                    const typeTextHTML = `&lt;class '${detected}'&gt;`;

                    return {
                        code: `<span class="py-comment"># Descobrindo o tipo com type()</span>\n<span class="py-var">${varName}</span> = <span class="${detected === 'str' ? 'py-string' : 'py-number'}">${displayVal}</span>\n<span class="py-var">tipo_encontrado</span> = <span class="py-func">type</span>(<span class="py-var">${varName}</span>)\n<span class="py-func">print</span>(<span class="py-string">"Tipo da caixa ${varName}:"</span>, <span class="py-var">tipo_encontrado</span>)`,
                        result: typeTextHTML,
                        type: detected,
                        customResultDisplay: typeTextHTML,
                        varName: 'tipo_encontrado',
                        printPrefix: `Tipo da caixa ${varName}:`,
                        resultFormulaHTML: `<code class="var-name-pill py-var">type(${varName})</code> =`
                    };
                }
            }
        ]
    },

    // --- AULA 3: OPERADORES DE COMPARAÇÃO ---
    3: {
        id: 3,
        title: 'Aula 3: Operadores de Comparação',
        filename: 'aula_3_comparacao.py',
        activities: [
            {
                id: 1,
                operator: '==',
                name: 'Igual a (==)',
                title: 'Atividade 1: Testando Igualdade (==)',
                subtitle: 'Verifique se dois valores são exatamente iguais!',
                explanation: 'Atenção, Dev! Um sinal de igual <code>=</code> serve para <strong>guardar um valor</strong>. Dois sinais de igual <code>==</code> servem para <strong>comparar</strong> se dois valores são idênticos! O Python responde <code>True</code> (Verdadeiro) ou <code>False</code> (Falso)!',
                labelA: 'Variável <code class="var-name-pill py-var">a</code>',
                labelB: 'Variável <code class="var-name-pill py-var">b</code>',
                labelRes: '✨ Teste: <code class="var-name-pill py-var">a</code> == <code class="var-name-pill py-var">b</code> =',
                defaultA: '10',
                defaultB: '10',
                presets: [
                    { label: '⚖️ 10 == 10 (True)', a: '10', b: '10' },
                    { label: '❌ 10 == 20 (False)', a: '10', b: '20' },
                    { label: '🔤 "py" == "py" (True)', a: '"py"', b: '"py"' }
                ],
                quiz: {
                    question: 'Qual é a diferença entre um sinal de igual <code>=</code> e dois sinais <code>==</code> em Python?',
                    options: [
                        '<code>=</code> serve para comparar valores e <code>==</code> para criar caixas.',
                        '<code>=</code> guarda um valor na variável e <code>==</code> compara se dois valores são iguais.',
                        'Os dois fazem exatamente a mesma coisa em Python.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const strA = parsedA.rawType === 'str' ? `"${parsedA.value}"` : parsedA.value;
                    const strB = parsedB.rawType === 'str' ? `"${parsedB.value}"` : parsedB.value;
                    const resBool = parsedA.value == parsedB.value;
                    const resStr = resBool ? 'True' : 'False';
                    return {
                        code: `<span class="py-comment"># Comparando se dois valores são iguais</span>\n<span class="py-var">a</span> = <span class="${parsedA.rawType === 'str' ? 'py-string' : 'py-number'}">${strA}</span>\n<span class="py-var">b</span> = <span class="${parsedB.rawType === 'str' ? 'py-string' : 'py-number'}">${strB}</span>\n<span class="py-var">resultado</span> = <span class="py-var">a</span> <span class="py-op">==</span> <span class="py-var">b</span>\n<span class="py-func">print</span>(<span class="py-string">"São iguais?"</span>, <span class="py-var">resultado</span>)`,
                        result: resStr,
                        type: 'bool',
                        varName: 'resultado',
                        printPrefix: 'São iguais?:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">a</code> == <code class="var-name-pill py-var">b</code> =`
                    };
                }
            },
            {
                id: 2,
                operator: '!=',
                name: 'Diferente de (!=)',
                title: 'Atividade 2: Testando se é Diferente (!=)',
                subtitle: 'Descubra se dois valores são diferentes um do outro!',
                explanation: 'O operador de ponto de exclamação e igual <code>!=</code> significa <strong>"é diferente de"</strong>. Se os dois valores forem <strong>diferentes</strong>, ele responde <code>True</code>. Se forem iguais, ele responde <code>False</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">a</code>',
                labelB: 'Variável <code class="var-name-pill py-var">b</code>',
                labelRes: '✨ Teste: <code class="var-name-pill py-var">a</code> != <code class="var-name-pill py-var">b</code> =',
                defaultA: '10',
                defaultB: '20',
                presets: [
                    { label: '⚡ 10 != 20 (True)', a: '10', b: '20' },
                    { label: '❌ 5 != 5 (False)', a: '5', b: '5' },
                    { label: '🔤 "gato" != "cão" (True)', a: '"gato"', b: '"cão"' }
                ],
                quiz: {
                    question: 'Qual é o resultado da comparação <code class="var-name-pill py-var">a</code> != <code class="var-name-pill py-var">b</code> quando <code class="var-name-pill py-var">a</code> = 10 e <code class="var-name-pill py-var">b</code> = 20?',
                    options: [
                        '<code class="var-name-pill py-var">False</code> (porque 10 é igual a 20).',
                        '<code class="var-name-pill py-var">True</code> (porque 10 é realmente diferente de 20).',
                        'Dá um erro de sintaxe.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const strA = parsedA.rawType === 'str' ? `"${parsedA.value}"` : parsedA.value;
                    const strB = parsedB.rawType === 'str' ? `"${parsedB.value}"` : parsedB.value;
                    const resBool = parsedA.value != parsedB.value;
                    const resStr = resBool ? 'True' : 'False';
                    return {
                        code: `<span class="py-comment"># Comparando se dois valores são diferentes</span>\n<span class="py-var">a</span> = <span class="${parsedA.rawType === 'str' ? 'py-string' : 'py-number'}">${strA}</span>\n<span class="py-var">b</span> = <span class="${parsedB.rawType === 'str' ? 'py-string' : 'py-number'}">${strB}</span>\n<span class="py-var">resultado</span> = <span class="py-var">a</span> <span class="py-op">!=</span> <span class="py-var">b</span>\n<span class="py-func">print</span>(<span class="py-string">"São diferentes?"</span>, <span class="py-var">resultado</span>)`,
                        result: resStr,
                        type: 'bool',
                        varName: 'resultado',
                        printPrefix: 'São diferentes?:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">a</code> != <code class="var-name-pill py-var">b</code> =`
                    };
                }
            },
            {
                id: 3,
                operator: '>',
                name: 'Maior que (>)',
                title: 'Atividade 3: Quem é o Maior? (>)',
                subtitle: 'Verifique se o primeiro número é estritamente maior que o segundo!',
                explanation: 'O operador <code>&gt;</code> (maior que) pergunta se o valor da esquerda é <strong>maior</strong> que o da direita. Exemplo: <code>150 &gt; 100</code> dá <code>True</code>, mas <code>50 &gt; 50</code> dá <code>False</code> (porque 50 não é maior que 50, é igual)!',
                labelA: 'Variável <code class="var-name-pill py-var">pontos</code>',
                labelB: 'Variável <code class="var-name-pill py-var">meta</code>',
                labelRes: '✨ Teste: <code class="var-name-pill py-var">pontos</code> > <code class="var-name-pill py-var">meta</code> =',
                defaultA: '150',
                defaultB: '100',
                presets: [
                    { label: '🏆 150 > 100 (True)', a: '150', b: '100' },
                    { label: '❌ 30 > 50 (False)', a: '30', b: '50' },
                    { label: '⚠️ 50 > 50 (False)', a: '50', b: '50' }
                ],
                quiz: {
                    question: 'O que o Python responde ao testar a expressão <code class="var-name-pill py-var">pontos</code> > <code class="var-name-pill py-var">meta</code> quando <code class="var-name-pill py-var">pontos</code> = 50 e <code class="var-name-pill py-var">meta</code> = 50?',
                    options: [
                        '<code class="var-name-pill py-var">True</code> (porque 50 é igual a 50).',
                        '<code class="var-name-pill py-var">False</code> (porque 50 não é estritamente MAIOR que 50).',
                        '<code class="var-name-pill py-var">50</code>'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const valA = typeof parsedA.value === 'number' ? parsedA.value : 150;
                    const valB = typeof parsedB.value === 'number' ? parsedB.value : 100;
                    const resBool = valA > valB;
                    const resStr = resBool ? 'True' : 'False';
                    return {
                        code: `<span class="py-comment"># Testando se é maior que</span>\n<span class="py-var">pontos</span> = <span class="py-number">${valA}</span>\n<span class="py-var">meta</span> = <span class="py-number">${valB}</span>\n<span class="py-var">superou_meta</span> = <span class="py-var">pontos</span> <span class="py-op">&gt;</span> <span class="py-var">meta</span>\n<span class="py-func">print</span>(<span class="py-string">"Superou a meta?"</span>, <span class="py-var">superou_meta</span>)`,
                        result: resStr,
                        type: 'bool',
                        varName: 'superou_meta',
                        printPrefix: 'Superou a meta?:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">pontos</code> &gt; <code class="var-name-pill py-var">meta</code> =`
                    };
                }
            },
            {
                id: 4,
                operator: '<',
                name: 'Menor que (<)',
                title: 'Atividade 4: Quem é o Menor? (<)',
                subtitle: 'Verifique se o primeiro número é menor que o segundo!',
                explanation: 'O operador <code>&lt;</code> (menor que) testa se o valor da esquerda é <strong>menor</strong> que o da direita. Exemplo: <code>idade = 12</code> e <code>limite = 18</code>. <code>12 &lt; 18</code> retorna <code>True</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">idade</code>',
                labelB: 'Variável <code class="var-name-pill py-var">limite</code>',
                labelRes: '✨ Teste: <code class="var-name-pill py-var">idade</code> < <code class="var-name-pill py-var">limite</code> =',
                defaultA: '12',
                defaultB: '18',
                presets: [
                    { label: '🧒 12 < 18 (True)', a: '12', b: '18' },
                    { label: '❌ 25 < 18 (False)', a: '25', b: '18' },
                    { label: '⚠️ 18 < 18 (False)', a: '18', b: '18' }
                ],
                quiz: {
                    question: 'Se <code class="var-name-pill py-var">idade</code> = 12 e <code class="var-name-pill py-var">limite</code> = 18, qual é o resultado da verificação <code class="var-name-pill py-var">idade</code> < <code class="var-name-pill py-var">limite</code>?',
                    options: [
                        '<code class="var-name-pill py-var">True</code> (12 é menor que 18).',
                        '<code class="var-name-pill py-var">False</code> (12 é maior que 18).',
                        '1218'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const valA = typeof parsedA.value === 'number' ? parsedA.value : 12;
                    const valB = typeof parsedB.value === 'number' ? parsedB.value : 18;
                    const resBool = valA < valB;
                    const resStr = resBool ? 'True' : 'False';
                    return {
                        code: `<span class="py-comment"># Testando se é menor que</span>\n<span class="py-var">idade</span> = <span class="py-number">${valA}</span>\n<span class="py-var">limite</span> = <span class="py-number">${valB}</span>\n<span class="py-var">eh_menor</span> = <span class="py-var">idade</span> <span class="py-op">&lt;</span> <span class="py-var">limite</span>\n<span class="py-func">print</span>(<span class="py-string">"É menor de idade?"</span>, <span class="py-var">eh_menor</span>)`,
                        result: resStr,
                        type: 'bool',
                        varName: 'eh_menor',
                        printPrefix: 'É menor de idade?:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">idade</code> &lt; <code class="var-name-pill py-var">limite</code> =`
                    };
                }
            },
            {
                id: 5,
                operator: '>=',
                name: 'Maior ou Igual (>= e <=)',
                title: 'Atividade 5: Maior ou Igual (>= e <=)',
                subtitle: 'Teste valores incluindo os empates e notas de aprovação!',
                explanation: 'Os operadores <code>&gt;=</code> (maior ou igual) e <code>&lt;=</code> (menor ou igual) aceitam <strong>empates</strong>! Exemplo: se a média de aprovação é 7.0, um aluno com nota 7.0 em <code>nota &gt;= 7.0</code> é aprovado (<code>True</code>)!',
                labelA: 'Variável <code class="var-name-pill py-var">nota</code>',
                labelB: 'Variável <code class="var-name-pill py-var">media</code>',
                labelRes: '✨ Teste: <code class="var-name-pill py-var">nota</code> >= <code class="var-name-pill py-var">media</code> =',
                defaultA: '7.0',
                defaultB: '7.0',
                presets: [
                    { label: '🎓 7.0 >= 7.0 (True - Empate)', a: '7.0', b: '7.0' },
                    { label: '⭐ 9.5 >= 7.0 (True - Maior)', a: '9.5', b: '7.0' },
                    { label: '❌ 5.5 >= 7.0 (False - Menor)', a: '5.5', b: '7.0' }
                ],
                quiz: {
                    question: 'Se a <code class="var-name-pill py-var">nota</code> do aluno for 7.0 e a <code class="var-name-pill py-var">media</code> de aprovação for 7.0, qual o resultado de <code class="var-name-pill py-var">nota</code> >= <code class="var-name-pill py-var">media</code>?',
                    options: [
                        '<code class="var-name-pill py-var">False</code> (porque 7.0 não é maior que 7.0).',
                        '<code class="var-name-pill py-var">True</code> (porque o operador >= aceita valores maiores OU IGUAIS).',
                        'Dá um erro de vírgula.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const valA = typeof parsedA.value === 'number' ? parsedA.value : 7.0;
                    const valB = typeof parsedB.value === 'number' ? parsedB.value : 7.0;
                    const resBool = valA >= valB;
                    const resStr = resBool ? 'True' : 'False';
                    return {
                        code: `<span class="py-comment"># Testando se é maior ou igual (>=)</span>\n<span class="py-var">nota</span> = <span class="py-number">${valA}</span>\n<span class="py-var">media</span> = <span class="py-number">${valB}</span>\n<span class="py-var">aprovado</span> = <span class="py-var">nota</span> <span class="py-op">&gt;=</span> <span class="py-var">media</span>\n<span class="py-func">print</span>(<span class="py-string">"Aluno Aprovado?"</span>, <span class="py-var">aprovado</span>)`,
                        result: resStr,
                        type: 'bool',
                        varName: 'aprovado',
                        printPrefix: 'Aluno Aprovado?:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">nota</code> &gt;= <code class="var-name-pill py-var">media</code> =`
                    };
                }
            }
        ]
    },

    // --- AULA 4: DECISÕES INTELIGENTES (IF / ELSE) ---
    4: {
        id: 4,
        title: 'Aula 4: Decisões Inteligentes (if / else)',
        filename: 'aula_4_decisoes.py',
        activities: [
            {
                id: 1,
                operator: 'if',
                layout: 'vertical',
                name: 'O Comando if (Se Sim)',
                title: 'Atividade 1: O Comando if (Se Sim)',
                subtitle: 'Ensine o Python a executar um comando apenas se a condição for verdadeira!',
                explanation: 'A palavra <code>if</code> em Python significa <strong>"se"</strong>. O Python testa a condição (ex: <code>idade &gt;= 10</code>). Se for <code>True</code>, ele entra na porta e roda o comando! Se for <code>False</code>, ele pula fora!',
                labelA: 'Variável <code class="var-name-pill py-var">idade</code>',
                labelB: 'Variável <code class="var-name-pill py-var">idade_minima</code>',
                labelRes: '✨ Decisão do Python:',
                defaultA: '12',
                defaultB: '10',
                presets: [
                    { label: '🎢 12 >= 10 (Entrou no if)', a: '12', b: '10' },
                    { label: '🛑 8 >= 10 (Pulou o if)', a: '8', b: '10' },
                    { label: '🎯 10 >= 10 (Exato)', a: '10', b: '10' }
                ],
                quiz: {
                    question: 'O que o Python faz ao executar um comando <code class="var-name-pill py-var">if</code> quando a condição é Falsa (ex: <code class="var-name-pill py-var">idade</code> = 8 e <code class="var-name-pill py-var">idade_minima</code> = 10)?',
                    options: [
                        'Dá um erro grave no sistema.',
                        'Não executa o bloco interno do <code class="var-name-pill py-var">if</code> (pula a instrução).',
                        'Executa o comando ao contrário.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const valA = typeof parsedA.value === 'number' ? parsedA.value : 12;
                    const valB = typeof parsedB.value === 'number' ? parsedB.value : 10;
                    const condition = valA >= valB;
                    const msg = condition ? "Pode andar na Montanha-Russa! 🎢" : "(Nenhuma mensagem impressa - condição Falsa)";
                    return {
                        code: `<span class="py-comment"># Decisão simples com if</span>\n<span class="py-var">idade</span> = <span class="py-number">${valA}</span>\n<span class="py-var">idade_minima</span> = <span class="py-number">${valB}</span>\n<span class="py-keyword">if</span> <span class="py-var">idade</span> <span class="py-op">&gt;=</span> <span class="py-var">idade_minima</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Pode andar na Montanha-Russa! 🎢"</span>)`,
                        result: msg,
                        type: 'bool',
                        varName: 'decisao',
                        printPrefix: 'Resultado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">idade</code> &gt;= <code class="var-name-pill py-var">idade_minima</code> (${condition ? 'True' : 'False'})`
                    };
                }
            },
            {
                id: 2,
                operator: 'if/else',
                layout: 'vertical',
                name: 'Escolha Dupla (if/else)',
                title: 'Atividade 2: Escolha Dupla (if / else)',
                subtitle: 'Se der certo faz uma coisa, senão (else) faz outra!',
                explanation: 'A palavra <code>else</code> significa <strong>"senão"</strong>! O Python tenta o <code>if</code>. Se a condição for <code>True</code>, ele roda a primeira mensagem. Se for <code>False</code>, ele roda a mensagem do <code>else</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">pontos</code>',
                labelB: 'Variável <code class="var-name-pill py-var">meta</code>',
                labelRes: '✨ Decisão do Python:',
                defaultA: '150',
                defaultB: '100',
                presets: [
                    { label: '🏆 150 pontos (Ganhou!)', a: '150', b: '100' },
                    { label: '🔄 50 pontos (Caiu no else)', a: '50', b: '100' },
                    { label: '⭐ 100 pontos (Exato!)', a: '100', b: '100' }
                ],
                quiz: {
                    question: 'Quando é que o bloco dentro do <code class="var-name-pill py-var">else:</code> é executado pelo Python?',
                    options: [
                        'Sempre, antes de testar o <code class="var-name-pill py-var">if</code>.',
                        'Apenas quando a condição do <code class="var-name-pill py-var">if</code> for Falsa (False).',
                        'Quando digitamos uma palavra com erro de digitação.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const valA = typeof parsedA.value === 'number' ? parsedA.value : 150;
                    const valB = typeof parsedB.value === 'number' ? parsedB.value : 100;
                    const condition = valA >= valB;
                    const msg = condition ? "Parabéns! Você passou de fase! 🏆" : "Que pena! Tente novamente! 🔄";
                    return {
                        code: `<span class="py-comment"># Decisão dupla com if e else</span>\n<span class="py-var">pontos</span> = <span class="py-number">${valA}</span>\n<span class="py-var">meta</span> = <span class="py-number">${valB}</span>\n<span class="py-keyword">if</span> <span class="py-var">pontos</span> <span class="py-op">&gt;=</span> <span class="py-var">meta</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Parabéns! Você passou de fase! 🏆"</span>)\n<span class="py-keyword">else</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Que pena! Tente novamente! 🔄"</span>)`,
                        result: msg,
                        type: 'bool',
                        varName: 'decisao',
                        printPrefix: 'Resultado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">pontos</code> &gt;= <code class="var-name-pill py-var">meta</code> (${condition ? 'if' : 'else'})`
                    };
                }
            },
            {
                id: 3,
                operator: '==',
                layout: 'vertical',
                name: 'Senha Secreta',
                title: 'Atividade 3: Verificando Senha Secreta',
                subtitle: 'Compare senhas de texto e libere o cofre!',
                explanation: 'Podemos usar <code>if senha_digitada == senha_correta:</code> para comparar textos! Lembre-se: o Python diferencia letras maiúsculas de minúsculas (é <em>case-sensitive</em>)!',
                labelA: 'Variável <code class="var-name-pill py-var">senha_digitada</code>',
                labelB: 'Variável <code class="var-name-pill py-var">senha_correta</code>',
                labelRes: '✨ Status do Cofre:',
                defaultA: '"super123"',
                defaultB: '"super123"',
                presets: [
                    { label: '🔓 "super123" (Liberado)', a: '"super123"', b: '"super123"' },
                    { label: '🔒 "12345" (Negado)', a: '"12345"', b: '"super123"' },
                    { label: '⚠️ "Super123" (Maiúscula)', a: '"Super123"', b: '"super123"' }
                ],
                quiz: {
                    question: 'O que acontece se o usuário digitar <code class="var-name-pill py-var">"Super123"</code> (com S maiúsculo) quando a <code class="var-name-pill py-var">senha_correta</code> é <code class="var-name-pill py-var">"super123"</code>?',
                    options: [
                        'O Python aceita do mesmo jeito.',
                        'Cai no <code class="var-name-pill py-var">else</code> ("Senha Incorreta!") porque o Python diferencia maiúsculas e minúsculas.',
                        'O computador desliga.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const txtA = String(parsedA.value);
                    const txtB = String(parsedB.value);
                    const isCorrect = txtA === txtB;
                    const msg = isCorrect ? "Acesso Liberado ao Cofre! 🔓" : "Senha Incorreta! Acesso Negado! 🔒";
                    return {
                        code: `<span class="py-comment"># Testando senha secreta</span>\n<span class="py-var">senha_digitada</span> = <span class="py-string">"${txtA}"</span>\n<span class="py-var">senha_correta</span> = <span class="py-string">"${txtB}"</span>\n<span class="py-keyword">if</span> <span class="py-var">senha_digitada</span> <span class="py-op">==</span> <span class="py-var">senha_correta</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Acesso Liberado ao Cofre! 🔓"</span>)\n<span class="py-keyword">else</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Senha Incorreta! Acesso Negado! 🔒"</span>)`,
                        result: msg,
                        type: 'str',
                        varName: 'status',
                        printPrefix: 'Resultado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">senha_digitada</code> == <code class="var-name-pill py-var">senha_correta</code> (${isCorrect ? 'Correta' : 'Incorreta'})`
                    };
                }
            },
            {
                id: 4,
                operator: '%',
                layout: 'vertical',
                name: 'Par ou Ímpar',
                title: 'Atividade 4: O Testador Par ou Ímpar (% 2 == 0)',
                subtitle: 'Combine o operador de resto % com if/else para classificar números!',
                explanation: 'Se o resto da divisão por 2 for zero (<code>numero % 2 == 0</code>), o número é <strong>PAR</strong>! Caso contrário (<code>else</code>), ele é <strong>ÍMPAR</strong>!',
                labelA: 'Variável <code class="var-name-pill py-var">numero</code>',
                labelB: 'Variável <code class="var-name-pill py-var">divisor</code>',
                labelRes: '✨ Classificação:',
                defaultA: '8',
                defaultB: '2',
                presets: [
                    { label: '⚖️ numero 8 (PAR)', a: '8', b: '2' },
                    { label: '⚡ numero 7 (ÍMPAR)', a: '7', b: '2' },
                    { label: '🔥 numero 100 (PAR)', a: '100', b: '2' }
                ],
                quiz: {
                    question: 'Qual é a fórmula em Python para testar se um <code class="var-name-pill py-var">numero</code> é PAR?',
                    options: [
                        '<code class="var-name-pill py-var">numero % 2 == 0</code> (resto da divisão por 2 é igual a zero).',
                        '<code class="var-name-pill py-var">numero / 2 == 1</code>',
                        '<code class="var-name-pill py-var">numero * 2 == 0</code>'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const num = typeof parsedA.value === 'number' ? parsedA.value : 8;
                    const isEven = num % 2 === 0;
                    const msg = isEven ? `O número ${num} é PAR! ⚖️` : `O número ${num} é ÍMPAR! ⚡`;
                    return {
                        code: `<span class="py-comment"># Descobrindo se o número é Par ou Ímpar</span>\n<span class="py-var">numero</span> = <span class="py-number">${num}</span>\n<span class="py-keyword">if</span> <span class="py-var">numero</span> <span class="py-op">%</span> <span class="py-number">2</span> <span class="py-op">==</span> <span class="py-number">0</span>:\n    <span class="py-func">print</span>(<span class="py-string">"O número ${num} é PAR! ⚖️"</span>)\n<span class="py-keyword">else</span>:\n    <span class="py-func">print</span>(<span class="py-string">"O número ${num} é ÍMPAR! ⚡"</span>)`,
                        result: msg,
                        type: 'str',
                        varName: 'classificacao',
                        printPrefix: 'Resultado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">${num} % 2 == 0</code> (${isEven ? 'PAR' : 'ÍMPAR'})`
                    };
                }
            },
            {
                id: 5,
                operator: '>=',
                layout: 'vertical',
                name: 'Sistema de Notas',
                title: 'Atividade 5: Sistema de Notas e Aprovação',
                subtitle: 'Verifique se o aluno passou de ano ou foi para a recuperação!',
                explanation: 'Junte tudo o que aprendeu! Se a <code>nota &gt;= media</code>, exiba a mensagem de <strong>Aprovado</strong>! Caso contrário (<code>else</code>), avise para estudar para a recuperação!',
                labelA: 'Variável <code class="var-name-pill py-var">nota</code>',
                labelB: 'Variável <code class="var-name-pill py-var">media</code>',
                labelRes: '✨ Resultado do Boletim:',
                defaultA: '8.5',
                defaultB: '7.0',
                presets: [
                    { label: '🎓 nota 8.5 (Aprovado)', a: '8.5', b: '7.0' },
                    { label: '📚 nota 6.5 (Recuperação)', a: '6.5', b: '7.0' },
                    { label: '⭐ nota 7.0 (Aprovado no limite)', a: '7.0', b: '7.0' }
                ],
                quiz: {
                    question: 'Se um aluno tirou nota <code class="var-name-pill py-var">6.9</code> e a média de aprovação é <code class="var-name-pill py-var">7.0</code>, qual mensagem o Python vai exibir?',
                    options: [
                        '<code class="var-name-pill py-var">"Parabéns, você foi Aprovado! 🎓"</code>',
                        '<code class="var-name-pill py-var">"Estude mais para a recuperação! 📚"</code> (caiu no else)',
                        'Nenhuma mensagem.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const grade = typeof parsedA.value === 'number' ? parsedA.value : 8.5;
                    const passing = typeof parsedB.value === 'number' ? parsedB.value : 7.0;
                    const isApproved = grade >= passing;
                    const msg = isApproved ? "Parabéns, você foi Aprovado! 🎓" : "Estude mais para a recuperação! 📚";
                    return {
                        code: `<span class="py-comment"># Sistema de boletim com if e else</span>\n<span class="py-var">nota</span> = <span class="py-number">${grade}</span>\n<span class="py-var">media</span> = <span class="py-number">${passing}</span>\n<span class="py-keyword">if</span> <span class="py-var">nota</span> <span class="py-op">&gt;=</span> <span class="py-var">media</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Parabéns, você foi Aprovado! 🎓"</span>)\n<span class="py-keyword">else</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Estude mais para a recuperação! 📚"</span>)`,
                        result: msg,
                        type: 'str',
                        varName: 'boletim',
                        printPrefix: 'Resultado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">nota</code> &gt;= <code class="var-name-pill py-var">media</code> (${isApproved ? 'Aprovado' : 'Recuperação'})`
                    };
                }
            }
        ]
    },

    // --- AULA 5: LISTAS E COLEÇÕES MÁGICAS ---
    5: {
        id: 5,
        title: 'Aula 5: Listas e Coleções Mágicas',
        filename: 'aula_5_listas.py',
        activities: [
            {
                id: 1,
                operator: '[]',
                layout: 'vertical',
                name: 'Criando Listas e Índices',
                title: 'Atividade 1: Criando Listas [] e Acessando Índices',
                subtitle: 'Guarde vários itens em uma lista e acesse cada um pelo número do índice!',
                explanation: 'Uma <strong>Lista</strong> guarda vários itens entre colchetes <code>[]</code> separados por vírgulas! O Python numera cada item começando do <strong>índice 0</strong> (primeiro item). O índice <code>-1</code> pega o <strong>último item</strong>!',
                labelA: 'Variável <code class="var-name-pill py-var">frutas</code> (Lista)',
                labelB: 'Variável <code class="var-name-pill py-var">posicao</code> (Índice)',
                labelRes: '✨ Elemento Escolhido:',
                defaultA: '["Maçã", "Banana", "Uva", "Morango"]',
                defaultB: '0',
                presets: [
                    { label: '🥇 frutas[0] (Primeiro)', a: '["Maçã", "Banana", "Uva", "Morango"]', b: '0' },
                    { label: '🥈 frutas[1] (Segundo)', a: '["Maçã", "Banana", "Uva", "Morango"]', b: '1' },
                    { label: '🏁 frutas[-1] (Último)', a: '["Maçã", "Banana", "Uva", "Morango"]', b: '-1' }
                ],
                quiz: {
                    question: 'Qual é o número de índice do PRIMEIRO elemento de qualquer lista em Python?',
                    options: [
                        'Índice 1',
                        'Índice 0 (as listas em Python sempre começam no zero)',
                        'Índice -1'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Maçã", "Banana", "Uva", "Morango"];
                    try {
                        if (rawA.trim().startsWith('[')) {
                            items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                        }
                    } catch(e) {}
                    
                    const idx = Number(rawB.trim()) || 0;
                    const selected = idx < 0 ? items[items.length + idx] : items[idx];
                    const safeRes = selected !== undefined ? `"${selected}"` : "IndexError: índice fora do alcance!";
                    
                    return {
                        code: `<span class="py-comment"># Criando lista e acessando por índice</span>\n<span class="py-var">frutas</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-var">item_escolhido</span> = <span class="py-var">frutas</span>[<span class="py-number">${idx}</span>]\n<span class="py-func">print</span>(<span class="py-string">"Item no índice ${idx}:"</span>, <span class="py-var">item_escolhido</span>)`,
                        result: safeRes,
                        type: 'str',
                        varName: 'item_escolhido',
                        printPrefix: `Item no índice ${idx}:`,
                        resultFormulaHTML: `<code class="var-name-pill py-var">frutas</code>[${idx}] =`
                    };
                }
            },
            {
                id: 2,
                operator: '[::]',
                layout: 'vertical',
                name: 'Fatiamento Mágico',
                title: 'Atividade 2: Fatiamento Mágico de Listas ([::])',
                subtitle: 'Corte pedaços da lista e inverte a ordem com [::-1]!',
                explanation: 'O operador de fatiamento <code>[inicio:fim:passo]</code> permite cortar pedaços da lista! Usar <code>[::2]</code> pega itens de 2 em 2. E usar <code>[::-1]</code> é o truque mágico para <strong>inverter a lista inteira</strong>!',
                labelA: 'Variável <code class="var-name-pill py-var">numeros</code> (Lista)',
                labelB: 'Fatiamento <code class="var-name-pill py-var">corte</code>',
                labelRes: '✨ Lista Fatiada:',
                defaultA: '[10, 20, 30, 40, 50, 60]',
                defaultB: '[::-1]',
                presets: [
                    { label: '🔄 Inverter com [::-1]', a: '[10, 20, 30, 40, 50, 60]', b: '[::-1]' },
                    { label: '⚡ De 2 em 2 com [::2]', a: '[10, 20, 30, 40, 50, 60]', b: '[::2]' },
                    { label: '✂️ Primeiros 3 com [:3]', a: '[10, 20, 30, 40, 50, 60]', b: '[:3]' }
                ],
                quiz: {
                    question: 'O que o comando de fatiamento <code class="var-name-pill py-var">numeros[::-1]</code> faz com uma lista em Python?',
                    options: [
                        'Apaga todos os números negativos.',
                        'Inverte a ordem de todos os elementos da lista.',
                        'Multiplica a lista por -1.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = [10, 20, 30, 40, 50, 60];
                    try {
                        if (rawA.trim().startsWith('[')) {
                            items = JSON.parse(rawA.trim());
                        }
                    } catch(e) {}

                    const sliceStr = rawB.trim() || '[::-1]';
                    let sliced = [...items];
                    if (sliceStr === '[::-1]') sliced.reverse();
                    else if (sliceStr === '[::2]') sliced = items.filter((_, i) => i % 2 === 0);
                    else if (sliceStr === '[:3]') sliced = items.slice(0, 3);

                    return {
                        code: `<span class="py-comment"># Fatiamento mágico de listas</span>\n<span class="py-var">numeros</span> = <span class="py-number">${JSON.stringify(items)}</span>\n<span class="py-var">sub_lista</span> = <span class="py-var">numeros</span><span class="py-op">${sliceStr}</span>\n<span class="py-func">print</span>(<span class="py-string">"Resultado do corte ${sliceStr}:"</span>, <span class="py-var">sub_lista</span>)`,
                        result: JSON.stringify(sliced),
                        type: 'list',
                        varName: 'sub_lista',
                        printPrefix: `Resultado do corte ${sliceStr}:`,
                        resultFormulaHTML: `<code class="var-name-pill py-var">numeros</code>${sliceStr} =`
                    };
                }
            },
            {
                id: 3,
                operator: '.append()',
                layout: 'vertical',
                name: 'Adicionando Elementos',
                title: 'Atividade 3: Adicionando com .append() e .insert()',
                subtitle: 'Coloque novos itens no final com .append() ou na posição desejada com .insert()!',
                explanation: 'O método <code>.append("item")</code> coloca um novo elemento <strong>no final da lista</strong>. Se quiser colocar em uma posição específica, use <code>.insert(posicao, "item")</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">jogos</code> (Lista Atual)',
                labelB: 'Comando <code class="var-name-pill py-var">adicionar</code>',
                labelRes: '✨ Lista Atualizada:',
                defaultA: '["Sonic", "Mario"]',
                defaultB: '.append("Roblox")',
                presets: [
                    { label: '➕ .append("Roblox") (No final)', a: '["Sonic", "Mario"]', b: '.append("Roblox")' },
                    { label: '📍 .insert(0, "Minecraft") (No início)', a: '["Sonic", "Mario"]', b: '.insert(0, "Minecraft")' },
                    { label: '🎯 .insert(1, "Zelda") (No meio)', a: '["Sonic", "Mario"]', b: '.insert(1, "Zelda")' }
                ],
                quiz: {
                    question: 'Qual é a diferença entre <code class="var-name-pill py-var">.append("Roblox")</code> e <code class="var-name-pill py-var">.insert(0, "Roblox")</code>?',
                    options: [
                        '<code class="var-name-pill py-var">.append()</code> substitui a lista e <code class="var-name-pill py-var">.insert()</code> apaga tudo.',
                        '<code class="var-name-pill py-var">.append()</code> insere no final e <code class="var-name-pill py-var">.insert(0)</code> insere no início (índice 0).',
                        'As duas funções fazem exatamente a mesma coisa.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Sonic", "Mario"];
                    try {
                        if (rawA.trim().startsWith('[')) items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                    } catch(e) {}

                    const updated = [...items];
                    let rawCmd = rawB.trim();
                    let formattedCmd = rawCmd;
                    if (formattedCmd && !formattedCmd.startsWith('.')) {
                        formattedCmd = '.' + formattedCmd;
                    }

                    if (rawCmd.toLowerCase().includes('insert')) {
                        const match = rawCmd.match(/insert\s*\(\s*(-?\d+)\s*,\s*["']?\s*([^"'\)]+?)\s*["']?\s*\)/i);
                        if (match) {
                            const idx = Number(match[1]);
                            const itemVal = match[2].trim();
                            updated.splice(idx, 0, itemVal);
                        } else {
                            updated.splice(0, 0, "Roblox");
                        }
                    } else {
                        const match = rawCmd.match(/append\s*\(\s*["']?\s*([^"'\)]+?)\s*["']?\s*\)/i);
                        if (match) {
                            const itemVal = match[1].trim();
                            updated.push(itemVal);
                        } else {
                            updated.push("Roblox");
                        }
                    }

                    return {
                        code: `<span class="py-comment"># Adicionando elemento na lista</span>\n<span class="py-var">jogos</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-var">jogos</span><span class="py-op">${formattedCmd}</span>\n<span class="py-func">print</span>(<span class="py-string">"Lista atualizada:"</span>, <span class="py-var">jogos</span>)`,
                        result: JSON.stringify(updated),
                        type: 'list',
                        varName: 'jogos',
                        printPrefix: 'Lista atualizada:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">jogos</code>${formattedCmd} =`
                    };
                }
            },
            {
                id: 4,
                operator: '.remove()',
                layout: 'vertical',
                name: 'Removendo Elementos',
                title: 'Atividade 4: Removendo com .remove() e .pop()',
                subtitle: 'Apague um item pelo nome com .remove() ou remova pelo índice com .pop()!',
                explanation: 'O método <code>.remove("nome")</code> busca e apaga o elemento pelo nome! Já o método <code>.pop(indice)</code> remove o item do índice escolhido e <strong>devolve ele de presente</strong>!',
                labelA: 'Variável <code class="var-name-pill py-var">mochila</code> (Lista)',
                labelB: 'Comando <code class="var-name-pill py-var">remover</code>',
                labelRes: '✨ Lista Atualizada:',
                defaultA: '["Livro", "Caneta", "Lixo"]',
                defaultB: '.remove("Lixo")',
                presets: [
                    { label: '🗑️ .remove("Lixo") (Pelo nome)', a: '["Livro", "Caneta", "Lixo"]', b: '.remove("Lixo")' },
                    { label: '📦 .pop(0) (Remove o primeiro)', a: '["Livro", "Caneta", "Lixo"]', b: '.pop(0)' },
                    { label: '🏁 .pop(-1) (Remove o último)', a: '["Livro", "Caneta", "Lixo"]', b: '.pop(-1)' }
                ],
                quiz: {
                    question: 'O que o comando <code class="var-name-pill py-var">mochila.pop(0)</code> faz quando executado em uma lista?',
                    options: [
                        'Apaga a lista inteira do computador.',
                        'Remove e retorna o elemento localizado no índice 0 (primeiro item).',
                        'Adiciona um item com o nome "pop".'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Livro", "Caneta", "Lixo"];
                    try {
                        if (rawA.trim().startsWith('[')) items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                    } catch(e) {}

                    const updated = [...items];
                    let rawCmd = rawB.trim();
                    let formattedCmd = rawCmd;
                    if (formattedCmd && !formattedCmd.startsWith('.')) {
                        formattedCmd = '.' + formattedCmd;
                    }

                    let poppedMsg = '';

                    if (rawCmd.toLowerCase().includes('pop')) {
                        const match = rawCmd.match(/pop\s*\(\s*(-?\d+)\s*\)/i);
                        const idx = match ? Number(match[1]) : 0;
                        if (updated.length > 0) {
                            const actualIdx = idx < 0 ? updated.length + idx : idx;
                            if (actualIdx >= 0 && actualIdx < updated.length) {
                                const removed = updated.splice(actualIdx, 1)[0];
                                poppedMsg = ` (Item tirado: "${removed}")`;
                            }
                        }
                    } else {
                        const match = rawCmd.match(/remove\s*\(\s*["']?\s*([^"'\)]+?)\s*["']?\s*\)/i);
                        const targetVal = match ? match[1].trim() : "Lixo";
                        const idx = updated.indexOf(targetVal);
                        if (idx !== -1) {
                            updated.splice(idx, 1);
                        }
                    }

                    return {
                        code: `<span class="py-comment"># Removendo elemento da lista</span>\n<span class="py-var">mochila</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-var">mochila</span><span class="py-op">${formattedCmd}</span>\n<span class="py-func">print</span>(<span class="py-string">"Mochila atualizada:"</span>, <span class="py-var">mochila</span>)`,
                        result: JSON.stringify(updated) + poppedMsg,
                        type: 'list',
                        varName: 'mochila',
                        printPrefix: 'Mochila atualizada:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">mochila</code>${formattedCmd} =`
                    };
                }
            },
            {
                id: 5,
                operator: 'in',
                layout: 'vertical',
                name: 'Buscando com in',
                title: 'Atividade 5: Buscando Elementos na Lista com in',
                subtitle: 'Descubra se um item existe dentro da lista usando o operador in!',
                explanation: 'O operador <code>in</code> (em / dentro de) faz uma busca rápida na lista! Fazer <code>"Espada" in inventario</code> responde <code>True</code> se o item existir, ou <code>False</code> se não existir!',
                labelA: 'Variável <code class="var-name-pill py-var">inventario</code> (Lista)',
                labelB: 'Item Procurado <code class="var-name-pill py-var">item</code>',
                labelRes: '✨ Resultado da Busca:',
                defaultA: '["Espada", "Escudo", "Poção"]',
                defaultB: '"Espada"',
                presets: [
                    { label: '⚔️ "Espada" in inventario (Existe)', a: '["Espada", "Escudo", "Poção"]', b: '"Espada"' },
                    { label: '🧪 "Poção" in inventario (Existe)', a: '["Espada", "Escudo", "Poção"]', b: '"Poção"' },
                    { label: '🔍 "Arco" in inventario (Não existe)', a: '["Espada", "Escudo", "Poção"]', b: '"Arco"' }
                ],
                quiz: {
                    question: 'Dada a lista <code class="var-name-pill py-var">inventario</code> = ["Espada", "Escudo", "Poção"], qual é o resultado da expressão <code class="var-name-pill py-var">"Espada" in inventario</code>?',
                    options: [
                        '<code class="var-name-pill py-var">False</code>',
                        '<code class="var-name-pill py-var">True</code> (Verdadeiro, o item "Espada" está presente na lista <code class="var-name-pill py-var">inventario</code>)',
                        'Dá um erro de sintaxe.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Espada", "Escudo", "Poção"];
                    try {
                        if (rawA.trim().startsWith('[')) items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                    } catch(e) {}

                    const searchItem = String(parsedB.value);
                    const found = items.includes(searchItem);
                    const msg = found ? `Item "${searchItem}" encontrado no inventário! ⚔️` : `Item "${searchItem}" NÃO encontrado no inventário! 🔍`;

                    return {
                        code: `<span class="py-comment"># Buscando item com operador in</span>\n<span class="py-var">inventario</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-keyword">if</span> <span class="py-string">"${searchItem}"</span> <span class="py-keyword">in</span> <span class="py-var">inventario</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Item \\"${searchItem}\\" encontrado! ⚔️"</span>)\n<span class="py-keyword">else</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Item \\"${searchItem}\\" NÃO encontrado! 🔍"</span>)`,
                        result: msg,
                        type: 'bool',
                        varName: 'resultado_busca',
                        printPrefix: 'Resultado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">"${searchItem}"</code> in <code class="var-name-pill py-var">inventario</code> (${found ? 'True' : 'False'})`
                    };
                }
            }
        ]
    },

    // --- AULA 6: REPETIÇÕES MÁGICAS COM FOR ---
    6: {
        id: 6,
        title: 'Aula 6: Repetições Mágicas com for',
        filename: 'aula_6_repeticoes.py',
        activities: [
            {
                id: 1,
                operator: 'for in',
                layout: 'vertical',
                name: 'Repetindo em Listas',
                title: 'Atividade 1: Repetindo em Listas (for item in lista)',
                subtitle: 'Visite cada item de uma lista usando o laço de repetição for!',
                explanation: 'O laço <code>for</code> passeia por cada item da lista, um de cada vez! A variável temporária (ex: <code>fruta</code> ou <code>jogo</code>) guarda o valor do elemento atual a cada volta do laço!',
                labelA: 'Variável <code class="var-name-pill py-var">lista_itens</code> (Lista)',
                labelB: 'Variável Temporária <code class="var-name-pill py-var">item</code>',
                labelRes: '✨ Saída do Laço:',
                defaultA: '["Maçã", "Banana", "Uva"]',
                defaultB: 'fruta',
                presets: [
                    { label: '🍎 frutas = ["Maçã", "Banana", "Uva"]', a: '["Maçã", "Banana", "Uva"]', b: 'fruta' },
                    { label: '🎮 jogos = ["Sonic", "Mario", "Zelda"]', a: '["Sonic", "Mario", "Zelda"]', b: 'jogo' },
                    { label: '⭐ herois = ["Batman", "Spidey"]', a: '["Batman", "Spidey"]', b: 'heroi' }
                ],
                quiz: {
                    question: 'No laço <code class="var-name-pill py-var">for fruta in frutas:</code>, o que a variável temporária <code class="var-name-pill py-var">fruta</code> guarda a cada volta do laço?',
                    options: [
                        'O tamanho total da lista.',
                        'Guarda o valor do item atual da lista naquela repetição (ex: "Maçã", depois "Banana"...).',
                        'O número do telefone do Python.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Maçã", "Banana", "Uva"];
                    try {
                        if (rawA.trim().startsWith('[')) items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                    } catch(e) {}

                    const varItem = rawB.trim().replace(/\s+/g, '_') || 'item';
                    let listName = 'lista_itens';
                    if (varItem === 'fruta') listName = 'frutas';
                    else if (varItem === 'jogo') listName = 'jogos';
                    else if (varItem === 'heroi') listName = 'herois';
                    else listName = `${varItem}s`;

                    const lines = items.map(it => `Item: ${it}`).join(' | ');

                    return {
                        code: `<span class="py-comment"># Iterando sobre uma lista com for</span>\n<span class="py-var">${listName}</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-keyword">for</span> <span class="py-var">${varItem}</span> <span class="py-keyword">in</span> <span class="py-var">${listName}</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Item:"</span>, <span class="py-var">${varItem}</span>)`,
                        result: lines,
                        type: 'str',
                        varName: 'saida_loop',
                        printPrefix: 'Resultados do for:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">for ${varItem} in ${listName}</code>:`
                    };
                }
            },
            {
                id: 2,
                operator: 'range()',
                layout: 'vertical',
                name: 'Contando com range() e i',
                title: 'Atividade 2: Contando com range() e o Contador i',
                subtitle: 'Gere sequências de contagem com a função range(n)!',
                explanation: 'A função <code>range(5)</code> gera a sequência de 5 números começando no <code>0</code> e indo até o <code>4</code>! O contador <code>i</code> guarda o número de cada volta!',
                labelA: 'Limite <code class="var-name-pill py-var">limite_range</code>',
                labelB: 'Nome do Contador <code class="var-name-pill py-var">contador</code>',
                labelRes: '✨ Sequência Gerada:',
                defaultA: '5',
                defaultB: 'i',
                presets: [
                    { label: '🔢 range(5) (De 0 a 4)', a: '5', b: 'i' },
                    { label: '🚀 range(3) (De 0 a 2)', a: '3', b: 'i' },
                    { label: '💯 range(10) (De 0 a 9)', a: '10', b: 'i' }
                ],
                quiz: {
                    question: 'Quais números são exibidos pelo Python no laço <code class="var-name-pill py-var">for i in range(5):</code>?',
                    options: [
                        '1, 2, 3, 4, 5',
                        '0, 1, 2, 3, 4 (começa no 0 e vai até N - 1)',
                        '5, 5, 5, 5, 5'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const limit = typeof parsedA.value === 'number' ? parsedA.value : 5;
                    const varCounter = rawB.trim() || 'i';
                    const nums = Array.from({length: Math.max(0, limit)}, (_, k) => k);

                    return {
                        code: `<span class="py-comment"># Sequência numérica com range()</span>\n<span class="py-keyword">for</span> <span class="py-var">${varCounter}</span> <span class="py-keyword">in</span> <span class="py-func">range</span>(<span class="py-number">${limit}</span>):\n    <span class="py-func">print</span>(<span class="py-string">"Contagem do robô:"</span>, <span class="py-var">${varCounter}</span>)`,
                        result: nums.join(', '),
                        type: 'int',
                        varName: 'sequencia',
                        printPrefix: 'Contagem do robô:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">range(${limit})</code> =`
                    };
                }
            },
            {
                id: 3,
                operator: 'len()',
                layout: 'vertical',
                name: 'Medindo com len()',
                title: 'Atividade 3: O Detetive de Tamanho (len())',
                subtitle: 'Descubra a quantidade exata de itens em qualquer lista!',
                explanation: 'A função <code>len()</code> (abreviação de <em>length</em>, tamanho) conta quantos itens existem dentro de uma lista! Exemplo: <code>len(["Sonic", "Mario", "Roblox"])</code> responde <code>3</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">jogos</code> (Lista)',
                labelB: 'Comando <code class="var-name-pill py-var">funcao</code>',
                labelRes: '✨ Tamanho Total:',
                defaultA: '["Sonic", "Mario", "Roblox"]',
                defaultB: 'len(jogos)',
                presets: [
                    { label: '🎮 len(["Sonic", "Mario", "Roblox"]) = 3', a: '["Sonic", "Mario", "Roblox"]', b: 'len(jogos)' },
                    { label: '🍕 len(["Pizza", "Refri"]) = 2', a: '["Pizza", "Refri"]', b: 'len(lanches)' },
                    { label: '⭐ len(["A", "B", "C", "D", "E"]) = 5', a: '["A", "B", "C", "D", "E"]', b: 'len(letras)' }
                ],
                quiz: {
                    question: 'O que a função <code class="var-name-pill py-var">len(jogos)</code> retorna para a lista <code class="var-name-pill py-var">jogos</code> = ["Sonic", "Mario", "Roblox"]?',
                    options: [
                        '"Sonic"',
                        '3 (o número total de itens da lista)',
                        '0'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Sonic", "Mario", "Roblox"];
                    try {
                        if (rawA.trim().startsWith('[')) items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                    } catch(e) {}

                    const length = items.length;

                    return {
                        code: `<span class="py-comment"># Medindo tamanho com len()</span>\n<span class="py-var">jogos</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-var">tamanho</span> = <span class="py-func">len</span>(<span class="py-var">jogos</span>)\n<span class="py-func">print</span>(<span class="py-string">"Quantidade total de itens:"</span>, <span class="py-var">tamanho</span>)`,
                        result: length,
                        type: 'int',
                        varName: 'tamanho',
                        printPrefix: 'Quantidade total de itens:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">len(jogos)</code> =`
                    };
                }
            },
            {
                id: 4,
                operator: 'range(len())',
                layout: 'vertical',
                name: 'Índices com range(len())',
                title: 'Atividade 4: Combinando range() e len()',
                subtitle: 'Use o tamanho da lista para gerar índices numéricos e visitar cada elemento!',
                explanation: 'Combinar <code>range(len(jogos))</code> é um superpoder do Python! O <code>len(jogos)</code> mede quantos itens existem (ex: 3) e o <code>range(3)</code> gera os números de índice <code>0, 1, 2</code> para acessar <code>jogos[i]</code>!',
                labelA: 'Variável <code class="var-name-pill py-var">jogos</code> (Lista)',
                labelB: 'Contador <code class="var-name-pill py-var">i</code>',
                labelRes: '✨ Itens por Índice:',
                defaultA: '["Sonic", "Mario", "Roblox"]',
                defaultB: 'i',
                presets: [
                    { label: '🎮 range(len(jogos)) (3 itens)', a: '["Sonic", "Mario", "Roblox"]', b: 'i' },
                    { label: '🍕 range(len(lanches)) (2 itens)', a: '["Pizza", "Refri"]', b: 'i' },
                    { label: '⭐ range(len(letras)) (4 itens)', a: '["A", "B", "C", "D"]', b: 'i' }
                ],
                quiz: {
                    question: 'Se a lista <code class="var-name-pill py-var">jogos</code> tem 3 elementos, quais números de índice o laço <code class="var-name-pill py-var">for i in range(len(jogos)):</code> vai gerar?',
                    options: [
                        '1, 2, 3',
                        '0, 1, 2 (as posições exatas dos elementos na lista)',
                        '3, 3, 3'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Sonic", "Mario", "Roblox"];
                    try {
                        if (rawA.trim().startsWith('[')) items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                    } catch(e) {}

                    const varCounter = rawB.trim() || 'i';
                    const length = items.length;
                    const itemsText = items.map((it, idx) => `[${idx}]: ${it}`).join(' | ');

                    return {
                        code: `<span class="py-comment"># Percorrendo índices com range(len())</span>\n<span class="py-var">jogos</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-keyword">for</span> <span class="py-var">${varCounter}</span> <span class="py-keyword">in</span> <span class="py-func">range</span>(<span class="py-func">len</span>(<span class="py-var">jogos</span>)):\n    <span class="py-func">print</span>(<span class="py-string">"Jogo no índice"</span>, <span class="py-var">${varCounter}</span>, <span class="py-string">":"</span>, <span class="py-var">jogos</span>[<span class="py-var">${varCounter}</span>])`,
                        result: itemsText,
                        type: 'str',
                        varName: 'item_no_indice',
                        printPrefix: 'Itens por índice:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">range(len(jogos))</code> =`
                    };
                }
            },
            {
                id: 5,
                operator: '+=',
                layout: 'vertical',
                name: 'Somando Tudo com +=',
                title: 'Atividade 5: Somando Tudo com += dentro do for',
                subtitle: 'Acumule moedas, pontos e totais a cada volta da repetição!',
                explanation: 'O operador <code>+=</code> soma o valor atual ao acumulador anterior! No laço <code>for m in moedas: total += m</code>, ele vai somando cada moeda no total!',
                labelA: 'Variável <code class="var-name-pill py-var">moedas</code> (Lista de Números)',
                labelB: 'Acumulador <code class="var-name-pill py-var">total</code> (Inicial)',
                labelRes: '✨ Soma Acumulada (+=):',
                defaultA: '[10, 20, 30]',
                defaultB: '0',
                presets: [
                    { label: '💰 [10, 20, 30] (Total = 60)', a: '[10, 20, 30]', b: '0' },
                    { label: '⭐ [50, 50, 100] (Total = 200)', a: '[50, 50, 100]', b: '0' },
                    { label: '🎯 [5, 10, 15, 20] (Total = 50)', a: '[5, 10, 15, 20]', b: '0' }
                ],
                quiz: {
                    question: 'O que o comando <code class="var-name-pill py-var">total += m</code> faz a cada repetição do laço <code class="var-name-pill py-var">for</code>?',
                    options: [
                        'Subtrai a moeda do total.',
                        'Soma o valor da moeda m ao valor acumulado anteriormente na variável total.',
                        'Multiplica o total por zero.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let nums = [10, 20, 30];
                    try {
                        if (rawA.trim().startsWith('[')) nums = JSON.parse(rawA.trim());
                    } catch(e) {}

                    const initVal = Number(rawB.trim()) || 0;
                    const sum = nums.reduce((acc, curr) => acc + Number(curr), initVal);

                    return {
                        code: `<span class="py-comment"># Somando valores com += no for</span>\n<span class="py-var">moedas</span> = <span class="py-number">${JSON.stringify(nums)}</span>\n<span class="py-var">total</span> = <span class="py-number">${initVal}</span>\n<span class="py-keyword">for</span> <span class="py-var">m</span> <span class="py-keyword">in</span> <span class="py-var">moedas</span>:\n    <span class="py-var">total</span> <span class="py-op">+=</span> <span class="py-var">m</span>\n<span class="py-func">print</span>(<span class="py-string">"Total acumulado de moedas:"</span>, <span class="py-var">total</span>)`,
                        result: sum,
                        type: 'int',
                        varName: 'total',
                        printPrefix: 'Total acumulado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">total</code> += <code class="var-name-pill py-var">m</code> =`
                    };
                }
            },
            {
                id: 6,
                operator: 'for + +=',
                layout: 'vertical',
                name: 'Tabuada Automática',
                title: 'Atividade 6: Tabuada Automática com for, range() e +=',
                subtitle: 'Gere qualquer tabuada de 1 a 10 e acumule a soma total dos resultados!',
                explanation: 'Reúna seus poderes! Use <code>range(1, 11)</code> para contar de 1 a 10 e acumule os resultados com <code>soma_total += res</code>!',
                labelA: 'Número da Tabuada <code class="var-name-pill py-var">numero</code>',
                labelB: 'Alcance <code class="var-name-pill py-var">intervalo</code>',
                labelRes: '✨ Tabuada & Soma Total:',
                defaultA: '5',
                defaultB: 'range(1, 11)',
                presets: [
                    { label: '🔢 Tabuada do 5 (Soma = 275)', a: '5', b: 'range(1, 11)' },
                    { label: '⚡ Tabuada do 7 (Soma = 385)', a: '7', b: 'range(1, 11)' },
                    { label: '🔥 Tabuada do 9 (Soma = 495)', a: '9', b: 'range(1, 11)' }
                ],
                quiz: {
                    question: 'Por que usamos <code class="var-name-pill py-var">range(1, 11)</code> para gerar uma tabuada de 1 a 10 em Python?',
                    options: [
                        'Porque o Python pula os números pares.',
                        'Porque o <code class="var-name-pill py-var">range(1, 11)</code> vai do número inicial (1) até um a menos que o limite final (11 - 1 = 10).',
                        'Porque o número 11 representa a soma total.'
                    ],
                    correctIndex: 1
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const num = typeof parsedA.value === 'number' ? parsedA.value : 5;
                    let sumTotal = 0;
                    const tabuadaLines = [];
                    for (let i = 1; i <= 10; i++) {
                        const res = num * i;
                        sumTotal += res;
                        tabuadaLines.push(`${num}x${i}=${res}`);
                    }

                    return {
                        code: `<span class="py-comment"># Tabuada automática com for, range e +=</span>\n<span class="py-var">numero</span> = <span class="py-number">${num}</span>\n<span class="py-var">soma_total</span> = <span class="py-number">0</span>\n<span class="py-func">print</span>(<span class="py-string">"Tabuada do ${num}:"</span>)\n<span class="py-keyword">for</span> <span class="py-var">i</span> <span class="py-keyword">in</span> <span class="py-func">range</span>(<span class="py-number">1</span>, <span class="py-number">11</span>):\n    <span class="py-var">res</span> = <span class="py-var">numero</span> <span class="py-op">*</span> <span class="py-var">i</span>\n    <span class="py-var">soma_total</span> <span class="py-op">+=</span> <span class="py-var">res</span>\n    <span class="py-func">print</span>(<span class="py-var">numero</span>, <span class="py-string">"x"</span>, <span class="py-var">i</span>, <span class="py-string">"="</span>, <span class="py-var">res</span>)\n<span class="py-func">print</span>(<span class="py-string">"Soma total:"</span>, <span class="py-var">soma_total</span>)`,
                        result: `${tabuadaLines.join(' | ')} (Soma Total = ${sumTotal})`,
                        type: 'int',
                        varName: 'soma_total',
                        printPrefix: `Tabuada do ${num}:`,
                        resultFormulaHTML: `<code class="var-name-pill py-var">soma_total</code> =`
                    };
                }
            }
        ]
    },

    // --- AULA 7: REPETIÇÕES COM WHILE (LAÇOS DE CONDIÇÃO) ---
    // --- AULA 7: REPETIÇÕES COM WHILE (LAÇOS DE CONDIÇÃO - FÁCIL & DIVERTIDO) ---
    7: {
        id: 7,
        title: 'Aula 7: Repetições com while',
        filename: 'aula_7_while.py',
        activities: [
            {
                id: 1,
                operator: 'while',
                layout: 'vertical',
                name: 'O Brinquedo do Parque',
                title: 'Atividade 1: O Comando while (Enquanto)',
                subtitle: 'Aprenda o comando enquanto com a metáfora das moedas do parque!',
                explanation: 'O laço <code>while</code> significa <strong>"enquanto"</strong>!<br><br>Pense como um brinquedo de parque de diversões: <strong>Enquanto você tiver moedas (moedas &gt; 0)</strong>, o brinquedo dá mais uma volta e gasta 1 moeda! Quando as moedas acabam (viram 0), a brincadeira termina!',
                labelA: 'Quantas moedas você tem? <code class="var-name-pill py-var">moedas</code>',
                labelB: 'Custo por volta <code class="var-name-pill py-var">custo</code>',
                labelRes: '✨ Resultado do Parque:',
                defaultA: '3',
                defaultB: '1',
                presets: [
                    { label: '🎡 3 moedas (Dá 3 voltas)', a: '3', b: '1' },
                    { label: '🎢 5 moedas (Dá 5 voltas)', a: '5', b: '1' },
                    { label: '🎠 2 moedas (Dá 2 voltas)', a: '2', b: '1' }
                ],
                quiz: {
                    question: 'O que o Python faz no laço <code class="var-name-pill py-var">while moedas &gt; 0:</code> quando as moedas chegam a 0 (zero)?',
                    options: [
                        'Encerra a brincadeira e sai do laço while (pois 0 > 0 é Falso).',
                        'Dá mais moedas de graça para o aluno.',
                        'Reinicia o computador.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const startCoins = typeof parsedA.value === 'number' ? parsedA.value : 3;
                    const cost = typeof parsedB.value === 'number' ? Math.max(1, parsedB.value) : 1;
                    let coins = startCoins;
                    let voltas = 0;
                    const log = [];
                    while (coins > 0) {
                        voltas++;
                        log.push(`[Volta ${voltas}]: Gastou ${cost} moeda(s). Restam: ${coins - cost}`);
                        coins -= cost;
                    }
                    log.push("Moedas acabaram! Fim da brincadeira! 🎡");

                    return {
                        code: `<span class="py-comment"># O brinquedo roda enquanto você tiver moedas</span>\n<span class="py-var">moedas</span> = <span class="py-number">${startCoins}</span>\n\n<span class="py-keyword">while</span> <span class="py-var">moedas</span> <span class="py-op">&gt;</span> <span class="py-number">0</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Andando no brinquedo! 🎡 Moedas:"</span>, <span class="py-var">moedas</span>)\n    <span class="py-var">moedas</span> = <span class="py-var">moedas</span> <span class="py-op">-</span> <span class="py-number">${cost}</span>\n\n<span class="py-func">print</span>(<span class="py-string">"Moedas acabaram! Fim da brincadeira! 🛑"</span>)`,
                        result: `${voltas} voltas no brinquedo`,
                        customResultDisplay: `${voltas} voltas no brinquedo`,
                        type: 'int',
                        varName: 'voltas_no_parque',
                        printPrefix: 'No parque de diversões:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">while moedas &gt; 0</code> =`
                    };
                }
            },
            {
                id: 2,
                operator: 'while <=',
                layout: 'vertical',
                name: 'Passos do Robô',
                title: 'Atividade 2: Contando Passos do Robô (while <=)',
                subtitle: 'Ensine o robô a dar passos de 1 até chegar ao limite escolhido!',
                explanation: 'Também podemos usar o <code>while</code> para <strong>contar até chegar num número limite</strong>!<br><br>O robô começa no <code>passo = 1</code>. Enquanto <code>passo &lt;= limite</code>, ele dá um passo e soma +1 ao contador!',
                labelA: 'Passo Inicial <code class="var-name-pill py-var">passo</code>',
                labelB: 'Limite de Passos <code class="var-name-pill py-var">limite</code>',
                labelRes: '✨ Caminho do Robô:',
                defaultA: '1',
                defaultB: '3',
                presets: [
                    { label: '🤖 Robô dá 3 passos', a: '1', b: '3' },
                    { label: '🚀 Robô dá 5 passos', a: '1', b: '5' },
                    { label: '🎯 Robô dá 2 passos', a: '1', b: '2' }
                ],
                quiz: {
                    question: 'No laço <code class="var-name-pill py-var">while passo &lt;= 3:</code>, o que acontece quando a variável <code class="var-name-pill py-var">passo</code> chega no valor 4?',
                    options: [
                        'A condição 4 <= 3 vira Falsa (False) e o robô para de andar.',
                        'O robô corre duas vezes mais rápido.',
                        'A variável passo volta para zero.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const startStep = typeof parsedA.value === 'number' ? parsedA.value : 1;
                    const maxSteps = typeof parsedB.value === 'number' ? parsedB.value : 3;
                    let current = startStep;
                    const log = [];
                    while (current <= maxSteps) {
                        log.push(`Passo ${current}`);
                        current++;
                    }
                    log.push("Robô chegou ao destino! 🚩");

                    return {
                        code: `<span class="py-comment"># Robô dando passos de 1 até o limite</span>\n<span class="py-var">passo</span> = <span class="py-number">${startStep}</span>\n<span class="py-var">limite</span> = <span class="py-number">${maxSteps}</span>\n\n<span class="py-keyword">while</span> <span class="py-var">passo</span> <span class="py-op">&lt;=</span> <span class="py-var">limite</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Robô deu o passo:"</span>, <span class="py-var">passo</span>)\n    <span class="py-var">passo</span> = <span class="py-var">passo</span> <span class="py-op">+</span> <span class="py-number">1</span>\n\n<span class="py-func">print</span>(<span class="py-string">"Robô chegou ao destino! 🚩"</span>)`,
                        result: `${log.filter(l => l.startsWith('Passo')).length} passos dados`,
                        customResultDisplay: `${log.filter(l => l.startsWith('Passo')).length} passos dados`,
                        type: 'int',
                        varName: 'passos_totais',
                        printPrefix: 'Passos do robô:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">while passo &lt;= ${maxSteps}</code> =`
                    };
                }
            },
            {
                id: 3,
                operator: 'while True',
                layout: 'vertical',
                name: 'O Repetidor Sem Fim',
                title: 'Atividade 3: O Laço Infinito (while True)',
                subtitle: 'Entenda como o True mantém o laço rodando sem parar!',
                explanation: 'A palavra <code>True</code> significa <strong>Verdadeiro</strong>. Por isso, <code>while True:</code> cria um laço que <strong>nunca para sozinho</strong>!<br><br>🎮 É exatamente assim que a tela de um jogo de videogame fica ligada esperando você apertar o botão!',
                labelA: 'Tela do Jogo <code class="var-name-pill py-var">status</code>',
                labelB: 'Simular voltas na aula <code class="var-name-pill py-var">voltas</code>',
                labelRes: '✨ Status da Tela:',
                defaultA: 'True',
                defaultB: '3',
                presets: [
                    { label: '🎮 Tela Ligada (Simular 3 voltas)', a: 'True', b: '3' },
                    { label: '🕹️ Arcade Ativo (Simular 5 voltas)', a: 'True', b: '5' }
                ],
                quiz: {
                    question: 'Por que a instrução <code class="var-name-pill py-var">while True:</code> é chamada de "laço infinito"?',
                    options: [
                        'Porque a palavra True é sempre verdadeira, então a condição nunca fica Falsa sozinha.',
                        'Porque só funciona em computadores novos.',
                        'Porque o Python multiplica o número por 100.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const maxVoltas = typeof parsedB.value === 'number' ? parsedB.value : 3;
                    const log = [];
                    for (let i = 1; i <= maxVoltas; i++) {
                        log.push(`Videogame ligado (Volta ${i})`);
                    }
                    log.push("Parada de segurança da aula! 🛑");

                    return {
                        code: `<span class="py-comment"># Laço infinito com while True</span>\n<span class="py-var">volta</span> = <span class="py-number">1</span>\n\n<span class="py-keyword">while</span> <span class="py-keyword">True</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Videogame ligado! Volta:"</span>, <span class="py-var">volta</span>)\n    <span class="py-var">volta</span> = <span class="py-var">volta</span> <span class="py-op">+</span> <span class="py-number">1</span>\n    <span class="py-keyword">if</span> <span class="py-var">volta</span> <span class="py-op">&gt;</span> <span class="py-number">${maxVoltas}</span>:\n        <span class="py-keyword">break</span> <span class="py-comment"># Parada para a aula</span>`,
                        result: `${maxVoltas} voltas contínuas`,
                        customResultDisplay: `${maxVoltas} voltas contínuas`,
                        type: 'str',
                        varName: 'status_videogame',
                        printPrefix: 'Tela do videogame:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">while True</code>:`
                    };
                }
            },
            {
                id: 4,
                operator: 'break',
                layout: 'vertical',
                name: 'O Botão Vermelho (break)',
                title: 'Atividade 4: O Botão Vermelho de Emergência (break)',
                subtitle: 'Use a palavra mágica break para desligar o laço na hora!',
                explanation: 'A palavra <code>break</code> é o <strong>botão vermelho de emergência</strong> do Python! 🛑<br><br>Quando o Python está dentro do <code>while True:</code> e lê a palavra <code>break</code>, ele <strong>para e sai do laço na mesma hora</strong>!',
                labelA: 'Sinal do Alarme <code class="var-name-pill py-var">alarme</code>',
                labelB: 'Ação do Aluno <code class="var-name-pill py-var">botao</code>',
                labelRes: '✨ Status do Alarme:',
                defaultA: '"tocando"',
                defaultB: '"apertar_break"',
                presets: [
                    { label: '🛑 Apertar botão break (Desliga o alarme)', a: '"tocando"', b: '"apertar_break"' },
                    { label: '🔔 Não apertar o botão (Continua tocando)', a: '"tocando"', b: '"esperar"' }
                ],
                quiz: {
                    question: 'O que o comando <code class="var-name-pill py-var">break</code> faz no Python quando é executado dentro de um laço <code class="var-name-pill py-var">while</code>?',
                    options: [
                        'Para o laço imediatamente e sai fora dele.',
                        'Faz o alarme tocar mais alto.',
                        'Soma 10 ao resultado.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const action = String(parsedB.value).toLowerCase();
                    const isBreak = action.includes('break') || action.includes('apertar');
                    const msg = isBreak 
                        ? "Apertou o botão break! Alarme desligado imediatamente! 🔕" 
                        : "Alarme continuando a tocar! Bibi! Bibi! 🚨";

                    return {
                        code: `<span class="py-comment"># Usando o botão vermelho break</span>\n<span class="py-var">botao</span> = <span class="py-string">"${parsedB.value}"</span>\n\n<span class="py-keyword">while</span> <span class="py-keyword">True</span>:\n    <span class="py-func">print</span>(<span class="py-string">"🚨 Alarme tocando! Bibi! Bibi!"</span>)\n    <span class="py-keyword">if</span> <span class="py-var">botao</span> <span class="py-op">==</span> <span class="py-string">"apertar_break"</span>:\n        <span class="py-func">print</span>(<span class="py-string">"Alarme desligado! 🔕"</span>)\n        <span class="py-keyword">break</span>\n    <span class="py-keyword">else</span>:\n        <span class="py-func">print</span>(<span class="py-string">"Esperando apertar o botão..."</span>)\n        <span class="py-keyword">break</span> <span class="py-comment"># Parada de simulação</span>`,
                        result: msg,
                        type: 'str',
                        varName: 'status_alarme',
                        printPrefix: 'Estado do Alarme:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">break acionado</code>:`
                    };
                }
            },
            {
                id: 5,
                operator: 'while + break',
                layout: 'vertical',
                name: 'O Cofre Secreto',
                title: 'Atividade 5: Desafio Final: O Cofre Secreto (while + break)',
                subtitle: 'Combine o while True com a senha certa para abrir o cofre com break!',
                explanation: 'Reúna seus superpoderes! 🔑<br><br>O cofre fica pedindo a senha num laço <code>while True:</code>. Quando a <code>senha_digitada == senha_secreta</code>, o Python executa o <code>break</code> e o cofre abre com sucesso!',
                labelA: 'Senha Digitada <code class="var-name-pill py-var">senha_digitada</code>',
                labelB: 'Senha Secreta <code class="var-name-pill py-var">senha_secreta</code>',
                labelRes: '✨ Acesso ao Cofre:',
                defaultA: '"1234"',
                defaultB: '"1234"',
                presets: [
                    { label: '🔓 Digitou "1234" (Senha Certa -> break!)', a: '"1234"', b: '"1234"' },
                    { label: '🔒 Digitou "0000" (Senha Errada -> Tenta de novo)', a: '"0000"', b: '"1234"' }
                ],
                quiz: {
                    question: 'No jogo do Cofre Secreto com <code class="var-name-pill py-var">while True:</code>, o que faz o cofre abrir e o jogo parar de pedir a senha?',
                    options: [
                        'O comando <code class="var-name-pill py-var">break</code> que é executado quando a senha digitada é igual à senha secreta.',
                        'Digitar qualquer palavra com a letra A.',
                        'Aguardar 5 minutos.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const txtA = String(parsedA.value);
                    const txtB = String(parsedB.value);
                    const isCorrect = txtA === txtB;
                    const msg = isCorrect 
                        ? "Senha Correta! Cofre Aberto com Sucesso! 🔓 (break executado)" 
                        : "Senha Incorreta! Tente novamente! 🔒";

                    return {
                        code: `<span class="py-comment"># Cofre Secreto com while e break</span>\n<span class="py-var">senha_digitada</span> = <span class="py-string">"${txtA}"</span>\n<span class="py-var">senha_secreta</span> = <span class="py-string">"${txtB}"</span>\n\n<span class="py-keyword">while</span> <span class="py-keyword">True</span>:\n    <span class="py-keyword">if</span> <span class="py-var">senha_digitada</span> <span class="py-op">==</span> <span class="py-var">senha_secreta</span>:\n        <span class="py-func">print</span>(<span class="py-string">"Senha Correta! Cofre Aberto! 🔓"</span>)\n        <span class="py-keyword">break</span>\n    <span class="py-keyword">else</span>:\n        <span class="py-func">print</span>(<span class="py-string">"Senha Errada! 🔒"</span>)\n        <span class="py-keyword">break</span> <span class="py-comment"># Parada para teste</span>`,
                        result: msg,
                        type: 'str',
                        varName: 'resultado_cofre',
                        printPrefix: 'Resultado no cofre:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">senha_digitada == senha_secreta</code>:`
                    };
                }
            }
        ]
    },

    // --- AULA 8: SORTEIOS MÁGICOS COM RANDOM ---
    8: {
        id: 8,
        title: 'Aula 8: Sorteios Mágicos com random',
        filename: 'aula_8_random.py',
        activities: [
            {
                id: 1,
                operator: 'import random',
                layout: 'vertical',
                name: 'Importando o Sorteador',
                title: 'Atividade 1: Importando a Caixinha Mágica (import random)',
                subtitle: 'Abra a caixinha de ferramentas mágicas do Python para fazer sorteios!',
                explanation: 'Em Python, o <code>random</code> é uma caixinha cheia de ferramentas de sorteio! Para usar os dados e roletas, precisamos primeiro chamar o comando <code>import random</code> no topo do código! 📦✨',
                labelA: 'Comando de importação <code class="var-name-pill py-var">biblioteca</code>',
                labelB: 'Função de Sorteio <code class="var-name-pill py-var">funcao</code>',
                labelRes: '✨ Caixinha Carregada:',
                defaultA: 'import random',
                defaultB: 'random.randint(1, 10)',
                presets: [
                    { label: '📦 import random (Ativar Caixinha Mágica)', a: 'import random', b: 'random.randint(1, 10)' },
                    { label: '🎲 import random (Sorteio de 1 a 6)', a: 'import random', b: 'random.randint(1, 6)' }
                ],
                quiz: {
                    question: 'Qual comando devemos escrever para abrir a caixinha de sorteios da biblioteca <code class="var-name-pill py-var">random</code> em Python?',
                    options: [
                        '<code class="var-name-pill py-var">import random</code>',
                        '<code class="var-name-pill py-var">import bola</code>',
                        '<code class="var-name-pill py-var">print(random)</code>'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const randomNum = Math.floor(Math.random() * 10) + 1;
                    return {
                        code: `<span class="py-comment"># Importando a caixinha de sorteios mágicos</span>\n<span class="py-keyword">import</span> <span class="py-var">random</span>\n\n<span class="py-comment"># Sorteando um número de 1 a 10</span>\n<span class="py-var">numero_sorteado</span> = <span class="py-func">random.randint</span>(<span class="py-number">1</span>, <span class="py-number">10</span>)\n<span class="py-func">print</span>(<span class="py-string">"Número sorteado na caixa mágica:"</span>, <span class="py-var">numero_sorteado</span>)`,
                        result: randomNum,
                        type: 'int',
                        varName: 'numero_sorteado',
                        printPrefix: 'Número sorteado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">import random</code> ->`
                    };
                }
            },
            {
                id: 2,
                operator: 'randint(min, max)',
                layout: 'vertical',
                name: 'Dado Virtual',
                title: 'Atividade 2: Jogando o Dado Virtual (random.randint)',
                subtitle: 'Sorteie um número inteiro aleatório entre o valor mínimo e o máximo!',
                explanation: 'A função <code>random.randint(min, max)</code> escolhe um número <strong>surpresa</strong>! Exemplo: <code>random.randint(1, 6)</code> joga um dado de 6 lados e sorteia um número de 1 a 6 a cada vez que o código roda! 🎲',
                labelA: 'Menor número <code class="var-name-pill py-var">minimo</code>',
                labelB: 'Maior número <code class="var-name-pill py-var">maximo</code>',
                labelRes: '✨ Dado de Tabuleiro:',
                defaultA: '1',
                defaultB: '6',
                presets: [
                    { label: '🎲 Dado comum (1 a 6)', a: '1', b: '6' },
                    { label: '🎯 Dado grande (1 a 20)', a: '1', b: '20' },
                    { label: '⭐ Dado de 10 lados (1 a 10)', a: '1', b: '10' }
                ],
                quiz: {
                    question: 'O que a função <code class="var-name-pill py-var">random.randint(1, 6)</code> faz quando o código é executado?',
                    options: [
                        'Sorteia um número inteiro surpresa entre 1 e 6.',
                        'Soma 1 com 6 e dá 7.',
                        'Apaga o número 6 do computador.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const minVal = typeof parsedA.value === 'number' ? parsedA.value : 1;
                    const maxVal = typeof parsedB.value === 'number' ? parsedB.value : 6;
                    const resultDice = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

                    return {
                        code: `<span class="py-comment"># Jogando o dado virtual</span>\n<span class="py-keyword">import</span> <span class="py-var">random</span>\n\n<span class="py-var">dado</span> = <span class="py-func">random.randint</span>(<span class="py-number">${minVal}</span>, <span class="py-number">${maxVal}</span>)\n<span class="py-func">print</span>(<span class="py-string">"Você jogou o dado e tirou:"</span>, <span class="py-var">dado</span>)`,
                        result: resultDice,
                        type: 'int',
                        varName: 'dado',
                        printPrefix: 'Dado tirado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">randint(${minVal}, ${maxVal})</code> =`
                    };
                }
            },
            {
                id: 3,
                operator: 'random.choice()',
                layout: 'vertical',
                name: 'Sacola de Prêmios',
                title: 'Atividade 3: Sorteando Itens da Lista (random.choice)',
                subtitle: 'Sorteie um item de surpresa direto de dentro de uma lista!',
                explanation: 'Com <code>random.choice(lista)</code>, o Python coloca a mão dentro da sacola de surpresas e escolhe <strong>um item da lista de forma aleatória</strong>! 🎁',
                labelA: 'Lista de Prêmios <code class="var-name-pill py-var">premios</code>',
                labelB: 'Comando <code class="var-name-pill py-var">sortear</code>',
                labelRes: '✨ Prêmio Sorteado:',
                defaultA: '["Carrinho 🚗", "Boneca 🧸", "Videogame 🎮"]',
                defaultB: 'random.choice(premios)',
                presets: [
                    { label: '🎁 Prêmios: ["Carrinho", "Boneca", "Videogame"]', a: '["Carrinho 🚗", "Boneca 🧸", "Videogame 🎮"]', b: 'random.choice(premios)' },
                    { label: '🍕 Lanches: ["Pizza 🍕", "Hambúrguer 🍔", "Sorvete 🍦"]', a: '["Pizza 🍕", "Hambúrguer 🍔", "Sorvete 🍦"]', b: 'random.choice(lanches)' }
                ],
                quiz: {
                    question: 'Qual função da biblioteca <code class="var-name-pill py-var">random</code> usamos para escolher um item aleatório dentro de uma lista?',
                    options: [
                        '<code class="var-name-pill py-var">random.choice(premios)</code>',
                        '<code class="var-name-pill py-var">random.soma(premios)</code>',
                        '<code class="var-name-pill py-var">random.len()</code>'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    let items = ["Carrinho 🚗", "Boneca 🧸", "Videogame 🎮"];
                    try {
                        if (rawA.trim().startsWith('[')) items = JSON.parse(rawA.trim().replace(/'/g, '"'));
                    } catch(e) {}

                    const chosen = items[Math.floor(Math.random() * items.length)];

                    return {
                        code: `<span class="py-comment"># Sorteando um item da lista com choice()</span>\n<span class="py-keyword">import</span> <span class="py-var">random</span>\n\n<span class="py-var">premios</span> = <span class="py-string">${JSON.stringify(items)}</span>\n<span class="py-var">sorteado</span> = <span class="py-func">random.choice</span>(<span class="py-var">premios</span>)\n<span class="py-func">print</span>(<span class="py-string">"Parabéns! Você ganhou:"</span>, <span class="py-var">sorteado</span>)`,
                        result: chosen,
                        type: 'str',
                        varName: 'sorteado',
                        printPrefix: 'Prêmio sorteado:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">random.choice()</code> =`
                    };
                }
            },
            {
                id: 4,
                operator: 'Cara ou Coroa',
                layout: 'vertical',
                name: 'Jogo Cara ou Coroa',
                title: 'Atividade 4: Jogo Cara ou Coroa (random.choice)',
                subtitle: 'Jogue a moeda para o alto e veja qual lado vai cair!',
                explanation: 'Podemos usar <code>random.choice(["Cara 🪙", "Coroa 👑"])</code> para criar um jogo de Cara ou Coroa! A cada execução, a moeda cai em um lado surpresa! 🪙',
                labelA: 'Lados da Moeda <code class="var-name-pill py-var">moeda</code>',
                labelB: 'Seu Palpite <code class="var-name-pill py-var">palpite</code>',
                labelRes: '✨ Resultado da Moeda:',
                defaultA: '["Cara 🪙", "Coroa 👑"]',
                defaultB: '"Cara 🪙"',
                presets: [
                    { label: '🪙 Apostar em Cara', a: '["Cara 🪙", "Coroa 👑"]', b: '"Cara 🪙"' },
                    { label: '👑 Apostar em Coroa', a: '["Cara 🪙", "Coroa 👑"]', b: '"Coroa 👑"' }
                ],
                quiz: {
                    question: 'O que o comando <code class="var-name-pill py-var">random.choice(["Cara 🪙", "Coroa 👑"])</code> sorteia?',
                    options: [
                        'Escolhe aleatoriamente ou "Cara 🪙" ou "Coroa 👑".',
                        'Escolhe sempre as duas opções ao mesmo tempo.',
                        'Transforma a moeda em um número.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const guess = String(parsedB.value);
                    const sides = ["Cara 🪙", "Coroa 👑"];
                    const outcome = sides[Math.floor(Math.random() * sides.length)];
                    const isWinner = outcome.includes(guess.replace(/["'\s]/g, '')) || guess.includes(outcome.split(' ')[0]);

                    const resultMsg = isWinner 
                        ? `Caiu ${outcome}! Você ACERTOU seu palpite! 🎉` 
                        : `Caiu ${outcome}! Quase! Tente jogar novamente! 🪙`;

                    return {
                        code: `<span class="py-comment"># Jogo de Cara ou Coroa</span>\n<span class="py-keyword">import</span> <span class="py-var">random</span>\n\n<span class="py-var">moeda</span> = <span class="py-func">random.choice</span>([<span class="py-string">"Cara 🪙"</span>, <span class="py-string">"Coroa 👑"</span>])\n<span class="py-func">print</span>(<span class="py-string">"A moeda subiu e caiu em:"</span>, <span class="py-var">moeda</span>)`,
                        result: resultMsg,
                        type: 'str',
                        varName: 'moeda',
                        printPrefix: 'Resultado da moeda:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">random.choice(moeda)</code>:`
                    };
                }
            },
            {
                id: 5,
                operator: 'Desafio Sorteio',
                layout: 'vertical',
                name: 'Adivinhe o Número',
                title: 'Atividade 5: Desafio Final: Adivinhe o Número do Robô!',
                subtitle: 'O robô pensa em um número aleatório de 1 a 5. Tente adivinhar!',
                explanation: 'Reúna seus superpoderes! 🤖<br><br>O robô usa <code>random.randint(1, 5)</code> para pensar num número secreto. Se o seu <code>palpite == numero_secreto</code>, você vence o desafio!',
                labelA: 'Seu Palpite <code class="var-name-pill py-var">palpite</code>',
                labelB: 'Número do Robô <code class="var-name-pill py-var">numero_secreto</code>',
                labelRes: '✨ Desafio do Robô:',
                defaultA: '3',
                defaultB: 'random.randint(1, 5)',
                presets: [
                    { label: '🎯 Palpite 3 (Sorteio de 1 a 5)', a: '3', b: 'random.randint(1, 5)' },
                    { label: '🎲 Palpite 5 (Sorteio de 1 a 5)', a: '5', b: 'random.randint(1, 5)' },
                    { label: '⭐ Palpite 1 (Sorteio de 1 a 5)', a: '1', b: 'random.randint(1, 5)' }
                ],
                quiz: {
                    question: 'Como o robô faz para escolher um número secreto surpresa entre 1 e 5 em Python?',
                    options: [
                        'Usando o comando <code class="var-name-pill py-var">numero_secreto = random.randint(1, 5)</code>.',
                        'Digitando o número na tela.',
                        'Usando a função `len()`.'
                    ],
                    correctIndex: 0
                },
                customGenerator: (rawA, rawB, parsedA, parsedB) => {
                    const userGuess = typeof parsedA.value === 'number' ? parsedA.value : 3;
                    const robotSecret = Math.floor(Math.random() * 5) + 1;
                    const hit = userGuess === robotSecret;
                    const msg = hit 
                        ? `O robô pensou no ${robotSecret}! Você ACERTOU! 🏆🎉` 
                        : `O robô pensou no ${robotSecret}! Você chutou ${userGuess}. Tente de novo! 🤖`;

                    return {
                        code: `<span class="py-comment"># Desafio: Adivinhe o número secreto do robô</span>\n<span class="py-keyword">import</span> <span class="py-var">random</span>\n\n<span class="py-var">palpite</span> = <span class="py-number">${userGuess}</span>\n<span class="py-var">numero_secreto</span> = <span class="py-func">random.randint</span>(<span class="py-number">1</span>, <span class="py-number">5</span>)\n\n<span class="py-keyword">if</span> <span class="py-var">palpite</span> <span class="py-op">==</span> <span class="py-var">numero_secreto</span>:\n    <span class="py-func">print</span>(<span class="py-string">"Parabéns! Você adivinhou o número!"</span>, <span class="py-var">numero_secreto</span>)\n<span class="py-keyword">else</span>:\n    <span class="py-func">print</span>(<span class="py-string">"O robô tinha pensado no número:"</span>, <span class="py-var">numero_secreto</span>)`,
                        result: msg,
                        type: 'str',
                        varName: 'desafio_robo',
                        printPrefix: 'Resultado do jogo:',
                        resultFormulaHTML: `<code class="var-name-pill py-var">palpite == numero_secreto</code>:`
                    };
                }
            }
        ]
    }
};

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    setupAvatarPicker();
    renderUI();
});

// --- Gestão de Armazenamento Local ---
function loadSavedData() {
    const saved = localStorage.getItem('pykids_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
            if (!state.lessonProgress[1]) state.lessonProgress[1] = [false, false, false, false, false, false, false];
            if (!state.lessonProgress[2]) state.lessonProgress[2] = [false, false, false, false, false];
            if (!state.lessonProgress[3]) state.lessonProgress[3] = [false, false, false, false, false];
            if (!state.lessonProgress[4]) state.lessonProgress[4] = [false, false, false, false, false];
            if (!state.lessonProgress[5]) state.lessonProgress[5] = [false, false, false, false, false];
            if (!state.lessonProgress[6] || state.lessonProgress[6].length < 6) state.lessonProgress[6] = [false, false, false, false, false, false];
            if (!state.lessonProgress[7]) state.lessonProgress[7] = [false, false, false, false, false];
            if (!state.lessonProgress[8]) state.lessonProgress[8] = [false, false, false, false, false];
        } catch (e) {
            console.error('Erro ao carregar dados salvos', e);
        }
    }
}

function saveData() {
    localStorage.setItem('pykids_state', JSON.stringify(state));
}

// --- Seleção de Avatar ---
function setupAvatarPicker() {
    const options = document.querySelectorAll('.avatar-option');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            state.user.avatar = opt.getAttribute('data-avatar');
        });
    });
}

function renderUI() {
    // Abrir diretamente no Dashboard de Seleção de Aulas
    switchView('view-dashboard');
    renderDashboard();
}

// --- Fluxo de Navegação de Telas ---
function startApp() {
    const nameInput = document.getElementById('student-name');
    const schoolInput = document.getElementById('school-name');

    if (!nameInput.value.trim() || !schoolInput.value.trim()) {
        alert('Por favor, preencha seu nome e sua escola!');
        return;
    }

    state.user.name = nameInput.value.trim();
    state.user.school = schoolInput.value.trim();
    saveData();

    switchView('view-dashboard');
    renderDashboard();
}

function editProfile() {
    switchView('view-onboarding');
    document.getElementById('student-name').value = state.user.name;
    document.getElementById('school-name').value = state.user.school;
}

function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('active');
    });
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
}

// --- Renderização do Dashboard ---
function renderDashboard() {
    document.getElementById('dash-avatar').textContent = AVATAR_MAP[state.user.avatar] || '🐍';
    document.getElementById('dash-student-name').textContent = state.user.name;
    document.getElementById('dash-school-name').textContent = state.user.school;
    document.getElementById('dash-stars-count').textContent = state.user.stars;
    document.getElementById('welcome-name').textContent = state.user.name;

    // Progresso Aula 1
    const comp1 = state.lessonProgress[1].filter(Boolean).length;
    const fill1 = document.getElementById('lesson1-progress-fill');
    const text1 = document.getElementById('lesson1-progress-text');
    if (fill1) fill1.style.width = `${Math.round((comp1 / 7) * 100)}%`;
    if (text1) text1.textContent = `${comp1} de 7 atividades`;

    // Progresso Aula 2
    const comp2 = state.lessonProgress[2].filter(Boolean).length;
    const fill2 = document.getElementById('lesson2-progress-fill');
    const text2 = document.getElementById('lesson2-progress-text');
    if (fill2) fill2.style.width = `${Math.round((comp2 / 5) * 100)}%`;
    if (text2) text2.textContent = `${comp2} de 5 atividades`;

    // Progresso Aula 3
    const comp3 = state.lessonProgress[3] ? state.lessonProgress[3].filter(Boolean).length : 0;
    const fill3 = document.getElementById('lesson3-progress-fill');
    const text3 = document.getElementById('lesson3-progress-text');
    if (fill3) fill3.style.width = `${Math.round((comp3 / 5) * 100)}%`;
    if (text3) text3.textContent = `${comp3} de 5 atividades`;

    // Progresso Aula 4
    const comp4 = state.lessonProgress[4] ? state.lessonProgress[4].filter(Boolean).length : 0;
    const fill4 = document.getElementById('lesson4-progress-fill');
    const text4 = document.getElementById('lesson4-progress-text');
    if (fill4) fill4.style.width = `${Math.round((comp4 / 5) * 100)}%`;
    if (text4) text4.textContent = `${comp4} de 5 atividades`;

    // Progresso Aula 5
    const comp5 = state.lessonProgress[5] ? state.lessonProgress[5].filter(Boolean).length : 0;
    const fill5 = document.getElementById('lesson5-progress-fill');
    const text5 = document.getElementById('lesson5-progress-text');
    if (fill5) fill5.style.width = `${Math.round((comp5 / 5) * 100)}%`;
    if (text5) text5.textContent = `${comp5} de 5 atividades`;

    // Progresso Aula 6
    const comp6 = state.lessonProgress[6] ? state.lessonProgress[6].filter(Boolean).length : 0;
    const fill6 = document.getElementById('lesson6-progress-fill');
    const text6 = document.getElementById('lesson6-progress-text');
    if (fill6) fill6.style.width = `${Math.round((comp6 / 5) * 100)}%`;
    if (text6) text6.textContent = `${comp6} de 5 atividades`;
}

function goToDashboard() {
    saveData();
    switchView('view-dashboard');
    renderDashboard();
}

// --- Entrar em uma Aula ---
function openLesson(lessonId) {
    state.currentLessonId = lessonId;
    state.currentActivityIndex = 0;
    switchView('view-lesson');
    renderLessonWorkspace();
}

// --- Renderização do Ambiente da Aula no IDE ---
function renderLessonWorkspace() {
    const lesson = LESSONS[state.currentLessonId];
    
    const filenameEl = document.querySelector('.ide-filename');
    if (filenameEl) {
        filenameEl.textContent = `${lesson.filename} — PyKids VS Code`;
    }

    renderSidebarStepper();
    renderTabs();
    loadActivity(state.currentActivityIndex);
    updateHeaderProgress();
}

function updateHeaderProgress() {
    const lesson = LESSONS[state.currentLessonId];
    const totalAct = lesson.activities.length;
    const currentNum = state.currentActivityIndex + 1;
    const percent = Math.round((currentNum / totalAct) * 100);

    document.getElementById('lesson-stars').textContent = state.user.stars;
    document.getElementById('current-act-counter').textContent = `Atividade ${currentNum} de ${totalAct}`;
    document.getElementById('ide-progress-fill').style.width = `${percent}%`;
}

function renderSidebarStepper() {
    const lesson = LESSONS[state.currentLessonId];
    const stepper = document.getElementById('activities-stepper');
    stepper.innerHTML = '';

    lesson.activities.forEach((act, idx) => {
        const isCurrent = idx === state.currentActivityIndex;
        const isDone = state.lessonProgress[state.currentLessonId][idx];

        const item = document.createElement('div');
        item.className = `step-item ${isCurrent ? 'active' : ''} ${isDone ? 'completed' : ''}`;
        item.onclick = () => selectActivity(idx);

        item.innerHTML = `
            <div class="step-num">${isDone ? '✓' : idx + 1}</div>
            <div class="step-title-text">${act.name}</div>
        `;
        stepper.appendChild(item);
    });
}

function renderTabs() {
    const lesson = LESSONS[state.currentLessonId];
    const tabsContainer = document.getElementById('ide-tabs');
    tabsContainer.innerHTML = '';

    lesson.activities.forEach((act, idx) => {
        const isCurrent = idx === state.currentActivityIndex;
        const tab = document.createElement('div');
        tab.className = `tab-item ${isCurrent ? 'active' : ''}`;
        tab.onclick = () => selectActivity(idx);

        tab.innerHTML = `
            <span>${act.operator}</span>
            <span>atv_${act.id}.py</span>
        `;
        tabsContainer.appendChild(tab);
    });
}

function selectActivity(idx) {
    state.currentActivityIndex = idx;
    renderSidebarStepper();
    renderTabs();
    loadActivity(idx);
    updateHeaderProgress();
}

// --- Carregar Atividade Ativa ---
function loadActivity(idx) {
    const lesson = LESSONS[state.currentLessonId];
    const act = lesson.activities[idx];

    // Rolar para o topo da página para o aluno ler o conteúdo primeiro
    const scrollContainer = document.querySelector('.editor-content-scroll');
    if (scrollContainer) {
        scrollContainer.scrollTop = 0;
    }

    // Banner & Explicação
    document.getElementById('act-badge-icon').textContent = act.operator;
    document.getElementById('act-title').textContent = act.title;
    document.getElementById('act-subtitle').textContent = act.subtitle;
    document.getElementById('act-explanation-text').innerHTML = act.explanation;

    // Ajustar Layout (Vertical vs Horizontal)
    const inputsRow = document.querySelector('.playground-inputs-row');
    const operatorBox = document.getElementById('current-operator-box');

    if (act.layout === 'vertical') {
        if (inputsRow) inputsRow.classList.add('vertical-layout');
        if (operatorBox) operatorBox.style.display = 'none';
    } else {
        if (inputsRow) inputsRow.classList.remove('vertical-layout');
        if (operatorBox) operatorBox.style.display = 'flex';
    }

    // Símbolo do operador e Rótulos dos campos
    document.getElementById('operator-symbol').textContent = act.operator;

    const labelA = document.querySelector('label[for="input-val-a"]');
    const labelB = document.querySelector('label[for="input-val-b"]');
    const labelRes = document.querySelector('.result-box-wrapper label');

    if (labelA && act.labelA) labelA.innerHTML = act.labelA;
    if (labelB && act.labelB) labelB.innerHTML = act.labelB;
    if (labelRes && act.labelRes) labelRes.innerHTML = act.labelRes;

    // Inputs padrão
    document.getElementById('input-val-a').value = act.defaultA;
    document.getElementById('input-val-b').value = act.defaultB;

    // Presets
    const presetsRow = document.getElementById('presets-container');
    presetsRow.innerHTML = '<span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">Testes Rápidos:</span>';
    act.presets.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'preset-btn';
        btn.textContent = p.label;
        btn.onclick = () => {
            document.getElementById('input-val-a').value = p.a;
            document.getElementById('input-val-b').value = p.b;
            runCurrentCode();
        };
        presetsRow.appendChild(btn);
    });

    // Renderizar o Quiz da Atividade
    renderQuizUI(act, idx);

    // Botões de navegação
    document.getElementById('btn-prev-act').disabled = idx === 0;

    const nextBtn = document.getElementById('btn-next-act');
    if (idx === lesson.activities.length - 1) {
        nextBtn.innerHTML = '🏆 Finalizar Aula';
    } else {
        nextBtn.innerHTML = 'Próxima Atividade ➔';
    }

    // Executar simulação inicial
    runCurrentCode();
}

// --- RENDERIZAÇÃO DO QUIZ DE FIXAÇÃO ---
function renderQuizUI(act, idx) {
    const isCompleted = state.lessonProgress[state.currentLessonId][idx];
    const card = document.getElementById('challenge-card');
    const badge = document.getElementById('challenge-status-badge');
    const questionEl = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-container');
    const feedbackEl = document.getElementById('challenge-feedback-box');

    if (!act.quiz) return;

    questionEl.innerHTML = act.quiz.question;
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    act.quiz.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.disabled = isCompleted;

        if (isCompleted && optIdx === act.quiz.correctIndex) {
            btn.classList.add('selected-correct');
        }

        btn.innerHTML = `
            <span class="quiz-option-letter">${letters[optIdx]}</span>
            <span>${optText}</span>
        `;

        btn.onclick = () => selectQuizOption(optIdx, act, idx, btn);
        optionsContainer.appendChild(btn);
    });

    if (isCompleted) {
        card.classList.add('completed-card');
        badge.className = 'challenge-badge completed';
        badge.textContent = '🎉 Quiz Respondido!';
        feedbackEl.innerHTML = '<span class="console-success">✨ Resposta correta! Você já conquistou +10⭐ nesta atividade!</span>';
    } else {
        card.classList.remove('completed-card');
        badge.className = 'challenge-badge pending';
        badge.textContent = '🔒 Responda o Quiz';
        feedbackEl.innerHTML = '<span style="color:var(--text-muted); font-style:italic;">Escolha a alternativa correta acima para avançar!</span>';
    }
}

function selectQuizOption(selectedIdx, act, actIdx, btnElement) {
    if (state.lessonProgress[state.currentLessonId][actIdx]) return;

    const card = document.getElementById('challenge-card');
    const badge = document.getElementById('challenge-status-badge');
    const feedbackEl = document.getElementById('challenge-feedback-box');
    const allBtns = document.querySelectorAll('.quiz-option-btn');

    if (selectedIdx === act.quiz.correctIndex) {
        // Resposta Correta!
        allBtns.forEach(b => b.disabled = true);
        btnElement.classList.add('selected-correct');

        state.lessonProgress[state.currentLessonId][actIdx] = true;
        state.user.stars += 10;
        saveData();

        card.classList.add('completed-card');
        badge.className = 'challenge-badge completed';
        badge.textContent = '🎉 Quiz Respondido!';
        feedbackEl.innerHTML = '<span class="console-success">🎉 Parabéns! Resposta EXATA! Você ganhou +10⭐ e liberou o progresso!</span>';

        updateHeaderProgress();
        renderSidebarStepper();
    } else {
        // Resposta Incorreta
        btnElement.classList.add('selected-wrong');
        feedbackEl.innerHTML = '<span style="color:#FF6B6B;">❌ Ops! Essa não é a resposta correta. Tente outra alternativa!</span>';

        setTimeout(() => {
            btnElement.classList.remove('selected-wrong');
        }, 1200);
    }
}

// --- PARSER E SIMULADOR PYTHON ---
function parsePythonValue(valStr) {
    const trimmed = valStr.trim();

    if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
        return { value: trimmed.slice(1, -1), rawType: 'str' };
    }

    if (!isNaN(trimmed) && trimmed !== '') {
        const num = Number(trimmed);
        return { value: num, rawType: Number.isInteger(num) ? 'int' : 'float' };
    }

    return { value: trimmed, rawType: 'str' };
}

function runCurrentCode() {
    const lesson = LESSONS[state.currentLessonId];
    const idx = state.currentActivityIndex;
    const act = lesson.activities[idx];

    const rawA = document.getElementById('input-val-a').value;
    const rawB = document.getElementById('input-val-b').value;

    const parsedA = parsePythonValue(rawA);
    const parsedB = parsePythonValue(rawB);

    const codeDisplay = document.getElementById('generated-code-display');
    const consoleOutput = document.getElementById('console-output-box');
    const typeBadge = document.getElementById('data-type-badge');
    const resultField = document.getElementById('output-result-field');

    let generatedCodeHTML = '';
    let result = null;
    let resType = null;
    let errorMsg = null;
    let varOutputName = 'resultado';
    let printPrefix = 'Resultado:';
    let resultFormulaHTML = '';

    // Verificação de gerador customizado (Aula 2) vs gerador padrão (Aula 1)
    if (act.customGenerator) {
        const custom = act.customGenerator(rawA, rawB, parsedA, parsedB);
        generatedCodeHTML = custom.code;
        result = custom.result;
        resType = custom.type;
        varOutputName = custom.varName || 'resultado';
        printPrefix = custom.printPrefix || 'Resultado:';
        resultFormulaHTML = custom.resultFormulaHTML || '';
    } else {
        // Gerador Padrão da Aula 1
        const strA = parsedA.rawType === 'str' ? `"${parsedA.value}"` : parsedA.value;
        const strB = parsedB.rawType === 'str' ? `"${parsedB.value}"` : parsedB.value;
        resultFormulaHTML = `<code class="var-name-pill py-var">valor_1</code> ${act.operator} <code class="var-name-pill py-var">valor_2</code> =`;

        generatedCodeHTML = `
<span class="py-comment"># Código Python Executado</span>
<span class="py-var">valor_1</span> = <span class="${parsedA.rawType === 'str' ? 'py-string' : 'py-number'}">${strA}</span>
<span class="py-var">valor_2</span> = <span class="${parsedB.rawType === 'str' ? 'py-string' : 'py-number'}">${strB}</span>
<span class="py-var">resultado</span> = <span class="py-var">valor_1</span> <span class="py-op">${act.operator}</span> <span class="py-var">valor_2</span>
<span class="py-func">print</span>(<span class="py-string">"Resultado:"</span>, <span class="py-var">resultado</span>)
        `.trim();

        try {
            const a = parsedA.value;
            const b = parsedB.value;

            switch (act.operator) {
                case '+':
                    if (typeof a === 'number' && typeof b === 'number') {
                        result = a + b;
                        resType = Number.isInteger(result) ? 'int' : 'float';
                    } else {
                        result = String(a) + String(b);
                        resType = 'str';
                    }
                    break;
                case '-':
                    if (typeof a === 'number' && typeof b === 'number') {
                        result = a - b;
                        resType = Number.isInteger(result) ? 'int' : 'float';
                    } else {
                        errorMsg = 'TypeError: Não é possível subtrair palavras! Use apenas números com o operador -';
                    }
                    break;
                case '*':
                    if (typeof a === 'number' && typeof b === 'number') {
                        result = a * b;
                        resType = Number.isInteger(result) ? 'int' : 'float';
                    } else if (typeof a === 'string' && typeof b === 'number') {
                        result = a.repeat(Math.max(0, Math.floor(b)));
                        resType = 'str';
                    } else if (typeof a === 'number' && typeof b === 'string') {
                        result = b.repeat(Math.max(0, Math.floor(a)));
                        resType = 'str';
                    } else {
                        errorMsg = 'TypeError: Para multiplicar textos, um dos lados precisa ser um número inteiro!';
                    }
                    break;
                case '/':
                    if (typeof a === 'number' && typeof b === 'number') {
                        if (b === 0) {
                            errorMsg = 'ZeroDivisionError: Impossível dividir por zero! Tente outro número no Valor 2.';
                        } else {
                            result = a / b;
                            resType = 'float';
                        }
                    } else {
                        errorMsg = 'TypeError: Operador / funciona apenas entre números!';
                    }
                    break;
                case '//':
                    if (typeof a === 'number' && typeof b === 'number') {
                        if (b === 0) {
                            errorMsg = 'ZeroDivisionError: Divisão inteira por zero não é permitida!';
                        } else {
                            result = Math.floor(a / b);
                            resType = 'int';
                        }
                    } else {
                        errorMsg = 'TypeError: Operador // funciona apenas entre números!';
                    }
                    break;
                case '%':
                    if (typeof a === 'number' && typeof b === 'number') {
                        if (b === 0) {
                            errorMsg = 'ZeroDivisionError: Módulo por zero não existe!';
                        } else {
                            result = a % b;
                            resType = 'int';
                        }
                    } else {
                        errorMsg = 'TypeError: Operador % funciona apenas entre números!';
                    }
                    break;
                case '**':
                    if (typeof a === 'number' && typeof b === 'number') {
                        result = Math.pow(a, b);
                        resType = Number.isInteger(result) ? 'int' : 'float';
                    } else {
                        errorMsg = 'TypeError: Operador ** (Potência) funciona apenas entre números!';
                    }
                    break;
            }
        } catch (e) {
            errorMsg = 'Error: ' + e.message;
        }
    }

    // Renderizar código gerado
    codeDisplay.innerHTML = generatedCodeHTML;

    // Renderizar Saída
    if (errorMsg) {
        typeBadge.textContent = 'ERROR';
        typeBadge.style.borderColor = '#E74C3C';
        typeBadge.style.color = '#E74C3C';

        if (resultField) {
            resultField.className = 'result-display-field has-error';
            resultField.innerHTML = `⚠️ Ops! ${errorMsg}`;
        }

        consoleOutput.innerHTML = `
            <div class="console-line console-error">
                <strong>⚠️ Ops!</strong> ${errorMsg}
            </div>
        `;
    } else {
        typeBadge.textContent = resType;
        typeBadge.style.borderColor = 'var(--py-yellow)';
        typeBadge.style.color = 'var(--py-yellow)';

        let displayRes = result;
        if (act.customGenerator) {
            const custom = act.customGenerator(rawA, rawB, parsedA, parsedB);
            if (custom.customResultDisplay) {
                displayRes = custom.customResultDisplay;
            } else if (resType === 'str') {
                displayRes = `"${result}"`;
            }
        } else if (resType === 'str') {
            displayRes = `"${result}"`;
        }

        const formulaText = resultFormulaHTML || `<code class="var-name-pill py-var">${varOutputName}</code> =`;

        if (resultField) {
            resultField.className = 'result-display-field has-result';
            resultField.innerHTML = `<span>${formulaText} <strong>${displayRes}</strong></span> <span class="type-badge" style="margin-left:auto;">${resType}</span>`;
        }

        consoleOutput.innerHTML = `
            <div class="console-line console-success" style="font-size: 1.1rem; padding: 0.4rem 0;">
                ${printPrefix} <strong>${displayRes}</strong>
            </div>
        `;
    }
}

// --- Navegação entre Atividades ---
function navigateActivity(direction) {
    const lesson = LESSONS[state.currentLessonId];
    const newIdx = state.currentActivityIndex + direction;

    if (newIdx >= 0 && newIdx < lesson.activities.length) {
        selectActivity(newIdx);
    } else if (newIdx >= lesson.activities.length) {
        showCompletionModal();
    }
}

// --- Modal de Conclusão ---
function showCompletionModal() {
    const lesson = LESSONS[state.currentLessonId];
    document.getElementById('modal-student-name').textContent = state.user.name;
    document.getElementById('modal-stars-count').textContent = state.user.stars;
    
    const subtitle = document.querySelector('.modal-subtitle');
    if (subtitle) {
        subtitle.innerHTML = `Você concluiu com sucesso todas as atividades da <strong>${lesson.title}</strong>!`;
    }

    document.getElementById('modal-completion').classList.remove('hidden');
}

function closeCompletionModal() {
    document.getElementById('modal-completion').classList.add('hidden');
    goToDashboard();
}
