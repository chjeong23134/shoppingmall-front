import './ProductModify.scss';

interface PropType {
    id: number
}

export default function ProductModify(prop: PropType) {
    return (
        <div className='product-modify'>
            <div className='label-wrapper'>
                <label>[ Name ]</label>
                <input />
            </div>

            <div className='label-wrapper'>
                <label>[ Description ]</label>
                <input />
            </div>

            <div className='label-wrapper'>
                <label>[ Price ]</label>
                <input />
            </div>

            <div className='label-wrapper'>
                <label>[ Stock ]</label>
                <input />
            </div>

            <div className='label-wrapper'>
                <label>[ Sort ]</label>
                <input />
            </div>           
        </div>
    );
}