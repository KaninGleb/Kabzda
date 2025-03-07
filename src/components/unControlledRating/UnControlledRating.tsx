import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const UnControlledRating = ({defaultValue, onChange}: RatingPropsType) => {
    const [rating, setRating] = useState<RatingValueType>(defaultValue ? defaultValue : 0);

    return (
        <div>
            <Star setRating={ () => { setRating(1); onChange(1) }} selected={ rating > 0 }/>
            <Star setRating={ () => { setRating(2); onChange(2) }} selected={ rating > 1 }/>
            <Star setRating={ () => { setRating(3); onChange(3) }} selected={ rating > 2 }/>
            <Star setRating={ () => { setRating(4); onChange(4) }} selected={ rating > 3 }/>
            <Star setRating={ () => { setRating(5); onChange(5) }} selected={ rating > 4 }/>

            <button onClick={ () => { setRating(0); onChange(0) }}>Set to 0 - UnControlledRating.tsx</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRating: () => void
}

const Star = (props: StarPropsType) => {
    const starStyle: React.CSSProperties = {
        cursor: 'pointer',
        userSelect: 'none',
    }

    return (
        <span onClick={ () => props.setRating() } style={starStyle}>
            {props.selected ? '🟢' : '🔴'}
        </span>
    )
}

