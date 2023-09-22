
export default function Home() {
  const lista =[
  {nome: "Leonardo", idade:20, aluno:true},
  {nome: "Maria", idade:21, aluno:true}
]
  return (
    <main className='flex min-h-screen flex-col items-center justify-bet'>
      <h1>Next.js</h1>
    <ul>
      {
      lista.map(
        (item) =>(
          <li key={item.nome}>
            {item.nome} - {item.idade} - {item.aluno}
          </li>
        )
      )
      }
    </ul>
    </main>
    

  )
}
