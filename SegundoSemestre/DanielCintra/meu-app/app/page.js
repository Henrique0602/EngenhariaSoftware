import Button from "./button";
import "./globals.css";

const Titulo = ({ texto }) => <h1>{texto}</h1>;

const Subtitulo = ({ texto }) => {
  return <h2>{texto}</h2>;
};

const Alerta = ({ tipo = "info", children, ...rest }) => {
  const classe = `alert  alert${tipo}`;

  return (
    <div className={classe} {...rest}>
      {children}
    </div>
  );
};

export default function Home() {
  const itens = ["React", "Vue", "Angular"];
  const cursos = [{id:101, turma : '1ESS'}, {id:102, turma:'1ESS'}, {id:103, turma:'1ESS'}]
  return (
    <>
      <Titulo texto="Esse é o componnte titulo" />
      <Subtitulo texto="Esse é o componnte titulo" />

      <Button ativo={false} />

      <Alerta name="alerta1">
        <h1>este é o alerta!</h1>
      </Alerta>

      <Button ativo={true} onclick={() => alert("clicou")} />
      <ul>
        {itens.map((framwork) => (
          <li key={framwork}>{framwork}</li>
        ))}
      </ul>
    </>
  );
}
