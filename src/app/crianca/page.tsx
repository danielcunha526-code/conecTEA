"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Volume2, Palette, Music, Smile, Heart, Star } from "lucide-react"
import Link from "next/link"

export default function CriancaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-lg">
              <ArrowLeft className="w-6 h-6 mr-2" />
              Voltar
            </Button>
          </Link>
          
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Star className="w-12 h-12 text-white fill-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-800">Meu Mundo</h1>
            <p className="text-2xl text-gray-600">Escolha uma atividade divertida!</p>
          </div>
        </div>

        {/* Atividades */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sons Relaxantes */}
          <Link href="/crianca/sons">
            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-200 to-blue-300 border-4 border-blue-400 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Volume2 className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Sons</h2>
                <p className="text-lg text-gray-700">Relaxe com sons da natureza</p>
              </div>
            </Card>
          </Link>

          {/* Desenhos para Colorir */}
          <Link href="/crianca/colorir">
            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-200 to-purple-300 border-4 border-purple-400 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Palette className="w-10 h-10 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Colorir</h2>
                <p className="text-lg text-gray-700">Pinte desenhos lindos</p>
              </div>
            </Card>
          </Link>

          {/* Piano */}
          <Link href="/crianca/piano">
            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-pink-200 to-pink-300 border-4 border-pink-400 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Music className="w-10 h-10 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Piano</h2>
                <p className="text-lg text-gray-700">Toque músicas divertidas</p>
              </div>
            </Card>
          </Link>

          {/* Desenho Livre */}
          <Link href="/crianca/desenhar">
            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-200 to-green-300 border-4 border-green-400 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Palette className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Desenhar</h2>
                <p className="text-lg text-gray-700">Crie suas próprias artes</p>
              </div>
            </Card>
          </Link>

          {/* Emoções */}
          <Link href="/crianca/emocoes">
            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-yellow-200 to-yellow-300 border-4 border-yellow-400 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Smile className="w-10 h-10 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Emoções</h2>
                <p className="text-lg text-gray-700">Aprenda sobre sentimentos</p>
              </div>
            </Card>
          </Link>

          {/* Acalme-se */}
          <Link href="/crianca/acalmar">
            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-teal-200 to-teal-300 border-4 border-teal-400 shadow-xl hover:shadow-2xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-10 h-10 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Acalme-se</h2>
                <p className="text-lg text-gray-700">Respire e relaxe</p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
