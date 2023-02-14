import '../styles/Html.css';

const iframe = '<iframe src="https://manusucaria.github.io/Fuga/" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const Html = () => {
    return (
        <div id='ht' className='div-html'>
            <a className='link-iframe' href="https://manusucaria.github.io/Fuga/" target="_blank" rel="noopener noreferrer"><h2 className='titulo-seccion'>HTML/CSS</h2></a>
            <div className='contenedor-img'>
                <Iframe className="iframe" iframe={iframe} />,
            </div>
        </div>
    )
}

export default Html;