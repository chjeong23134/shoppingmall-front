import './Tab.scss';

interface PropType {
    children?: React.ReactNode
}

export default function Tab(props: PropType) {
    return (
        <div className='tab'>
            {props.children}
        </div>
    )
}