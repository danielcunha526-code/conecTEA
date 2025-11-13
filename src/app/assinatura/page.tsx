"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Star, Sparkles, Crown, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AssinaturaPage() {
  const [planoSelecionado, setPlanoSelecionado] = useState<string | null>(null)
  const [processandoPagamento, setProcessandoPagamento] = useState(false)

  const handleAssinatura = (plano: string) => {
    setPlanoSelecionado(plano)
    setProcessandoPagamento(true)
    
    // Simulação de processamento de pagamento
    setTimeout(() => {
      alert(`Assinatura ${plano} ativada com sucesso! 🎉`)
      setProcessandoPagamento(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 p-4 md:p-8">
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
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Escolha seu Plano
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acesso completo a todas as funcionalidades do conecTEA para ajudar no desenvolvimento do seu filho
            </p>
          </div>
        </div>

        {/* Planos */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Plano Mensal */}
          <Card className="p-6 hover:scale-105 transition-all duration-300 bg-white border-2 border-gray-200 shadow-lg">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Mensal</h3>
                <div className="text-4xl font-bold text-gray-800 mb-1">
                  R$ 29,90
                  <span className="text-lg text-gray-500 font-normal">/mês</span>
                </div>
                <p className="text-sm text-gray-500">Cancele quando quiser</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Todos os jogos e atividades</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Painel de progresso completo</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Galeria de fotos ilimitada</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Acesso à comunidade</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Suporte por email</span>
                </div>
              </div>

              <Button 
                onClick={() => handleAssinatura("Mensal")}
                disabled={processandoPagamento}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {processandoPagamento && planoSelecionado === "Mensal" ? "Processando..." : "Assinar Agora"}
              </Button>
            </div>
          </Card>

          {/* Plano Trimestral - DESTAQUE */}
          <Card className="p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-yellow-400 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                MAIS POPULAR
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <Crown className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Trimestral</h3>
                <div className="text-4xl font-bold text-white mb-1">
                  R$ 69,90
                  <span className="text-lg text-purple-200 font-normal">/3 meses</span>
                </div>
                <p className="text-sm text-purple-200">Economize 22%</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">Tudo do plano Mensal</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">Relatórios mensais detalhados</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">Dicas personalizadas por IA</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">Suporte prioritário</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">Conteúdo exclusivo semanal</span>
                </div>
              </div>

              <Button 
                onClick={() => handleAssinatura("Trimestral")}
                disabled={processandoPagamento}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold"
              >
                {processandoPagamento && planoSelecionado === "Trimestral" ? "Processando..." : "Assinar Agora"}
              </Button>
            </div>
          </Card>

          {/* Plano Anual */}
          <Card className="p-6 hover:scale-105 transition-all duration-300 bg-white border-2 border-gray-200 shadow-lg">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Anual</h3>
                <div className="text-4xl font-bold text-gray-800 mb-1">
                  R$ 239,90
                  <span className="text-lg text-gray-500 font-normal">/ano</span>
                </div>
                <p className="text-sm text-green-600 font-semibold">Economize 33%</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">Tudo do plano Trimestral</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">Consultoria mensal com especialista</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">Acesso antecipado a novos recursos</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">Material educativo exclusivo</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">Suporte VIP 24/7</span>
                </div>
              </div>

              <Button 
                onClick={() => handleAssinatura("Anual")}
                disabled={processandoPagamento}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {processandoPagamento && planoSelecionado === "Anual" ? "Processando..." : "Assinar Agora"}
              </Button>
            </div>
          </Card>
        </div>

        {/* Garantia */}
        <Card className="p-6 bg-blue-50 border-2 border-blue-200">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Garantia de 7 dias</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experimente sem riscos! Se não ficar satisfeito, devolvemos 100% do seu dinheiro nos primeiros 7 dias.
            </p>
          </div>
        </Card>

        {/* FAQ Rápido */}
        <div className="mt-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">Perguntas Frequentes</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Card className="p-4 text-left bg-white">
              <h4 className="font-bold text-gray-800 mb-2">Posso cancelar a qualquer momento?</h4>
              <p className="text-sm text-gray-600">Sim! Você pode cancelar sua assinatura quando quiser, sem multas ou taxas.</p>
            </Card>
            <Card className="p-4 text-left bg-white">
              <h4 className="font-bold text-gray-800 mb-2">Quais formas de pagamento aceitam?</h4>
              <p className="text-sm text-gray-600">Aceitamos cartão de crédito, débito, PIX e boleto bancário.</p>
            </Card>
            <Card className="p-4 text-left bg-white">
              <h4 className="font-bold text-gray-800 mb-2">Posso usar em vários dispositivos?</h4>
              <p className="text-sm text-gray-600">Sim! Sua assinatura funciona em até 3 dispositivos simultaneamente.</p>
            </Card>
            <Card className="p-4 text-left bg-white">
              <h4 className="font-bold text-gray-800 mb-2">Tem período de teste grátis?</h4>
              <p className="text-sm text-gray-600">Oferecemos 7 dias de garantia. Se não gostar, devolvemos seu dinheiro!</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
