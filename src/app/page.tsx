"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Users, Sparkles, Heart, Lock, Crown, Camera, BookOpen, MessageCircle, Utensils, Music, Palette, Volume2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [assinaturaAtiva, setAssinaturaAtiva] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Crescer Juntos</h1>
              <p className="text-xs text-gray-500">Conectando famílias com amor</p>
            </div>
          </div>
          <Link href="/assinatura">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Assinar
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Star className="w-12 h-12 text-white fill-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-purple-500 animate-bounce" />
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Um mundo de aprendizado e conexão
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Aplicativo completo para crianças com TEA e suas famílias. Atividades sensoriais, acompanhamento inteligente e comunidade de apoio.
        </p>

        {!assinaturaAtiva && (
          <Card className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-yellow-400 shadow-2xl max-w-2xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-white">
                <Crown className="w-10 h-10 text-yellow-300" />
                <div className="text-left">
                  <h3 className="text-xl font-bold">Desbloqueie todo o potencial!</h3>
                  <p className="text-purple-100">7 dias grátis • Cancele quando quiser</p>
                </div>
              </div>
              <Link href="/assinatura">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-3">
                  Começar Agora
                </Button>
              </Link>
            </div>
          </Card>
        )}
      </section>

      {/* Main Areas */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Área da Criança */}
          <Link href={assinaturaAtiva ? "/crianca" : "/assinatura"} className="block relative group">
            <Card className="p-8 h-full hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-blue-300 shadow-xl hover:shadow-2xl">
              {!assinaturaAtiva && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-6 h-6 text-gray-600" />
                </div>
              )}
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-10 h-10 text-purple-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Meu Mundo</h3>
                  <p className="text-lg text-gray-700 mb-4">Área da Criança</p>
                  <p className="text-sm text-gray-600">
                    Atividades interativas, sons relaxantes, desenhos para colorir e muito mais!
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <Volume2 className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Sons Terapêuticos</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <Palette className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Arte & Desenho</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <Music className="w-6 h-6 text-pink-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Piano Interativo</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <Star className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Jogos Sensoriais</p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Área dos Pais */}
          <Link href={assinaturaAtiva ? "/responsavel" : "/assinatura"} className="block relative group">
            <Card className="p-8 h-full hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-100 to-teal-100 border-4 border-green-300 shadow-xl hover:shadow-2xl">
              {!assinaturaAtiva && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-6 h-6 text-gray-600" />
                </div>
              )}
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Guia & Apoio</h3>
                  <p className="text-lg text-gray-700 mb-4">Área dos Responsáveis</p>
                  <p className="text-sm text-gray-600">
                    Acompanhamento inteligente, dicas personalizadas e relatórios de evolução
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <Camera className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Galeria de Fotos</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <BookOpen className="w-6 h-6 text-teal-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Anotações</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <Utensils className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Diário Alimentar</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3 text-center">
                    <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-700">Relatórios</p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Recursos Adicionais */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/dicas" className="block">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 shadow-lg hover:shadow-xl">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dicas de Especialistas</h3>
                  <p className="text-sm text-gray-600">Conteúdo validado por pesquisadores e terapeutas</p>
                  <p className="text-xs text-green-600 font-semibold mt-2">✓ Acesso Gratuito</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href={assinaturaAtiva ? "/comunidade" : "/assinatura"} className="block relative">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 shadow-lg hover:shadow-xl">
              {!assinaturaAtiva && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-5 h-5 text-gray-600" />
                </div>
              )}
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Comunidade</h3>
                  <p className="text-sm text-gray-600">Compartilhe experiências com outras famílias</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href={assinaturaAtiva ? "/galeria" : "/assinatura"} className="block relative">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 shadow-lg hover:shadow-xl">
              {!assinaturaAtiva && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-5 h-5 text-gray-600" />
                </div>
              )}
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <Camera className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Galeria de Atividades</h3>
                  <p className="text-sm text-gray-600">Registre momentos especiais e progressos</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/50 backdrop-blur-sm py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Por que escolher o Crescer Juntos?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-800">Feito com amor</h4>
              <p className="text-sm text-gray-600">Desenvolvido por especialistas em TEA</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-800">Sensorial</h4>
              <p className="text-sm text-gray-600">Atividades adaptadas às necessidades sensoriais</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800">Família unida</h4>
              <p className="text-sm text-gray-600">Ferramentas para pais e crianças</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="font-bold text-gray-800">Evolução real</h4>
              <p className="text-sm text-gray-600">Acompanhe o progresso com relatórios</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      {!assinaturaAtiva && (
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <h3 className="text-3xl font-bold mb-4">Comece sua jornada hoje!</h3>
            <p className="text-lg mb-6 text-purple-100">
              Experimente grátis por 7 dias. Sem compromisso, cancele quando quiser.
            </p>
            <Link href="/assinatura">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-12 py-6 text-lg">
                Começar Teste Grátis
              </Button>
            </Link>
          </Card>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            <span className="text-xl font-bold">Crescer Juntos</span>
          </div>
          <p className="text-gray-400 text-sm">
            Conectando famílias com amor e tecnologia • 2024
          </p>
        </div>
      </footer>
    </div>
  )
}
