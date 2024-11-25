import React from "react";
import "./index.css";

const Publications: React.FC = () => {
    return (
      
            <div className="publication-card">
                <img src="/image1.jpg" alt="image1" />
                <div className="publication-info">
                    <h3>Название статьи 1</h3>
                    <p>Автор статьи: Имя Фамилия</p>
                </div>
            </div>
    );
}

export default Publications;