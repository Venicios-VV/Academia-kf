import db from "@/lib/db"
export default async () => {
    const pagamento = await db.query("select * from pagamentos")
 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         pagamento.rows.map( 
            a => (
               <div>
                  {a.data} 
               </div>
            ) 
         )
      }
   </div>
 </>);
}
