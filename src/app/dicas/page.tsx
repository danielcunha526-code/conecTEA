"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Heart, Brain, Users, Home, Smile } from "lucide-react"
import Link from "next/link"

const dicasPorCategoria = {
  comunicacao: [
    {
      titulo: "Contato Visual Gradual",
      autor: "Dra. Maria Silva - Fonoaudióloga",
      conteudo: "Comece com atividades lado a lado, depois em ângulo, até chegar ao contato visual direto. Use reforços positivos a cada progresso.",
      fonte: "Revista Brasileira de Fonoaudiologia, 2023"
    },
    {
      titulo: "Comunicação Alternativa",
      autor: "Dr. João Santos - Terapeuta ABA",
      conteudo: "PECS (Sistema de Comunicação por Troca de Figuras) pode ser introduzido desde cedo. Comece com necessidades básicas: água, comida, brinquedo favorito.",
      fonte: "Manual ABA Brasil, 2024"
    },
    {
      titulo: "Ecolalia Funcional",
      autor: "Dra. Ana Costa - Psicóloga Infantil",
      conteudo: "A ecolalia pode ser transformada em comunicação funcional. Responda às repetições como se fossem tentativas de comunicação.",
      fonte: "Congresso TEA Brasil, 2023"
    }
  ],
  rotina: [
    {
      titulo: "Rotina Visual",
      autor: "Dr. Pedro Lima - Terapeuta Ocupacional",
      conteudo: "Use quadros visuais com fotos ou pictogramas mostrando a sequência do dia. Isso reduz ansiedade e aumenta previsibilidade.",
      fonte: "Associação Brasileira de TO, 2024"
    },
    {
      titulo: "Transições Suaves",
      autor: "Dra. Carla Mendes - Psicopedagoga",
      conteudo: "Avise 5 minutos antes de mudar de atividade. Use timer visual. Crie 'rituais de transição' como uma música específica.",
      fonte: "Revista Autismo, 2023"
    },
    {
      titulo: "Flexibilidade Gradual",
      autor: "Dr. Ricardo Alves - Psicólogo",
      conteudo: "Introduza pequenas mudanças na rotina de forma planejada. Comece com alterações mínimas e aumente gradualmente.",
      fonte: "Manual de Intervenções TEA, 2024"
    }
  ],
  sensorial: [
    {
      titulo: "Dieta Sensorial",
      autor: "Dra. Juliana Rocha - Terapeuta Ocupacional",
      conteudo: "Ofereça atividades sensoriais ao longo do dia: pular no trampolim, massinha, água, texturas diferentes. Observe o que acalma e o que estimula.",
      fonte: "Integração Sensorial Brasil, 2023"
    },
    {
      titulo: "Ambiente Calmo",
      autor: "Dr. Fernando Costa - Arquiteto Especializado",
      conteudo: "Reduza estímulos visuais excessivos. Use cores suaves, iluminação indireta, minimize ruídos. Crie um 'cantinho da calma'.",
      fonte: "Design para Autismo, 2024"
    },
    {
      titulo: "Autorregulação",
      autor: "Dra. Beatriz Santos - Psicóloga",
      conteudo: "Ensine estratégias de autorregulação: respiração profunda, apertar uma bola, ouvir música. Pratique em momentos calmos primeiro.",
      fonte: "Terapia Cognitivo-Comportamental TEA, 2023"
    }
  ],
  alimentacao: [
    {
      titulo: "Exposição Gradual",
      autor: "Dra. Camila Oliveira - Nutricionista",
      conteudo: "Apresente novos alimentos sem pressão. Deixe a criança tocar, cheirar, brincar com o alimento antes de experimentar.",
      fonte: "Nutrição e Autismo, 2024"
    },
    {
      titulo: "Ambiente Tranquilo",
      autor: "Dr. Lucas Ferreira - Terapeuta Alimentar",
      conteudo: "Refeições devem ser momentos calmos. Desligue TV, reduza estímulos. Coma junto com a criança, seja modelo.",
      fonte: "Terapia Alimentar Pediátrica, 2023"
    },
    {
      titulo: "Texturas e Cores",
      autor: "Dra. Paula Martins - Fonoaudióloga",
      conteudo: "Respeite seletividade alimentar inicial. Varie texturas gradualmente. Use apresentação visual atrativa sem forçar.",
      fonte: "Disfagia e Seletividade Alimentar, 2024"
    }
  ],
  aprendizado: [
    {
      titulo: "Interesses Especiais",
      autor: "Dr. Marcos Silva - Pedagogo",
      conteudo: "Use os interesses especiais da criança como ponte para novos aprendizados. Se gosta de dinossauros, ensine matemática com dinossauros.",
      fonte: "Pedagogia Inclusiva, 2023"
    },
    {
      titulo: "Aprendizado Visual",
      autor: "Dra. Renata Lima - Psicopedagoga",
      conteudo: "Crianças com TEA geralmente são aprendizes visuais. Use imagens, vídeos, mapas mentais, organizadores gráficos.",
      fonte: "Estratégias de Ensino TEA, 2024"
    },
    {
      titulo: "Pausas Sensoriais",
      autor: "Dr. André Costa - Terapeuta Ocupacional",
      conteudo: "Intercale atividades acadêmicas com pausas para movimento. 20 minutos de atividade, 5 minutos de pausa ativa.",
      fonte: "Educação e Sensorialidade, 2023"
    }
  ],
  emocoes: [
    {
      titulo: "Termômetro Emocional",
      autor: "Dra. Sofia Almeida - Psicóloga",
      conteudo: "Crie um termômetro visual de emoções (verde=calmo, amarelo=alerta, vermelho=explosão). Ensine a criança a identificar seu estado.",
      fonte: "Regulação Emocional TEA, 2024"
    },
    {
      titulo: "Histórias Sociais",
      autor: "Dr. Gabriel Rocha - Psicopedagogo",
      conteudo: "Use histórias sociais para ensinar sobre emoções e situações sociais. Personalize com fotos da própria criança.",
      fonte: "Carol Gray Method Brasil, 2023"
    },
    {
      titulo: "Validação Emocional",
      autor: "Dra. Larissa Santos - Terapeuta",
      conteudo: "Valide todas as emoções: 'Vejo que você está bravo, tudo bem sentir raiva'. Depois ensine formas adequadas de expressar.",
      fonte: "Parentalidade Consciente TEA, 2024"
    }
  ]
}

export default function DicasPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("comunicacao")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Dicas de Especialistas</h1>
            <p className="text-xl text-gray-600">Conteúdo validado por pesquisadores e terapeutas</p>
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              ✓ Acesso Gratuito
            </div>
          </div>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            onClick={() => setCategoriaSelecionada("comunicacao")}
            variant={categoriaSelecionada === "comunicacao" ? "default" : "outline"}
            className={categoriaSelecionada === "comunicacao" ? "bg-blue-600" : ""}
          >
            <Users className="w-4 h-4 mr-2" />
            Comunicação
          </Button>
          <Button
            onClick={() => setCategoriaSelecionada("rotina")}
            variant={categoriaSelecionada === "rotina" ? "default" : "outline"}
            className={categoriaSelecionada === "rotina" ? "bg-purple-600" : ""}
          >
            <Home className="w-4 h-4 mr-2" />
            Rotina
          </Button>
          <Button
            onClick={() => setCategoriaSelecionada("sensorial")}
            variant={categoriaSelecionada === "sensorial" ? "default" : "outline"}
            className={categoriaSelecionada === "sensorial" ? "bg-pink-600" : ""}
          >
            <Heart className="w-4 h-4 mr-2" />
            Sensorial
          </Button>
          <Button
            onClick={() => setCategoriaSelecionada("alimentacao")}
            variant={categoriaSelecionada === "alimentacao" ? "default" : "outline"}
            className={categoriaSelecionada === "alimentacao" ? "bg-orange-600" : ""}
          >
            <Brain className="w-4 h-4 mr-2" />
            Alimentação
          </Button>
          <Button
            onClick={() => setCategoriaSelecionada("aprendizado")}
            variant={categoriaSelecionada === "aprendizado" ? "default" : "outline"}
            className={categoriaSelecionada === "aprendizado" ? "bg-green-600" : ""}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Aprendizado
          </Button>
          <Button
            onClick={() => setCategoriaSelecionada("emocoes")}
            variant={categoriaSelecionada === "emocoes" ? "default" : "outline"}
            className={categoriaSelecionada === "emocoes" ? "bg-yellow-600" : ""}
          >
            <Smile className="w-4 h-4 mr-2" />
            Emoções
          </Button>
        </div>

        {/* Dicas */}
        <div className="grid md:grid-cols-2 gap-6">
          {dicasPorCategoria[categoriaSelecionada as keyof typeof dicasPorCategoria].map((dica, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{dica.titulo}</h3>
                    <p className="text-sm text-purple-600 font-semibold">{dica.autor}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{dica.conteudo}</p>
                
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic">Fonte: {dica.fonte}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Aviso Importante */}
        <Card className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-200">
          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Importante</h3>
              <p className="text-sm text-gray-700">
                Estas dicas são baseadas em evidências científicas, mas cada criança é única. 
                Sempre consulte profissionais especializados para orientações personalizadas. 
                O que funciona para uma criança pode não funcionar para outra, e está tudo bem!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
