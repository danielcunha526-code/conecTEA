"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Camera, Upload, X, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

interface Photo {
  id: number
  url: string
  title: string
  description: string
  date: string
}

export default function GaleriaPage() {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      title: "Primeira vez no parque",
      description: "Ele adorou os balanços! Ficou muito feliz.",
      date: "15/01/2025"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
      title: "Brincando com massinha",
      description: "Atividade sensorial - ficou concentrado por 20 minutos!",
      date: "12/01/2025"
    }
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    description: "",
    url: ""
  })

  const handleAddPhoto = () => {
    if (newPhoto.title && newPhoto.url) {
      const photo: Photo = {
        id: Date.now(),
        url: newPhoto.url,
        title: newPhoto.title,
        description: newPhoto.description,
        date: new Date().toLocaleDateString('pt-BR')
      }
      setPhotos([photo, ...photos])
      setNewPhoto({ title: "", description: "", url: "" })
      setShowAddForm(false)
    }
  }

  const handleDeletePhoto = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
              <Camera className="w-10 h-10 text-purple-600" />
              Galeria de Atividades
            </h1>
            <p className="text-gray-600 mt-2">Registre momentos especiais e conquistas</p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => setShowAddForm(!showAddForm)}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Upload className="w-5 h-5 mr-2" />
              Adicionar Foto
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>

        {/* Formulário de Adicionar Foto */}
        {showAddForm && (
          <Card className="p-6 bg-white border-4 border-purple-300 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nova Foto</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Título da atividade
                </label>
                <Input
                  placeholder="Ex: Primeira vez no parque"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                  className="text-lg h-12"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  URL da foto
                </label>
                <Input
                  placeholder="Cole o link da imagem aqui"
                  value={newPhoto.url}
                  onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                  className="text-lg h-12"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Dica: Use serviços como Imgur, Google Photos ou Unsplash
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Descrição (opcional)
                </label>
                <Textarea
                  placeholder="Conte como foi essa atividade..."
                  value={newPhoto.description}
                  onChange={(e) => setNewPhoto({ ...newPhoto, description: e.target.value })}
                  className="min-h-24"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleAddPhoto} size="lg" className="flex-1">
                  <ImageIcon className="w-5 h-5 mr-2" />
                  Salvar Foto
                </Button>
                <Button 
                  onClick={() => setShowAddForm(false)} 
                  variant="outline" 
                  size="lg"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Grid de Fotos */}
        {photos.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Nenhuma foto ainda</h3>
            <p className="text-gray-600">Adicione fotos das atividades para começar!</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-4 border-purple-200">
                <div className="relative">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => handleDeletePhoto(photo.id)}
                    className="absolute top-2 right-2 w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-800">{photo.title}</h3>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-2">{photo.date}</span>
                  </div>
                  {photo.description && (
                    <p className="text-gray-600">{photo.description}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Dicas */}
        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-300">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Dicas para registrar atividades</h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Fotografe momentos de conquista e alegria</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Anote o que funcionou bem em cada atividade</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Registre progressos, mesmo os pequenos!</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">•</span>
              <span>Use essas memórias para motivar e celebrar</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
