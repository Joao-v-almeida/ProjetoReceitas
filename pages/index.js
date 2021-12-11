import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';

export default function Index() {
  return (
    <div>
      <Header title="TreinaCook" />

      <main>
        <Card
          name="Brigadeiro"
          category="Doce"
          picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
          link="/receitas/doces/brigadeiro"

        />

        <Card
          name="Bolo de Cenoura"
          category="Bolos"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/bolos/bolo-de-cenoura"

        />

        <Card
          name="Bolinho de Chuva"
          category="Lanches"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/014/950/329096/329096_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/doces/bolinho-de-chuva"

        />

        <Card
          name="Molho Branco"
          category="Molhos"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/044/199/332851/332851_original.jpg?mode=crop&width=710&height=400"
          link="/receitas/doces/molho-branco"

        />
      </main>

      <Footer />

    </div>
  )
}