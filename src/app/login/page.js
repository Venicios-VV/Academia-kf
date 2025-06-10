'use client'
import style from './page.module.css';

export default function Login() {
  return (
    <div className={style.pageContainer}>
      <div className={style.leftContainer}>
        <div className={style.loginBox}>
          <h2 className={style.title}>Login</h2>
          <form>
            <label htmlFor="email" className={style.label}>Email:</label>
            <input type="email" id="email" name="email" className={style.input} required />

            <label htmlFor="senha" className={style.label}>Senha:</label>
            <div className={style.senhaContainer}>
              <input type="password" id="senha" name="senha" className={style.input} required />
              <button
                type="button"
                className={style.verSenha}
                onClick={() => {
                  const senhaInput = document.getElementById('senha');
                  senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
                }}
              >
                <img
                  src="/image.png"
                  height="25"
                  width="25"
                  className={style.olhoSenha}
                  alt="Ver senha"
                />
              </button>
            </div>

            <label className={style.checkbox}>
              <input type="checkbox" id="salvarSenha" name="salvarSenha" />
              Salvar senha
            </label>

            <button type="submit" className={style.button}>Entrar<a href="../paginainicial"></a></button>
          </form>
        </div>
      </div>

      <div className={style.rightContainer}>
        <img
          src="/ivafundo.jpg"
          alt="Imagem decorativa"
          className={style.loginImage}
        />
      </div>
    </div>
  );
}
