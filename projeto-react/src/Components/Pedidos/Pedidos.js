export default function Pedidos(props) {
    return (
        <tr>
            <td>{props.idpedidos}</td>
            <td>{props.nome_cliente}</td>
            <td>{props.email}</td>
            <td>{props.telefone}</td>
            <td>{props.endereco}</td>
            <td>{props.complemento}</td>
            <td>{props.descricao_produto}</td>
            <td>{props.preco}</td>
            <td>{props.quantidade}</td>
            <td>{props.preco_final}</td>
        </tr>
    );
}