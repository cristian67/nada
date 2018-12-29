import React,{Component} from 'react';

class OptionSelect extends Component {

    render() {
     const {_id, descripcion} = this.props.categorias
        return (
         
         <option value={_id}>{descripcion}</option>
         );
    }
}

export default OptionSelect;