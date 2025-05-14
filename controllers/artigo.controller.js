const artigos = [
  {
    titulo: "JavaScript",
    descricao: "Uma introdução ao mundo do JavaScript e suas aplicações.",
    autor: 'Robert Robert',
    paginas: 10,
  },
  {
    titulo: "Python",
    descricao: "Explorando como Python domina o mundo da ciência de dados.",
    autor: 'Funny Valentine',
    paginas: 8,
  },
  {
    titulo: "Rust",
    descricao: "Por que Rust é a escolha para sistemas de alta performance.",
    autor: 'John John',
    paginas: 12,
  },
  {
    titulo: "Go",
    descricao: "Como Go está transformando o desenvolvimento backend.",
    autor: 'Daniel Daniel',
    paginas: 7,
  },
];

const artigoController = {
  async create(req, res) {
    const { titulo, descricao, autor, paginas } = req.body;

    if (!titulo || !descricao || !autor || !paginas) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    const novoArtigo = { titulo, autor, descricao, paginas };
    artigos.push(novoArtigo);
    res.status(201).json(novoArtigo);
  },

  async findAll(_, res) {
    res.status(200).render("artigos", { artigos });
  },

  async findByTitle(req, res) {
    const { titulo } = req.params;
    const artigo = artigos.find((art) => art.titulo === titulo);

    if (!artigo) {
      return res.status(404).send(`Artigo "${titulo}" não encontrado`);
    }

    res.status(200).json(artigo);
  },

  async updateByTitle(req, res) {
    const { titulo: tituloParam } = req.params;
    const index = artigos.findIndex((artigo) => artigo.titulo === tituloParam);

    if (index === -1) {
      return res.status(404).send(`Artigo "${tituloParam}" não encontrado`);
    }

    const { titulo, descricao, autor, paginas } = req.body;
    if (!titulo || !descricao || !autor || !paginas) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    const novoArtigo = { titulo, autor, descricao, paginas };
    artigos[index] = novoArtigo
    return res.status(200).json(novoArtigo);
  },

  async deleleteByTitle(req, res) {
    const { titulo } = req.params;
    const index = artigos.findIndex((art) => art.titulo === titulo);

    if (index === -1) {
      return res.status(404).send(`Artigo "${titulo}" não encontrado.`);
    }

    artigos.splice(index, 1);
    res.status(200).send(`Artigo "${titulo}" deletado.`);
  },
};

module.exports = artigoController;
