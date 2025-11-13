"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Camera, BookOpen, Utensils, Heart, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

export default function ResponsavelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 p-4">
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
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                <Heart className="w-10 h-10 text-white fill-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Guia & Apoio</h1>
            <p className="text-xl text-gray-600">Acompanhe o desenvolvimento do seu filho</p>
          </div>
        </div>

        {/* Ferramentas */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Galeria de Fotos */}
          <Link href="/responsavel/galeria">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-pink-100 to-pink-200 border-2 border-pink-300 shadow-lg hover:shadow-xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <Camera className="w-8 h-8 text-pink-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Galeria</h2>
                <p className="text-sm text-gray-600">Registre atividades e momentos especiais</p>
              </div>
            </Card>
          </Link>

          {/* Anotações */}
          <Link href="/responsavel/anotacoes">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-lg hover:shadow-xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Anotações</h2>
                <p className="text-sm text-gray-600">O que funcionou e o que não funcionou</p>
              </div>
            </Card>
          </Link>

          {/* Diário Alimentar */}
          <Link href="/responsavel/alimentacao">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-orange-300 shadow-lg hover:shadow-xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <Utensils className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Alimentação</h2>
                <p className="text-sm text-gray-600">Monitore a dieta e nutrição</p>
              </div>
            </Card>
          </Link>

          {/* Relatórios */}
          <Link href="/responsavel/relatorios">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 shadow-lg hover:shadow-xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Relatórios</h2>
                <p className="text-sm text-gray-600">Visualize o progresso e evolução</p>
              </div>
            </Card>
          </Link>

          {/* Agenda */}
          <Link href="/responsavel/agenda">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 shadow-lg hover:shadow-xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Agenda</h2>
                <p className="text-sm text-gray-600">Lembretes e rotinas terapêuticas</p>
              </div>
            </Card>
          </Link>

          {/* Autoajuda */}
          <Link href="/responsavel/autoajuda">
            <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-teal-100 to-teal-200 border-2 border-teal-300 shadow-lg hover:shadow-xl cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Autoajuda</h2>
                <p className="text-sm text-gray-600">Cuide de você também</p>
              </div>
            </Card>
          </Link>
        </div>

        {/* Mensagem de Apoio */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200">
          <div className="text-center space-y-2">
            <Heart className="w-8 h-8 text-purple-600 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">
              Você está fazendo um trabalho incrível! 💜
            </p>
            <p className="text-sm text-gray-600">
              Cada passo é uma vitória. Continue assim, você não está sozinho(a).
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
