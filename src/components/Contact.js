import React,{Component} from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
         };
    }
    render() {
        const{
            avatar,
            name,
        }=this.props;
        return (
            <div className='Contact'>
                <img className="avatar" src={avatar} alt={name}/>
                <div className='status'>
                    <h4 className='name'>{name}</h4>
                    <div onClick={
                        (event) =>{
                            const newStatus= !this.state.online;
                            this.setState({online: newStatus})
                            console.log(this.state.online)
                        }
                    }>
                        <div className={this.state.online?'status-online':'status-offline'}></div>
                        <p className='status-text'>{this.state.online?'online':'offline'}</p>
                    </div>
                </div> 
            </div>
        );
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;

// function Contact({name, avatar, online}){
//  return (
//     <div className='Contact'>
//         <img className="avatar" src={avatar} alt={name}/>
//         <div className='status'>
//             <h4 className='name'>{name}</h4>
//             <div>
//                 <div className={online?'status-online':'status-offline'}></div>
//                 <p className='status-text'>{online?'online':'offline'}</p>
//             </div>
//         </div> 
//     </div>
//  )
// };

// Contact.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     online: PropTypes.bool.isRequired,
//   };
// export default Contact;
