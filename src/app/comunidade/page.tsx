"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageCircle, ThumbsUp, Send, Users, Heart, Filter } from "lucide-react"
import Link from "next/link"

interface Feedback {
  id: number
  autor: string
  idade: string
  titulo: string
  categoria: string
  conteudo: string
  likes: number
  comentarios: number
  data: string
  liked: boolean
}

export default function ComunidadePage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: 1,
      autor: "Maria S.",
      idade: "Mãe de Lucas, 5 anos",
      titulo: "Rotina visual funcionou maravilhosamente!",
      categoria: "Autonomia",
      conteudo: "Depois de implementar o quadro de rotina visual com pictogramas, meu filho reduziu as crises matinais em 80%! Agora ele sabe exatamente o que vem depois e fica muito mais tranquilo. Usei velcro para poder trocar a ordem quando necessário.",
      likes: 47,
      comentarios: 12,
      data: "Há 2 dias",
      liked: false
    },
    {
      id: 2,
      autor: "João P.",
      idade: "Pai de Ana, 4 anos",
      titulo: "Massinha sensorial - sucesso total!",
      categoria: "Sensorial",
      conteudo: "Fiz massinha caseira com farinha, água e corante alimentício. Minha filha que evitava texturas agora brinca por 30 minutos seguidos! Adicionei glitter e ela adora. Começamos com 5 minutos e fomos aumentando aos poucos.",
      likes: 63,
      comentarios: 18,
      data: "Há 3 dias",
      liked: false
    },
    {
      id: 3,
      autor: "Carla M.",
      idade: "Mãe de Pedro, 6 anos",
      titulo: "PECS transformou nossa comunicação",
      categoria: "Linguagem",
      conteudo: "Meu filho era não-verbal. Começamos com 5 cartões PECS (água, comida, banheiro, brincar, ajuda). Em 2 meses ele já usa 30 cartões e começou a verbalizar algumas palavras! A chave foi ser consistente e sempre responder imediatamente às trocas.",
      likes: 89,
      comentarios: 25,
      data: "Há 5 dias",
      liked: false
    },
    {
      id: 4,
      autor: "Rafael T.",
      idade: "Pai de Sofia, 3 anos",
      titulo: "Música acalma crises sensoriais",
      categoria: "Emoções",
      conteudo: "Descobri que tocar violão suavemente durante crises ajuda muito. Comecei com músicas que ela já conhecia e agora ela mesma pede 'música do papai' quando está agitada. Funciona em 70% das vezes!",
      likes: 52,
      comentarios: 15,
      data: "Há 1 semana",
      liked: false
    },
    {
      id: 5,
      autor: "Fernanda L.",
      idade: "Mãe de Gabriel, 7 anos",
      titulo: "Histórias sociais para ir ao dentista",
      categoria: "Social",
      conteudo: "Criei um livrinho com fotos do consultório, da dentista e dos instrumentos. Lemos juntos 2x por dia na semana anterior. No dia, ele foi super tranquilo! Agora faço isso para qualquer situação nova.",
      likes: 71,
      comentarios: 20,
      data: "Há 1 semana",
      liked: false
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("todas")
  const [newFeedback, setNewFeedback] = useState({
    titulo: "",
    categoria: "Autonomia",
    idade: "",
    conteudo: ""
  })

  const categorias = ["todas", "Autonomia", "Sensorial", "Linguagem", "Emoções", "Social", "Comportamento"]

  const handleLike = (id: number) => {
    setFeedbacks(feedbacks.map(fb => 
      fb.id === id 
        ? { ...fb, likes: fb.liked ? fb.likes - 1 : fb.likes + 1, liked: !fb.liked }
        : fb
    ))
  }

  const handleSubmit = () => {
    if (newFeedback.titulo && newFeedback.conteudo && newFeedback.idade) {
      const feedback: Feedback = {
        id: Date.now(),
        autor: "Você",
        idade: newFeedback.idade,
        titulo: newFeedback.titulo,
        categoria: newFeedback.categoria,
        conteudo: newFeedback.conteudo,
        likes: 0,
        comentarios: 0,
        data: "Agora",
        liked: false
      }
      setFeedbacks([feedback, ...feedbacks])
      setNewFeedback({ titulo: "", categoria: "Autonomia", idade: "", conteudo: "" })
      setShowForm(false)
    }
  }

  const feedbacksFiltrados = feedbacks.filter(fb => 
    selectedCategory === "todas" || fb.categoria === selectedCategory
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
              <Users className="w-10 h-10 text-purple-600" />
              Comunidade conecTEA
            </h1>
            <p className="text-gray-600 mt-2">Compartilhe experiências e aprenda com outras famílias</p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => setShowForm(!showForm)}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Send className="w-5 h-5 mr-2" />
              Compartilhar
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>

        {/* Estatísticas da Comunidade */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">{feedbacks.length}</p>
              <p className="text-gray-700 font-semibold mt-2">Experiências</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-pink-100 to-pink-200 border-2 border-pink-300">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">
                {feedbacks.reduce((sum, fb) => sum + fb.likes, 0)}
              </p>
              <p className="text-gray-700 font-semibold mt-2">Curtidas</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">
                {feedbacks.reduce((sum, fb) => sum + fb.comentarios, 0)}
              </p>
              <p className="text-gray-700 font-semibold mt-2">Comentários</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-800">150+</p>
              <p className="text-gray-700 font-semibold mt-2">Famílias</p>
            </div>
          </Card>
        </div>

        {/* Formulário de Novo Feedback */}
        {showForm && (
          <Card className="p-6 bg-white border-4 border-purple-300 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Compartilhe sua experiência</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Título
                </label>
                <Input
                  placeholder="Ex: Rotina visual funcionou muito bem!"
                  value={newFeedback.titulo}
                  onChange={(e) => setNewFeedback({ ...newFeedback, titulo: e.target.value })}
                  className="text-lg h-12"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Categoria
                  </label>
                  <select
                    value={newFeedback.categoria}
                    onChange={(e) => setNewFeedback({ ...newFeedback, categoria: e.target.value })}
                    className="w-full h-12 px-4 rounded-md border border-gray-300 text-lg"
                  >
                    {categorias.filter(c => c !== "todas").map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Idade da criança
                  </label>
                  <Input
                    placeholder="Ex: 5 anos"
                    value={newFeedback.idade}
                    onChange={(e) => setNewFeedback({ ...newFeedback, idade: e.target.value })}
                    className="text-lg h-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Conte sua experiência
                </label>
                <Textarea
                  placeholder="Descreva o que você tentou, como funcionou, dicas práticas..."
                  value={newFeedback.conteudo}
                  onChange={(e) => setNewFeedback({ ...newFeedback, conteudo: e.target.value })}
                  className="min-h-32"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSubmit} size="lg" className="flex-1">
                  <Send className="w-5 h-5 mr-2" />
                  Publicar
                </Button>
                <Button 
                  onClick={() => setShowForm(false)} 
                  variant="outline" 
                  size="lg"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Filtros */}
        <Card className="p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">Filtrar por:</span>
            {categorias.map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>
        </Card>

        {/* Lista de Feedbacks */}
        <div className="space-y-6">
          {feedbacksFiltrados.map((feedback) => (
            <Card key={feedback.id} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {feedback.autor[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{feedback.autor}</p>
                        <p className="text-sm text-gray-600">{feedback.idade}</p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{feedback.titulo}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-purple-500">{feedback.categoria}</Badge>
                      <span className="text-sm text-gray-500">{feedback.data}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">{feedback.conteudo}</p>

                <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleLike(feedback.id)}
                    className={`flex items-center gap-2 transition-all ${
                      feedback.liked ? "text-red-500" : "text-gray-600 hover:text-red-500"
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${feedback.liked ? "fill-red-500" : ""}`} />
                    <span className="font-semibold">{feedback.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-all">
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-semibold">{feedback.comentarios}</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Regras da Comunidade */}
        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💙 Regras da Comunidade</h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Seja respeitoso e empático - todas as experiências são válidas</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Compartilhe apenas o que funcionou para você - cada criança é única</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Não substitua orientação profissional - sempre consulte especialistas</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Mantenha a privacidade - não compartilhe informações pessoais sensíveis</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
