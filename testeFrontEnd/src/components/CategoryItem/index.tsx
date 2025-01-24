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
  <div className={styles.categoryItemContainer} onClick={onClick}>
    <div className={`${styles.svgContainer} ${isSelected && styles.selected}`}>
      {svg}
    </div>
    <p className={isSelected ? styles.selectedText : ""}>{categoryName}</p>
  </div>
);

export default CategoryItem;
