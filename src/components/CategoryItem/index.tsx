// CategoryItem.tsx
import React from "react";
import styles from "./styles.module.scss";

interface CategoryItemProps {
  svg: React.ReactNode;
  categoryName: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  svg,
  categoryName,
  isSelected,
  onClick,
}) => (
  <button
    type="button"
    className={`${styles.categoryItemContainer} ${
      isSelected ? styles.selected : ""
    }`}
    onClick={onClick}
    aria-pressed={isSelected}
    aria-label={`Selecionar categoria ${categoryName}`}
  >
    <div className={styles.svgContainer}>{svg}</div>
    <p className={isSelected ? styles.selectedText : ""}>{categoryName}</p>
  </button>
);

export default CategoryItem;
