import TinyFlag from "tiny-flag-react";

 function Data(props) {
   const flagURL=(code)=>`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${code}.svg`;
   console.log(props);
   const {no,pic,name,team,country,points,increase,decrease}=props;
   return (
    <tr >
          <td>{no}</td>
          <td><TinyFlag fallbackImageURL={flagURL(country)}/></td>
          <td>
            <img src={pic} alt={name} style={{
            height: 70,
            width: 70
           }} />
          </td>
          <td>{name}</td>
          <td>{team }</td>
          <td>{country}</td>
          <td>{points}</td>
          <td><button onClick={decrease}>-5 Pts</button></td>
          <td><button onClick={increase}>+5 Pts</button></td>
    </tr>
  )
}
export default Data;