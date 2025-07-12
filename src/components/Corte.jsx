const imagens = [
  {
    id: 1,
    imagem: "/exemplo.jpg",
  },
  {
    id: 2,
    imagem: "/exemplo2.jpg",
  },
  {
    id: 3,
    imagem: "/exemplo3.jpg",
  },
  {
    id: 4,
    imagem: "/exemplo2.jpg",
  },
  {
    id: 5,
    imagem: "/exemplo3.jpg",
  },
  {
    id: 6,
    imagem: "/exemplo.jpg",
  },
];

const Corte = () => {
  return (
    <section id="cortes">
      {imagens.map((imagem) => (
        <div className="corte" key={imagem.id}>
          <img src={imagem.imagem} alt={imagem.id} />
        </div>
      ))}
    </section>
  );
};

export default Corte;
