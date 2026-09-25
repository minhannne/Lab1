# Exercise 3 - Component State Decomposition

## Component States

The component has 4 UI states:

1. Loading
   - Display CSS shimmer skeleton
   - No real data is shown

2. Live
   - Display metadata badges
   - Display data items in a grid

3. Empty
   - Display an empty-state message
   - Provide an accessible retry action

4. Error
   - Display an error message
   - Provide an accessible retry action

## State Transitions

Loading -> Live
Loading -> Empty
Loading -> Error

Error -> Loading
Empty -> Loading

## Implementation Order

1. Loading Skeleton
2. Live Data
3. Empty State
4. Error State

## Git Commits

Each state should be committed separately.
https://chatgpt.com/share/6ab6a6bd-9cd4-83ec-b3f0-41cdc3d8e7a6
