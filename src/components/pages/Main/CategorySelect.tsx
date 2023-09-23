import Spacing from 'layouts/Spacing'
import React, { useContext } from 'react'
import style from './CategorySelect.module.css'
import classNames from 'classnames'

type OnChange = (value: number) => void

type CategorySelectContextType = {
  value?: number
  onChange: OnChange
}

const CategorySelectContext = React.createContext<CategorySelectContextType>({
  value: undefined,
  onChange: () => {},
})

interface Props {
  value?: number
  onChange: OnChange
  children: React.ReactNode
}

function CategorySelect({ value, onChange, children }: Props) {
  return (
    <CategorySelectContext.Provider
      value={{
        value,
        onChange,
      }}
    >
      <div className='flex flex-wrap gap-x-[10px] gap-y-[6px]'>{children}</div>
    </CategorySelectContext.Provider>
  )
}

interface ItemProps {
  children: React.ReactNode
  value: number
}

function Item({ children, value }: ItemProps) {
  const context = useContext(CategorySelectContext)

  return (
    <button
      className={classNames(
        style.categoryItem,
        context.value === value ? style.active : undefined
      )}
      onClick={() => context.onChange(value)}
    >
      {children}
    </button>
  )
}

CategorySelect.Item = Item

export default CategorySelect
