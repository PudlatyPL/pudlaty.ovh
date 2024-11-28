import PropTypes from 'prop-types';

function TechnologiesCard({ name, icon, className = "" }) { 
    return <div className={'w-full bg-black/20 shadow-md p-8 rounded-md border-black border-solid border flex justify-around cursor-default select-none ' + className}>
            {icon}
            <p className='font-mono text-xl'>{name}</p> 
        </div>; 
}

TechnologiesCard.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object,
    className: PropTypes.string,
};

export default TechnologiesCard;