import { ArrowRight, MapPin, Calendar, Sparkles, ShieldCheck, Users, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-pattern bg-no-repeat bg-center text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 space-y-16">
        <header className="flex items-center justify-between">
          <img src="/logo.svg" alt="plann.er" className="h-8" />
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <span className="hidden sm:inline">Planeje em minutos</span>
            <Link
              to="/criar"
              className="bg-zinc-900 text-zinc-200 rounded-lg px-4 py-2 font-medium hover:bg-zinc-800 shadow-shape"
            >
              Entrar
            </Link>
          </div>
        </header>

        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-300 shadow-shape text-sm">
              <Sparkles className="size-4 text-lime-300" />
              Viagens simples, lugares memoraveis
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Marque viagens, encontre lugares interessantes e acessiveis.
            </h1>
            <p className="text-zinc-300 text-lg">
              Crie roteiros, convide amigos e descubra pontos com acessibilidade,
              seguranca e custo-beneficio sem perder tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/criar"
                className="bg-lime-300 text-lime-950 rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 hover:bg-lime-400"
              >
                Planejar viagem
                <ArrowRight className="size-5" />
              </Link>
              <a
                href="#como-funciona"
                className="bg-zinc-900 text-zinc-200 rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 shadow-shape"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl shadow-shape p-6 space-y-4">
            <div className="flex items-center gap-3 text-zinc-400">
              <MapPin className="size-5" />
              <span>Para onde voce vai?</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400">
              <Calendar className="size-5" />
              <span>Quando?</span>
            </div>
            <div className="h-px bg-zinc-800" />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2">
                <p className="text-zinc-400">Acessibilidade</p>
                <p className="text-zinc-200 font-medium">Elevadores, rampas</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2">
                <p className="text-zinc-400">Interesses</p>
                <p className="text-zinc-200 font-medium">Cultura, natureza</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2">
                <p className="text-zinc-400">Orcamento</p>
                <p className="text-zinc-200 font-medium">Flexivel</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2">
                <p className="text-zinc-400">Companhia</p>
                <p className="text-zinc-200 font-medium">Amigos e familia</p>
              </div>
            </div>
            <Link
              to="/criar"
              className="w-full bg-lime-300 text-lime-950 rounded-lg px-4 py-2.5 font-medium flex items-center justify-center gap-2 hover:bg-lime-400"
            >
              Comecar agora
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-zinc-900 rounded-xl p-4 shadow-shape space-y-2">
            <ShieldCheck className="size-5 text-lime-300" />
            <h3 className="font-semibold">Acessibilidade</h3>
            <p className="text-sm text-zinc-400">
              Filtros reais para mobilidade, conforto e seguranca.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 shadow-shape space-y-2">
            <MapPin className="size-5 text-lime-300" />
            <h3 className="font-semibold">Descobertas</h3>
            <p className="text-sm text-zinc-400">
              Lugares interessantes perto de voce e do seu roteiro.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 shadow-shape space-y-2">
            <Users className="size-5 text-lime-300" />
            <h3 className="font-semibold">Convites</h3>
            <p className="text-sm text-zinc-400">
              Organize a galera, listas e confirmacoes em um so lugar.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 shadow-shape space-y-2">
            <Wallet className="size-5 text-lime-300" />
            <h3 className="font-semibold">Custo-beneficio</h3>
            <p className="text-sm text-zinc-400">
              Compare opcoes e mantenha o orcamento sob controle.
            </p>
          </div>
        </section>

        <section id="como-funciona" className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Como funciona</h2>
            <p className="text-zinc-300">
              Em poucos passos voce cria uma viagem completa e colaborativa.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="bg-zinc-900 rounded-xl p-4 shadow-shape flex items-start gap-3">
              <div className="size-8 rounded-full bg-lime-300 text-lime-950 font-semibold flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-semibold">Defina destino e datas</h3>
                <p className="text-sm text-zinc-400">
                  Selecione quando e para onde viajar com filtros inteligentes.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 shadow-shape flex items-start gap-3">
              <div className="size-8 rounded-full bg-lime-300 text-lime-950 font-semibold flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-semibold">Compartilhe com a galera</h3>
                <p className="text-sm text-zinc-400">
                  Convide amigos e acompanhe confirmacoes em tempo real.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 shadow-shape flex items-start gap-3">
              <div className="size-8 rounded-full bg-lime-300 text-lime-950 font-semibold flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-semibold">Descubra e finalize</h3>
                <p className="text-sm text-zinc-400">
                  Escolha lugares acessiveis e finalize um roteiro completo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 rounded-2xl shadow-shape p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Pronto para planejar?</h3>
            <p className="text-zinc-300">
              Comece agora e organize sua proxima viagem com facilidade.
            </p>
          </div>
          <Link
            to="/criar"
            className="bg-lime-300 text-lime-950 rounded-lg px-6 py-3 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Criar viagem
            <ArrowRight className="size-5" />
          </Link>
        </section>

        <footer className="text-xs text-zinc-500">
          Ao usar o plann.er voce concorda com nossos termos e politicas.
        </footer>
      </div>
    </div>
  );
}
