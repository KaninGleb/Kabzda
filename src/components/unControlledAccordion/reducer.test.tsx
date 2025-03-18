import {expect, test} from 'vitest';
import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer.tsx';


test('Collapsed should be true', () => {
    const initialState: StateType = { collapsed: false };
    const endState = reducer(initialState, { type: TOGGLE_COLLAPSED });

    expect(endState.collapsed).toBe(true);
    expect(endState.collapsed).toBeDefined();
})

test('Collapsed should be false', () => {
    const initialState: StateType = { collapsed: true };
    const endState = reducer(initialState, { type: TOGGLE_COLLAPSED });

    expect(endState.collapsed).toBe(false);
    expect(endState.collapsed).toBeDefined();
})

test('Reducer should throw error because action type is incorrect', () => {
    const initialState: StateType = { collapsed: true };

    expect( () => {
        reducer(initialState, { type: 'FAKE-TYPE' })
    }).toThrowError();
})