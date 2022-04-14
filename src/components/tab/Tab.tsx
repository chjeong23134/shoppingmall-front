import './Tab.scss';

interface Types {
    children?: React.ReactNode;
}

function Tab(props: Types) {
    return (
        <div className='tab'>
            {props.children}
        </div>
    )
}

export default Tab;