'use client'
import style from './page.module.css';

export default function Perfil() {
  return (
    <div className={style.pageContainer}>
      {/* Área esquerda com as informações do aluno */}
      <div className={style.leftContainer}>
        <div className={style.profileBox}>
          <h2 className={style.title}>Perfil do Aluno</h2>
          
          <div className={style.info}>
            <div className={style.infoItem}>
              <strong>Nome:</strong>
              <span>João da Silva</span>
            </div>
            <div className={style.infoItem}>
              <strong>Email:</strong>
              <span>joao.silva@email.com</span>
            </div>
            <div className={style.infoItem}>
              <strong>Curso:</strong>
              <span>Engenharia de Software</span>
            </div>
            <div className={style.infoItem}>
              <strong>Matrícula:</strong>
              <span>2020/12345</span>
            </div>
            <div className={style.infoItem}>
              <strong>Data de nascimento:</strong>
              <span>15/04/2000</span>
            </div>
          </div>

          <button className={style.button}>Editar Perfil</button>
        </div>
      </div>

      {/* Área direita com a imagem do perfil */}
      <div className={style.rightContainer}>
        <img
          src="/perfilImagem.jpg"  // Substitua pelo caminho da imagem do aluno
          alt="Imagem do perfil"
          className={style.profileImage}
        />
      </div>
    </div>
  );
}
